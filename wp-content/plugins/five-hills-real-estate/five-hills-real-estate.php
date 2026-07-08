<?php
/**
 * Plugin Name: Five Hills Real Estate Integration
 * Plugin URI: https://5hills.ae
 * Description: Registers the Properties & Projects Custom Post Type, Custom Taxonomies, ACF Fields, and WP REST API extensions for Dubai Luxury Real Estate.
 * Version: 1.0.0
 * Author: Antigravity - Senior Developer
 * Author URI: https://google.com
 * License: GPL2
 * Text Domain: five-hills-re
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

/**
 * Register Custom Post Type: Properties
 */
function five_hills_register_property_cpt() {
    $labels = array(
        'name'                  => _x( 'Properties', 'Post Type General Name', 'five-hills-re' ),
        'singular_name'         => _x( 'Property', 'Post Type Singular Name', 'five-hills-re' ),
        'menu_name'             => __( 'Properties', 'five-hills-re' ),
        'name_admin_bar'        => __( 'Property', 'five-hills-re' ),
        'archives'              => __( 'Property Archives', 'five-hills-re' ),
        'attributes'            => __( 'Property Attributes', 'five-hills-re' ),
        'parent_item_colon'     => __( 'Parent Property:', 'five-hills-re' ),
        'all_items'             => __( 'All Properties', 'five-hills-re' ),
        'add_new_item'          => __( 'Add New Property', 'five-hills-re' ),
        'add_new'               => __( 'Add New', 'five-hills-re' ),
        'new_item'              => __( 'New Property', 'five-hills-re' ),
        'edit_item'             => __( 'Edit Property', 'five-hills-re' ),
        'update_item'           => __( 'Update Property', 'five-hills-re' ),
        'view_item'             => __( 'View Property', 'five-hills-re' ),
        'view_items'            => __( 'View Properties', 'five-hills-re' ),
        'search_items'          => __( 'Search Property', 'five-hills-re' ),
        'not_found'             => __( 'Not found', 'five-hills-re' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'five-hills-re' ),
        'featured_image'        => __( 'Featured Image (Main Thumbnail)', 'five-hills-re' ),
        'set_featured_image'    => __( 'Set featured image', 'five-hills-re' ),
        'remove_featured_image' => __( 'Remove featured image', 'five-hills-re' ),
        'use_featured_image'    => __( 'Use as featured image', 'five-hills-re' ),
        'insert_into_item'      => __( 'Insert into property', 'five-hills-re' ),
        'uploaded_to_this_item' => __( 'Uploaded to this property', 'five-hills-re' ),
        'items_list'            => __( 'Properties list', 'five-hills-re' ),
        'items_list_navigation' => __( 'Properties list navigation', 'five-hills-re' ),
        'filter_items_list'     => __( 'Filter properties list', 'five-hills-re' ),
    );

    $args = array(
        'label'                 => __( 'Property', 'five-hills-re' ),
        'description'           => __( 'Properties and projects in Dubai', 'five-hills-re' ),
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'thumbnail', 'excerpt', 'revisions', 'custom-fields' ),
        'taxonomies'            => array( 'property_status', 'property_location' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-admin-home',
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'show_in_rest'          => true, // Required for WP REST API & block editor
        'capability_type'       => 'post',
    );

    register_post_type( 'property', $args );
}
add_action( 'init', 'five_hills_register_property_cpt', 0 );

/**
 * Register Taxonomy: Property Status (e.g. Off-Plan, Ready)
 */
