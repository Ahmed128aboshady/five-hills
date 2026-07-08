# WP All Import Configuration Guide & PHP Helper Snippets

This guide explains how to import the projects from the CSV file (`projects-template.csv`) and map their associated local images, PDFs, and ACF fields in WordPress using **WP All Import**.

---

## 1. Prerequisites (Plugins Required)
To import custom post types and Advanced Custom Fields, you need:
1. **WP All Import (Pro)**
2. **WP All Import - ACF Add-On**
3. **Advanced Custom Fields (Free or Pro)**
4. **Five Hills Real Estate Integration** plugin (installed and active)

---

## 2. Setting Up the Local Files for Import
Instead of downloading files from URLs, WP All Import allows you to upload a folder of local images and PDFs to your WordPress server and map them by filename:

1. Connect to your WordPress server via FTP/SFTP or CPanel File Manager.
2. Navigate to: `/wp-content/uploads/wpallimport/files/`. (Create these folders if they do not exist).
3. Upload all the images (e.g. `0.jpeg`, `00.png`), brochure PDFs, and floor plan PDFs from your local project folders directly into this directory.

---

## 3. Creating the Import Job
1. In WordPress Admin, go to **All Import** -> **New Import**.
2. Upload the `projects-template.csv` file.
3. Under *Create New*, select **Properties** (CPT `property`) and click **Step 2**.
4. Review the columns in Step 2, then click **Step 3** to configure mapping.

---

## 4. Drag & Drop Field Mapping (Step 3)

### A. Title & Content
* **Title**: Drag and drop `{Title}`.
* **Description**: Drag and drop `{Description}`.

### B. Advanced Custom Fields (ACF Add-On Section)
Open the **Advanced Custom Fields** section in WP All Import:
* **Starting Price**: `{StartingPriceAED}`
* **Developer Name**: `{DeveloperName}`
* **Display Location / Area**: `{DisplayLocation}`
* **Google Map Embed**: `{MapEmbedCode}`
* **Property Type**: Select *Set with XPath* and drag `{PropertyType}`.
* **Payment Plan**: `{PaymentPlan}`
* **Handover Date**: `{HandoverDate}`

#### 💡 Mapping Checkbox Amenities (ACF Array)
Because ACF Checkboxes expect a serialized PHP array, map the `Amenities` field using a custom PHP helper function:
1. Under **Amenities**, select *Set with XPath / Custom Field*.
2. Paste the following PHP function call:
   `[five_hills_parse_amenities({Amenities[1]})]`

### C. Images Section (Featured & Gallery)
1. Open the **Images** section.
2. Select **Use images currently uploaded in '/wp-content/uploads/wpallimport/files/'**.
3. For the **Featured Image**, drag and drop `{FeaturedImage[1]}`.
4. For the **Gallery Images**, check *Clean & check filenames*, and drag and drop `{GalleryImages[1]}`.

### D. Files Section (Brochures & Floor Plans)
1. Scroll down to the ACF fields for **Brochure PDF** and **Floor Plan PDF/Image**.
2. Select **Set with XPath** and drag and drop `{BrochureFile[1]}` and `{FloorPlanFile[1]}` respectively.
3. Ensure these files are located in `/wp-content/uploads/wpallimport/files/` so WordPress can attach them to the property posts.

### E. Taxonomies Section
Open the **Taxonomies** section:
* **Property Status**: Check *Property Status*, select *Each Properties has one Status*, and drag `{TaxonomyStatus[1]}`.
* **Locations**: Check *Locations*, select *Each Properties has one Location*, and drag `{TaxonomyLocationArea[1]}`.

---

## 5. Custom PHP Helper Snippet (Function Editor)
At the bottom of Step 3, click on the **Function Editor** tab, paste this PHP code, and click **Save**:

```php
<?php
/**
 * WP All Import PHP Helper: Parse comma-separated amenities into ACF Checkbox Array
 *
 * Example Input: "pool,gym,smart_home,security"
 * Output: array('pool', 'gym', 'smart_home', 'security')
 */
function five_hills_parse_amenities( $amenities_string ) {
    if ( empty( $amenities_string ) ) {
        return array();
    }
    
    // Split by comma
    $amenities_array = explode( ',', $amenities_string );
    
    // Trim spaces and sanitize
    $clean_amenities = array_map( 'trim', $amenities_array );
    
    return $clean_amenities;
}
?>
```

---

## 6. Run the Import
1. Proceed to **Step 4**.
2. Click **Auto-detect** to set the Unique Identifier.
3. Save and **Run the Import**.
4. All projects will be published instantly with local images and files attached, ready to display on the luxury frontend grid.
