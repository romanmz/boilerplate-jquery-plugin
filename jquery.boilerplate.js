/*
 * jQuery Boilerplate 1.0.0
 * https://github.com/romanmz/boilerplate-jquery-plugin
 * By Roman Martinez - https://romanmartinez.me
 */

;(function($){
	'use strict';
	
	
	// Static private data
	// ------------------------------
	var pluginName = 'boilerplate';
	var dataAttribute = 'boilerplate';
	var defaultSettings = {
		foo: 1,
		bar: 2,
	};
	var customSettings = {};
	
	// Get settings defined as html data attributes
	function getElementSettings( element ) {
		var settings = {};
		$.each( defaultSettings, function(key){
			var elementAttribute = $(element).data( dataAttribute+'-'+key );
			if( elementAttribute !== undefined ) {
				settings[ key ] = elementAttribute;
			}
		});
		return settings;
	}
	
	
	// Plugin constructor
	// ------------------------------
	var Plugin = function Boilerplate( element, settings, buildOnly ) {
		if( typeof this != 'object' ) {
			return new Plugin( element, settings, buildOnly );
		}
		this.element = $(element);
		this.settings = $.extend( {}, defaultSettings, customSettings, settings, getElementSettings( this.element ) );
		this.element.data( dataAttribute, this );
		if( !buildOnly ) {
			this.init();
		}
		return this;
	}
	
	// Expose as jQuery plugin
	$[pluginName] = Plugin;
	$.fn[pluginName] = function( settings, buildOnly ) {
		new Plugin( this, settings, buildOnly );
		return this;
	};
	
	
	// Static public data
	// ------------------------------
	Plugin.updateDefaults = function( newSettings ) {
		$.extend( customSettings, newSettings );
	};
	
	
	// Public instance methods
	// ------------------------------
	Plugin.prototype.init = function() {
		// …custom initializer code…
		// …
		this.element.data( dataAttribute, this );
		return this;
	};
	Plugin.prototype.destroy = function() {
		// …revert everything except element and settings…
		// …
		this.element.removeData( dataAttribute );
		return this;
	};
	
	
})( jQuery );
