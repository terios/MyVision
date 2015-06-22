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
                { name: 'Accueil', img: 'images/sideBar/home.png', newMessage: true },
                { name: 'Profile', img: 'images/icons/1435031704_profle.png', newMessage: false },
                { name: 'Près de moi', img: 'images/icons/map.png', newMessage: true },
                { name: 'Moment', img: 'images/icons/1435032921_lens.png', newMessage: true },
                { name: 'Messages', img: 'images/icons/bubbles.png', newMessage: true },
                { name: 'Accomplissement', img: 'images/icons/1435031736_trophy.png', newMessage: false },
                { name: 'Paramètres', img: 'images/icons/settings.png', newMessage: false }
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