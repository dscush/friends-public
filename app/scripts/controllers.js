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

	.controller('AboutController', ['$scope', function($scope) {
		$scope.leadership = {
			board: [
				{
					position: "President",
					name: "Dan Cusher"
				},
				{
					position: "Vice President",
					name: "Gail Wixon"
				},
				{
					position: "Secretary",
					name: "Elinor Tidman"
				},
				{
					position: "Treasurer",
					name: "Ellen Gougen"
				},
				{
					position: "Director of Down Under",
					name: "Mary Tulloch"
				},
				{
					position: "Publicity Chair",
					name: "Michelle Dalal"
				},
				{
					position: "Membership Chair",
					name: "Vacant"
				},
				{
					position: "At-Large (Co-Treasurer)",
					name: "Karen Kara’a"
				},
				{
					position: "At-Large",
					name: "Alberta Dumfree"
				},
				{
					position: "At-Large",
					name: "Gail Poler"
				},
				{
					position: "At-Large",
					name: "Aaron Swartz"
				}
			],
			committees: [
				{
					name: "Publicity Committee",
					members: [
						{
							position: "Chair",
							name: "Michelle Dalal"
						},
						{
							position: "Member",
							name: "Vacant"
						},
						{
							position: "Member",
							name: "Vacant"
						}
					]
				},
				{
					name: "Membership Committee",
					members : [
						{
							position: "Chair",
							name: "Vacant"
						},
						{
							position: "Member",
							name: "Vacant"
						},
						{
							position: "Member",
							name: "Vacant"
						}
					]
				},
				{
					name: "Nominating Committee",
					members: [
						{
							position: "Chair",
							name: "Vacant"
						},
						{
							position: "Member",
							name: "Vacant"
						}
					],
				},
			]
		}
	}])

;
