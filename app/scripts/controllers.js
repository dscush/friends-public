'use strict';
var app = angular.module('friendsApp')

	.controller('ContactController', ['$scope', function($scope) {
		
	}])
	
	.controller('HeaderController', ['$scope', '$state', function($scope, $state) {
		$scope.foo = 'foo';
		$scope.bar = $state.current.name;
		$scope.$state = $state;
	}])
	
	.controller('JoinController', ['$scope', function($scope) {
		
	}])

;