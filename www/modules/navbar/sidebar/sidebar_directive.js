/**
 * Created by terios on 6/10/15.
 */


myApp.directive('sideBar',function($rootScope,$timeout, $mdSidenav, $log, $mdDialog){
    return{
        restrict:'E',
        templateUrl:'modules/navbar/sidebar/sidebar.tpl.html',
        link:function($scope){
            console.log('side bar directive waiting for orders');

            $scope.toogleSideBar=function(){

                console.log('toggling that side bar');
            };

            $scope.people = [
                { name: 'Janet Perkins', img: 'images/sideBar/home.png', newMessage: true },
                { name: 'Mary Johnson', img: 'images/sideBar/home.png', newMessage: false },
                { name: 'Peter Carlsson', img: 'images/sideBar/home.png', newMessage: false }
            ];

            $scope.goToPerson = function(person, event) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .title('Navigating')
                        .content('Inspect ' + person)
                        .ariaLabel('Person inspect demo')
                        .ok('Neat!')
                        .targetEvent(event)
                );
            };

            $scope.close = function () {
                $mdSidenav('right').close()
                    .then(function () {
                        $log.debug("close RIGHT is done");
                    });
            };

        }
    }
});