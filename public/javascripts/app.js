'use strict';
/**
* TodoApp Module
*
* Description
*/
var TodoApp = angular.module('TodoApp', ['ngMaterial', 'ui.router', 'ngAnimate']);

/**
 * Configuration
 */
TodoApp.config([
	'$mdThemingProvider', 
	'$stateProvider',
	'$urlRouterProvider',
	function( $mdThemingProvider, $stateProvider, $urlRouterProvider ) {
		$mdThemingProvider.theme( 'default' )
			.primaryPalette( 'teal' )
			.accentPalette( 'orange' );

	// default url
	$urlRouterProvider.otherwise('/todos');

	// routing
	$stateProvider
		.state( 'todos', {
			url: '/todos',
			templateUrl: './templates/todos.tpl.html',
			controller: 'MainCtrl'
		}).state( 'todos-local', {
			url: '/todos-local',
			templateUrl: './templates/todos-localstorage.tpl.html',
			controller: 'LocalTodo'
		}).state( 'about', {
			url: '/about',
			templateUrl: './templates/about.tpl.html',
			controller: 'AboutCtrl'
		});
}]);