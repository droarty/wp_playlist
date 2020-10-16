<?php
/**
 * Plugin Name:     Playlist
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     playlist
 *
 * @package         create-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_block_playlist_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/playlist" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'create-block-playlist-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	wp_set_script_translations( 'create-block-playlist-block-editor', 'playlist' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'create-block-playlist-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	// To generate this second index file for the frontend javascript, we needed to modify how webpack works...
	// see the package commands for start and build per this doc https://www.npmjs.com/package/@wordpress/scripts#using-css
	$frontend_asset_path = "$dir/build/index.asset.php";
	$frontend_asset = require( $frontend_asset_path );
	$frontend_index_js = 'build/index.frontend.js';
	wp_register_script(
		'create-block-playlist-block',
		plugins_url( $frontend_index_js, __FILE__ ),
		$frontend_asset['dependencies'],
		$frontend_asset['version']
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-playlist-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'create-block/playlist', array(
		'editor_script' => 'create-block-playlist-block-editor',
		'editor_style'  => 'create-block-playlist-block-editor',
		'style'         => 'create-block-playlist-block',
	) );
}
add_action( 'init', 'create_block_playlist_block_init' );

// Thanks to https://richtabor.com/has-blocks-gutenberg-scripts/
// and https://www.npmjs.com/package/@wordpress/scripts#using-css
function create_block_playlist_block_frontend_script() {
	if ( has_block( 'create-block/playlist' ) ) {
		// already registered above, we need to enqueue it on the wp_enqueue_scripts event
		wp_enqueue_script(
			'create-block-playlist-block'
		);
	}
}
// wp_enqueue_scripts is used to enqueue scripts and css on the front end of posts and pages
add_action( 'wp_enqueue_scripts', 'create_block_playlist_block_frontend_script' );

