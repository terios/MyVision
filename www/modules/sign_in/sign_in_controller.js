/**
 * Created by terios on 5/30/15.
 */



var signInModule = angular.module('signInModule',[
    'ngMaterial']);


signInModule.config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
});


signInModule.controller('signInController',['$scope',function($scope){

    //show social connexion bar
    $scope.showSocials = true;


    console.log('this is the login controller');


    $scope.user = {
    };


    $scope.hideElements = function(){
        $scope.showSocials = false;
    };

    $('.unfocusElements').focusout(function(){
        console.log('4kjkkj');
        $scope.showSocials = true;
        $scope.$apply();
    });
}]);