/**
 * Created by terios on 5/30/15.
 */

myApp.config(function($locationProvider, $httpProvider, $stateProvider, $urlRouterProvider) {
    console.log("init application states");
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    // $locationProvider.html5Mode(true);

    $stateProvider.state('login', {
        url: "/",
        views: {
            'bodyContentView': {
                templateUrl: 'modules/sign_in/sign_in.tpl.html',
                controller: 'signInController'
            }
        }
    }).state('register', {
        url: "/register",
        views: {
            'bodyContentView': {
                templateUrl: 'modules/sign_up/sign_up.tpl.html',
                controller: 'signUpController'
            }
        }
    }).state('home', {
        url: "/home",
        views: {
            'bodyContentView': {
                templateUrl: 'modules/home/home.tpl.html',
                controller: 'homeController'
            },
            'navbarContentView': {
                templateUrl: 'modules/navbar/navbar.tpl.html',
                controller: 'navBarController'
            }
        }
    });

    $urlRouterProvider.otherwise("/home");
});