function five_hills_register_status_taxonomy() {
    $labels = array(
        'name'                       => _x( 'Statuses', 'Taxonomy General Name', 'five-hills-re' ),
        'singular_name'              => _x( 'Status', 'Taxonomy Singular Name', 'five-hills-re' ),
        'menu_name'                  => __( 'Property Status', 'five-hills-re' ),
        'all_items'                  => __( 'All Statuses', 'five-hills-re' ),
        'new_item_name'              => __( 'New Status Name', 'five-hills-re' ),
        'add_new_item'               => __( 'Add New Status', 'five-hills-re' ),
        'edit_item'                  => __( 'Edit Status', 'five-hills-re' ),
        'update_item'                => __( 'Update Status', 'five-hills-re' ),
        'view_item'                  => __( 'View Status', 'five-hills-re' ),
        'separate_items_with_commas' => __( 'Separate statuses with commas', 'five-hills-re' ),
        'add_or_remove_items'        => __( 'Add or remove statuses', 'five-hills-re' ),
        'choose_from_most_used'      => __( 'Choose from the most used', 'five-hills-re' ),
        'popular_items'              => __( 'Popular Statuses', 'five-hills-re' ),
        'search_items'               => __( 'Search Statuses', 'five-hills-re' ),
        'not_found'                  => __( 'Not Found', 'five-hills-re' ),
        'no_terms'                   => __( 'No statuses', 'five-hills-re' ),
        'items_list'                 => __( 'Statuses list', 'five-hills-re' ),
        'items_list_navigation'      => __( 'Statuses list navigation', 'five-hills-re' ),
    );
    $args = array(
        'labels'                     => $labels,
        'hierarchical'               => true,
        'public'                     => true,
        'show_ui'                    => true,
        'show_admin_column'          => true,
        'show_in_nav_menus'          => true,
        'show_tagcloud'              => true,
        'show_in_rest'               => true, // Required for WP REST API
    );
    register_taxonomy( 'property_status', array( 'property' ), $args );
}
add_action( 'init', 'five_hills_register_status_taxonomy', 0 );

/**
 * Register Taxonomy: Property Location (e.g. Downtown Dubai, Dubai Marina)
 */
function five_hills_register_location_taxonomy() {
    $labels = array(
        'name'                       => _x( 'Locations', 'Taxonomy General Name', 'five-hills-re' ),
        'singular_name'              => _x( 'Location', 'Taxonomy Singular Name', 'five-hills-re' ),
        'menu_name'                  => __( 'Locations', 'five-hills-re' ),
        'all_items'                  => __( 'All Locations', 'five-hills-re' ),
        'new_item_name'              => __( 'New Location Name', 'five-hills-re' ),
        'add_new_item'               => __( 'Add New Location', 'five-hills-re' ),
        'edit_item'                  => __( 'Edit Location', 'five-hills-re' ),
        'update_item'                => __( 'Update Location', 'five-hills-re' ),
        'view_item'                  => __( 'View Location', 'five-hills-re' ),
        'separate_items_with_commas' => __( 'Separate locations with commas', 'five-hills-re' ),
        'add_or_remove_items'        => __( 'Add or remove locations', 'five-hills-re' ),
        'choose_from_most_used'      => __( 'Choose from the most used', 'five-hills-re' ),
        'popular_items'              => __( 'Popular Locations', 'five-hills-re' ),
        'search_items'               => __( 'Search Locations', 'five-hills-re' ),
        'not_found'                  => __( 'Not Found', 'five-hills-re' ),
        'no_terms'                   => __( 'No locations', 'five-hills-re' ),
        'items_list'                 => __( 'Locations list', 'five-hills-re' ),
        'items_list_navigation'      => __( 'Locations list navigation', 'five-hills-re' ),
    );
    $args = array(
        'labels'                     => $labels,
        'hierarchical'               => true,
        'public'                     => true,
        'show_ui'                    => true,
        'show_admin_column'          => true,
        'show_in_nav_menus'          => true,
        'show_tagcloud'              => true,
        'show_in_rest'               => true, // Required for WP REST API
    );
    register_taxonomy( 'property_location', array( 'property' ), $args );
}
add_action( 'init', 'five_hills_register_location_taxonomy', 0 );

/**
 * Register ACF Custom Fields Programmatically
 */
