'use strict';
/*global angular*/
angular.module('friendsApp')
	.controller('ContactController', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {
		$scope.sending = false;
		$scope.sentSuccess = false;
		$scope.sentFailure = false;
		$scope.contactForm = {
			name: $stateParams.name,
			email: $stateParams.email,
			subject: $stateParams.subject,
			message: $stateParams.message
		};
		$scope.submit = function (contactForm) {
			//TODO: Clean parameters to prevent clipping due to quotes and stuff
			//TODO: Connect to actual email on back end
			$scope.sending = true;
			$scope.sentSuccess = false;
			$scope.sentFailure = false;
			var url =
				'/cgi-bin/contact2.py?name=' + contactForm.name +
				'&email=' + contactForm.email +
				'&subject=' + contactForm.subject +
				'&message=' + contactForm.message;
			$http.get(url).then(
				function(response){
					$scope.sending = false;
					$scope.sentSuccess = true;
					$scope.contactForm = {};
					console.log(response);
				},
				function(response){
					$scope.sending = false;
					$scope.sentFailure = true;
					console.log(response);
				}
			);
			console.log(contactForm);
		};
	}])

	.controller('HeaderController', ['$scope', '$state', function($scope, $state) {
		$scope.foo = 'foo';
		$scope.bar = $state.current.name;
		$scope.$state = $state;
	}])

	.controller('HomeController', [function() {
	}])

	.controller('JoinController', [function() {
	}])

	.controller('AboutController', ['$scope', function($scope) {
		$scope.leadership = {
			board: [
				{
					position: 'President',
					name: 'Dan Cusher'
				},
				{
					position: 'Vice President',
					name: 'Gail Wixon'
				},
				{
					position: 'Secretary',
					name: 'Elinor Tidman'
				},
				{
					position: 'Treasurer',
					name: 'Ellen Gougen'
				},
				{
					position: 'Director of Down Under',
					name: 'Mary Tulloch'
				},
				{
					position: 'Publicity Chair',
					name: 'Michelle Dalal'
				},
				{
					position: 'Membership Chair',
					name: 'Marie Berardi'
				},
				{
					position: 'At-Large (Co-Treasurer)',
					name: 'Karen Kara’a'
				},
				{
					position: 'At-Large',
					name: 'Alberta Dumfree'
				},
				{
					position: 'At-Large',
					name: 'Gail Poler'
				},
				{
					position: 'At-Large',
					name: 'Aaron Swartz'
				}
			],
			committees: [
				{
					name: 'Publicity Committee',
					description: 'The Publicity Committee\'s tasks include managing all communication with the public (advertisements, press releases, etc.), assisting the Membership Committee in communication with the membership, and discussing how the Friends can assist the library\'s publicity/marketing needs with the Library Director and/or staff liason. The committee is appointed by the President and consists of at least two members, including a Chair who serves on the Board of Directors.',
					members: [
						{
							position: 'Chair',
							name: 'Michelle Dalal'
						},
						{
							position: 'Member',
							name: 'Vacant'
						}
					]
				},
				{
					name: 'Membership Committee',
					description: 'The Membership Committee\'s tasks include maintaining the membership list, ensuring that renewal notices are mailed, communicating with the membership via Constant Contact and Facebook, and recording and acknowledging all membership dues received and ensuring that the Tresurer receives the money. The committee is appointed by the President and consists of at least two members, including a Chair who serves on the Board of Directors.',
					members: [
						{
							position: 'Chair',
							name: 'Vacant'
						},
						{
							position: 'Member',
							name: 'Vacant'
						}
					]
				},
				{
					name: 'Nominating Committee',
					description: 'The Nominating Committee\'s task is to present at least one nomination for each office to the general membership at the Annual Meeting. The committee is appointed by the Board of Directors and consists of at least two people.',
					members: [
						{
							position: 'Chair',
							name: 'Vacant'
						},
						{
							position: 'Member',
							name: 'Vacant'
						}
					]
				}
			]
		};
	}])

;
