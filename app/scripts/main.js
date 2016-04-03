'use strict';
var app = angular.module('friendsApp',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
                    // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                        controller : 'HeaderController',
                    },
                    'content': {
                        template : '<h1>Index - To be Completed</h1>',
                        controller  : 'IndexController',
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
            })
                    // route for the about page
            .state('app.about', {
                url:'about',
                views: {
                    'content@': {
                        template: '<h1>About Us - To be Completed</h1>'
                   }
                }
            })
                    // route for the contact page
            .state('app.contact', {
                url:'contact',
                views: {
                    'content@': {
                        templateUrl : 'views/contact.html',
                        controller  : 'ContactController'
                     }
                }
            })
                    // route for the join page
            .state('app.join', {
                url:'join',
                views: {
                    'content@': {
                        templateUrl : 'views/join.html',
                        controller  : 'JoinController'
                     }
                }
            });
            
            $urlRouterProvider.otherwise('/');
    })

;