function five_hills_register_acf_fields() {
    if ( ! function_exists( 'acf_add_local_field_group' ) ) {
        return; // ACF is not active.
    }

    acf_add_local_field_group( array(
        'key' => 'group_five_hills_properties',
        'title' => 'Property Specifications',
        'fields' => array(
            array(
                'key' => 'field_property_price_starting',
                'label' => 'Starting Price (AED)',
                'name' => 'starting_price',
                'type' => 'number',
                'instructions' => 'Enter the starting price for this property project (e.g., 1500000).',
                'required' => 1,
                'placeholder' => '1500000',
            ),
            array(
                'key' => 'field_property_developer_name',
                'label' => 'Developer Name',
                'name' => 'developer_name',
                'type' => 'text',
                'instructions' => 'Name of the real estate developer (e.g., Emaar, Sobha, Leos, Wasl).',
                'required' => 1,
                'placeholder' => 'Emaar Properties',
            ),
            array(
                'key' => 'field_property_location_text',
                'label' => 'Display Location / Area',
                'name' => 'location_text',
                'type' => 'text',
                'instructions' => 'Readable area description (e.g., Wasl 1, Downtown Dubai).',
                'required' => 1,
                'placeholder' => 'Downtown Dubai',
            ),
            array(
                'key' => 'field_property_map_embed',
                'label' => 'Google Map Embed HTML or Coordinates',
                'name' => 'map_embed_code',
                'type' => 'textarea',
                'instructions' => 'Paste the Google Maps iframe share code or coordinates.',
                'required' => 0,
                'rows' => 3,
            ),
            array(
                'key' => 'field_property_type',
                'label' => 'Property Type',
                'name' => 'property_type',
                'type' => 'select',
                'choices' => array(
                    'apartment' => 'Apartment',
                    'villa'     => 'Villa',
                    'townhouse' => 'Townhouse',
                    'commercial'=> 'Commercial / Office',
                ),
                'default_value' => 'apartment',
                'required' => 1,
            ),
            array(
                'key' => 'field_property_payment_plan',
                'label' => 'Payment Plan Details',
                'name' => 'payment_plan',
                'type' => 'text',
                'instructions' => 'Summary of the payment plan (e.g., 60/40, 20/80 Post-Handover).',
                'required' => 0,
                'placeholder' => '60/40',
            ),
            array(
                'key' => 'field_property_handover_date',
                'label' => 'Handover Date / Status',
                'name' => 'handover_date',
                'type' => 'text',
                'instructions' => 'Estimated completion date (e.g., Q4 2028, Ready).',
                'required' => 0,
                'placeholder' => 'Q4 2028',
            ),
            array(
                'key' => 'field_property_amenities',
                'label' => 'Amenities',
                'name' => 'amenities',
                'type' => 'checkbox',
                'choices' => array(
                    'pool'        => 'Infinity Swimming Pool',
                    'gym'         => 'State-of-the-art Gym',
                    'smart_home'  => 'Smart Home System',
                    'security'    => '24/7 Security',
                    'parking'     => 'Covered Parking',
                    'kids_play'   => 'Kids Play Area',
                    'beach'       => 'Private Beach Access',
                    'spa'         => 'Spa & Wellness Center',
                    'concierge'   => '24/7 Concierge Service',
                ),
                'layout' => 'horizontal',
                'toggle' => 1,
            ),
            array(
                'key' => 'field_property_gallery_images',
                'label' => 'Image Gallery',
                'name' => 'gallery_images',
                'type' => 'gallery',
                'instructions' => 'Upload high-resolution images for the project gallery slider.',
                'return_format' => 'id',
            ),
            array(
                'key' => 'field_property_brochure',
                'label' => 'Brochure PDF',
                'name' => 'brochure_file',
                'type' => 'file',
                'instructions' => 'Upload the PDF brochure for this project.',
                'return_format' => 'id',
                'mime_types' => 'pdf',
            ),
            array(
                'key' => 'field_property_floor_plan',
                'label' => 'Floor Plan PDF/Image',
                'name' => 'floor_plan_file',
                'type' => 'file',
                'instructions' => 'Upload floor plans (PDF or Image).',
                'return_format' => 'id',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'property',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'active' => true,
    ) );
}
add_action( 'acf/init', 'five_hills_register_acf_fields' );

/**
 * Expose custom metadata fields to the WP REST API
 * This ensures the Python script can read/write custom fields easily,
 * even if standard ACF fields are not default REST-mapped.
 */
function five_hills_register_rest_fields() {
    $meta_fields = array(
        'starting_price',
        'developer_name',
        'location_text',
        'map_embed_code',
        'property_type',
        'payment_plan',
        'handover_date',
        'amenities',
        'gallery_images',
        'brochure_file',
        'floor_plan_file'
    );

    foreach ( $meta_fields as $field_name ) {
        // Register post meta so it is exposed and writable in REST API under "meta" field
        register_post_meta( 'property', $field_name, array(
            'show_in_rest' => true,
            'single'       => true,
            'type'         => in_array( $field_name, array( 'starting_price', 'gallery_images', 'brochure_file', 'floor_plan_file' ) ) ? 'integer' : ( $field_name === 'amenities' ? 'array' : 'string' ),
        ) );

        // Direct root-level REST field registration for read/write convenience in Python
        register_rest_field( 'property', $field_name, array(
            'get_callback' => function( $object ) use ( $field_name ) {
                // If ACF function exists, use it to get formatted field
                if ( function_exists( 'get_field' ) ) {
                    return get_field( $field_name, $object['id'] );
                }
                return get_post_meta( $object['id'], $field_name, true );
            },
            'update_callback' => function( $value, $object, $field_name ) {
                if ( function_exists( 'update_field' ) ) {
                    return update_field( $field_name, $value, $object->ID );
                }
                return update_post_meta( $object->ID, $field_name, $value );
            },
            'schema' => array(
                'description' => sprintf( 'Custom ACF property field: %s', $field_name ),
                'type'        => 'string',
                'context'     => array( 'view', 'edit' ),
            ),
        ) );
    }
}
add_action( 'rest_api_init', 'five_hills_register_rest_fields' );

/**
 * REST API Helper: Make query filters by taxonomy and custom meta possible
 * E.g., /wp-json/wp/v2/property?property_type=apartment&starting_price_max=3000000
 */
function five_hills_rest_query_filters( $args, $request ) {
    // Filter by property status taxonomy slug
    if ( $status = $request->get_param( 'property_status_slug' ) ) {
        $args['tax_query'][] = array(
            'taxonomy' => 'property_status',
            'field'    => 'slug',
            'terms'    => $status,
        );
    }

    // Filter by location taxonomy slug
    if ( $loc = $request->get_param( 'property_location_slug' ) ) {
        $args['tax_query'][] = array(
            'taxonomy' => 'property_location',
            'field'    => 'slug',
            'terms'    => $loc,
        );
    }

    // Filter by property type meta
    if ( $type = $request->get_param( 'property_type' ) ) {
        $args['meta_query'][] = array(
            'key'     => 'property_type',
            'value'   => $type,
            'compare' => '=',
        );
    }

    // Filter by price range
    $meta_query_price = array();
    if ( $price_min = $request->get_param( 'price_min' ) ) {
        $meta_query_price[] = array(
            'key'     => 'starting_price',
            'value'   => intval( $price_min ),
            'type'    => 'NUMERIC',
            'compare' => '>=',
        );
    }
    if ( $price_max = $request->get_param( 'price_max' ) ) {
        $meta_query_price[] = array(
            'key'     => 'starting_price',
            'value'   => intval( $price_max ),
            'type'    => 'NUMERIC',
            'compare' => '<=',
        );
    }
    if ( ! empty( $meta_query_price ) ) {
        if ( count( $meta_query_price ) > 1 ) {
            $meta_query_price['relation'] = 'AND';
        }
        $args['meta_query'][] = $meta_query_price;
    }

    return $args;
}
add_filter( 'rest_property_query', 'five_hills_rest_query_filters', 10, 2 );
