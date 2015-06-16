/**
 * Created by terios on 5/31/15.
 */


var signUpModule = angular.module('signUpModule',[
    'ngMaterial']);


signUpModule.config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
});


signInModule.controller('signUpController',['$scope',function($scope){

    //show social connexion bar
    $scope.showSocials = true;


    console.log('this is the register controller');


    $scope.user = {
    };

}]);