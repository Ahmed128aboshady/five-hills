#!/usr/bin/env python3
"""
Dubai Luxury Real Estate - Automated Project Uploader
Scans local directories, uploads media (images & PDFs) to WordPress REST API,
and creates Property Custom Post Type records with ACF fields populated.
"""

import os
import re
import json
import mimetypes
import requests
from requests.auth import HTTPBasicAuth

# --- Configurations (Edit with WordPress site details) ---
WP_SITE_URL = "https://your-wordpress-domain.com"  # e.g., https://5hills.ae
WP_USER = "admin"
WP_APP_PASSWORD = "xxxx xxxx xxxx xxxx"  # WordPress Application Password (Users -> Profile)

# Target directory to scan
SOURCE_DIR = r"\\UMI-EG\Marketing\5Hills Marketing Projects\5Hills Marketing Projects_"

# Report file to log upload states and prevent duplicates
STATE_FILE = "upload_state.json"


def load_state():
    if os.path.exists(STATE_FILE):
        try:
            with open(STATE_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            return {}
    return {}


def save_state(state):
    with open(STATE_FILE, 'w', encoding='utf-8') as f:
        json.dump(state, f, indent=4, ensure_ascii=False)


def check_auth(url, user, password):
    """Verify that credentials can access the WordPress REST API."""
    endpoint = f"{url}/wp-json/wp/v2/users/me"
    try:
        response = requests.get(endpoint, auth=HTTPBasicAuth(user, password), timeout=10)
        if response.status_code == 200:
            print("[✓] WordPress API Authentication Successful!")
            return True
        else:
            print(f"[✗] Auth failed. Status: {response.status_code}, Response: {response.text}")
            return False
    except Exception as e:
        print(f"[✗] Failed to connect to WordPress site: {e}")
        return False


def upload_media(url, user, password, file_path):
    """Uploads a local file to WordPress media library and returns the attachment ID."""
    endpoint = f"{url}/wp-json/wp/v2/media"
    file_name = os.path.basename(file_path)
    
    # Guess mime type
    mime_type, _ = mimetypes.guess_type(file_path)
    if not mime_type:
        mime_type = "application/octet-stream"

    print(f"    - Uploading: {file_name} ({mime_type})...")
    
    try:
        with open(file_path, 'rb') as f:
            file_data = f.read()

        headers = {
            "Content-Disposition": f"attachment; filename={file_name}",
            "Content-Type": mime_type
        }
        
        response = requests.post(
            endpoint,
            auth=HTTPBasicAuth(user, password),
            headers=headers,
            data=file_data,
            timeout=30
        )
        
        if response.status_code in [200, 201]:
            media_data = response.json()
            media_id = media_data.get('id')
            media_url = media_data.get('source_url')
            print(f"      [✓] Success! Attachment ID: {media_id}")
            return media_id, media_url
        else:
            print(f"      [✗] Upload failed: {response.status_code} - {response.text}")
            return None, None
    except Exception as e:
        print(f"      [✗] Error uploading file: {e}")
        return None, None


def infer_metadata(folder_name, files):
    """Intelligently guesses developer, location, property type and prices based on file names."""
    name_lower = folder_name.lower()
    
    # Default parameters
    meta = {
        "title": folder_name.replace("_", " ").title(),
        "developer_name": "Five Hills Signature",
        "location_text": "Dubai, UAE",
        "property_type": "apartment",
        "starting_price": 1800000,
        "payment_plan": "60/40 Plan",
        "handover_date": "Q4 2028",
        "amenities": ["pool", "gym", "smart_home", "security", "parking"]
    }
    
    # Infer Developer & Location
    if "wasl" in name_lower or "1 residences" in name_lower:
        meta["developer_name"] = "Wasl Asset Management"
        meta["location_text"] = "Wasl 1, Zabeel, Dubai"
        meta["starting_price"] = 2100000
        meta["handover_date"] = "Ready"
        meta["payment_plan"] = "Post-Handover Plan"
    elif "knightsbridge" in name_lower:
        meta["developer_name"] = "LEOS Developments"
        meta["location_text"] = "Meydan, District 11, Dubai"
        meta["property_type"] = "villa"
        meta["starting_price"] = 8500000
        meta["handover_date"] = "Q2 2028"
        meta["payment_plan"] = "60/40 Plan"
    elif "ellington" in name_lower:
        meta["developer_name"] = "Ellington Properties"
        meta["location_text"] = "MBR City, Dubai"
        meta["starting_price"] = 2900000
    elif "cedarwood" in name_lower or "pinewood" in name_lower:
        meta["property_type"] = "villa"
        meta["starting_price"] = 5500000
        meta["handover_date"] = "Q4 2027"
    elif "gate" in name_lower or "park" in name_lower:
        meta["location_text"] = "Zabeel Park, Dubai"
        meta["starting_price"] = 2400000
    elif "warehouse" in name_lower or "wharehouse" in name_lower:
        meta["property_type"] = "commercial"
        meta["starting_price"] = 12000000
        meta["handover_date"] = "Ready"

    return meta


def create_property_post(url, user, password, meta, featured_id, gallery_ids, brochure_id, floorplan_id):
    """Publishes a new property post in WordPress and maps all ACF fields."""
    endpoint = f"{url}/wp-json/wp/v2/property"
    
    # Setup ACF payloads
    acf_payload = {
        "starting_price": int(meta["starting_price"]),
        "developer_name": meta["developer_name"],
        "location_text": meta["location_text"],
        "property_type": meta["property_type"],
        "payment_plan": meta["payment_plan"],
        "handover_date": meta["handover_date"],
        "amenities": meta["amenities"]
    }
    
    if gallery_ids:
        acf_payload["gallery_images"] = gallery_ids
    if brochure_id:
        acf_payload["brochure_file"] = brochure_id
    if floorplan_id:
        acf_payload["floor_plan_file"] = floorplan_id

    # Core WordPress fields + ACF key
    payload = {
        "title": meta["title"],
        "content": f"Introducing {meta['title']}, a prime luxury development by {meta['developer_name']} in {meta['location_text']}.",
        "status": "publish",
        "acf": acf_payload
    }
    
    if featured_id:
        payload["featured_media"] = featured_id

    try:
        response = requests.post(
            endpoint,
            auth=HTTPBasicAuth(user, password),
            json=payload,
            timeout=20
        )
        if response.status_code in [200, 201]:
            post_data = response.json()
            print(f"      [✓] Published Successfully! Post ID: {post_data.get('id')} - Link: {post_data.get('link')}")
            return post_data.get('id')
        else:
            print(f"      [✗] Failed to create post: {response.status_code} - {response.text}")
            return None
    except Exception as e:
        print(f"      [✗] Error connecting to POST property: {e}")
        return None


def run_import():
    print("=" * 60)
    print("Dubai Real Estate Marketing - Automated Project Uploader")
    print("=" * 60)
    
    if not os.path.exists(SOURCE_DIR):
        print(f"[✗] Local directory path not found: {SOURCE_DIR}")
        print("Please verify the network path or adjust the SOURCE_DIR variable.")
        return

    # Check connection
    if not check_auth(WP_SITE_URL, WP_USER, WP_APP_PASSWORD):
        return

    state = load_state()
    folders = [d for d in os.listdir(SOURCE_DIR) if os.path.isdir(os.path.join(SOURCE_DIR, d))]
    
    # Filter folders to ignore drafts or system folders
    ignored_names = ["done", "posts", "5", "card", "new folder", "google photos"]
    project_folders = [f for f in folders if f.lower() not in ignored_names]

    print(f"Scanned {len(folders)} directories, found {len(project_folders)} potential projects to import.")
    
    for idx, folder in enumerate(project_folders, 1):
        print(f"\n[{idx}/{len(project_folders)}] Processing project: {folder}")
        
        # Check if already uploaded
        if folder in state and state[folder].get("status") == "uploaded":
            print(f"  - Project already uploaded (Post ID: {state[folder].get('post_id')}). Skipping.")
            continue
            
        proj_path = os.path.join(SOURCE_DIR, folder)
        
        # Gather all files in this project folder recursively
        all_files = []
        for root, _, files in os.walk(proj_path):
            for file in files:
                all_files.append(os.path.join(root, file))

        # Separate files by category
        images = []
        brochures = []
        floor_plans = []
        
        for fp in all_files:
            fn_lower = os.path.basename(fp).lower()
            if fn_lower.endswith(('.jpg', '.jpeg', '.png', '.webp')) and not fn_lower.startswith('._'):
                images.append(fp)
            elif fn_lower.endswith('.pdf') and not fn_lower.startswith('._'):
                if "brochure" in fn_lower:
                    brochures.append(fp)
                elif "floor" in fn_lower or "plan" in fn_lower:
                    floor_plans.append(fp)
                else:
                    brochures.append(fp)  # Fallback PDF

        print(f"  - Found {len(images)} images, {len(brochures)} brochures, {len(floor_plans)} floorplans.")

        # Guess metadata
        meta = infer_metadata(folder, all_files)

        # Upload Media
        gallery_ids = []
        featured_id = None
        brochure_id = None
        floorplan_id = None

        # Upload Images (Up to 5 images for speed / gallery constraints)
        for img_path in images[:5]:
            media_id, _ = upload_media(WP_SITE_URL, WP_USER, WP_APP_PASSWORD, img_path)
            if media_id:
                gallery_ids.append(media_id)
                if not featured_id:
                    featured_id = media_id  # Use first uploaded image as featured thumbnail

        # Upload Brochure
        if brochures:
            media_id, _ = upload_media(WP_SITE_URL, WP_USER, WP_APP_PASSWORD, brochures[0])
            if media_id:
                brochure_id = media_id

        # Upload Floor Plan
        if floor_plans:
            media_id, _ = upload_media(WP_SITE_URL, WP_USER, WP_APP_PASSWORD, floor_plans[0])
            if media_id:
                floorplan_id = media_id

        # Create CPT property post
        print(f"  - Creating post with fields: Type={meta['property_type']}, Developer={meta['developer_name']}, Price={meta['starting_price']}...")
        post_id = create_property_post(
            WP_SITE_URL, WP_USER, WP_APP_PASSWORD, 
            meta, featured_id, gallery_ids, brochure_id, floorplan_id
        )

        if post_id:
            # Update local state
            state[folder] = {
                "status": "uploaded",
                "post_id": post_id,
                "featured_media": featured_id,
                "gallery": gallery_ids,
                "brochure": brochure_id,
                "floor_plan": floorplan_id
            }
            save_state(state)
        else:
            print("  - [✗] Skipping state save due to publishing error.")

    print("\n" + "=" * 60)
    print("Import process completed!")
    print("=" * 60)


if __name__ == "__main__":
    run_import()
