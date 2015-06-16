/**
 * Created by terios on 6/10/15.
 */


var navBarModule = angular.module('navBarModule',[
    'ngMaterial']);


navBarModule.controller('navBarController',['$scope','$rootScope','$timeout', '$mdSidenav', '$mdUtil', '$log',function($scope,$rootScope,$timeout, $mdSidenav, $mdUtil, $log){


    $scope.toggleSideMenu = buildToggler('left');

    $rootScope.$on('toggleSideBar',function(){
        $scope.toggleSideMenu();
    });

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildToggler(navID) {
        var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        },300);
        return debounceFn;
    }

}]);