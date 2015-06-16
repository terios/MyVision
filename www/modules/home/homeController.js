/**
 * Created by terios on 6/16/15.
 */



var homeModule = angular.module('homeModule',[
    'ngMaterial']);


homeModule.controller('homeController',['$scope','$rootScope',function($scope,$rootScope){


    console.log('loaded home controller')


    $scope.onSwipeLeft = function(ev) {
        alert('You swiped left!!');
    };
    $scope.onSwipeRight = function(ev) {
        alert('You swiped right!!');
    };


    //$scope.onSwipeRight = function(ev) {
    //    console.log('You swiped right!!');
    //
    //    $rootScope.$broadcast('toggleSideBar');
    //
    //};

}]);