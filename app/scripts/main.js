'use strict';
var app = angular.module('friendsApp',['ui.router', 'ui.router.title'])
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
                    },
                },
                resolve: {
                    $title: function() { return 'Home';}
                },
            })
                    // route for the about page
            .state('app.about', {
                url:'about',
                views: {
                    'content@': {
                        templateUrl : 'views/about.html',
                        controller  : 'AboutController'
                   }
                },
                resolve: {
                    $title: function() { return 'About Us';}
                },
            })
                    // route for the contact page
            .state('app.contact', {
                url:'contact',
                params: {
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                },
                views: {
                    'content@': {
                        templateUrl : 'views/contact.html',
                        controller  : 'ContactController'
                     }
                },
                resolve: {
                    $title: function() { return 'Contact Us';}
                },
            })
                    // route for the join page
            .state('app.join', {
                url:'join',
                views: {
                    'content@': {
                        templateUrl : 'views/join.html',
                        controller  : 'JoinController'
                     }
                },
                resolve: {
                    $title: function() { return 'Join The Friends';}
                },
            });
            
            $urlRouterProvider.otherwise('/');
    })

;
