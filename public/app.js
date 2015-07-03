/**
 * Created by lnolazco on 03/07/15.
 */
var appTest = angular.module('appTest', []);

function mainController($scope, $http, $timeout) {
    $scope.period = 5000;


    //get random value
    var getRandomValue = function(){
        $http.get('/api/random')
            .success(function(data) {
                $scope.messageRandom = data.random;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // funcion que se invoca al hacer timeout.
    $scope.intervalFunction = function(){
        $timeout(function() {
            getRandomValue();
            $scope.intervalFunction();
        }, $scope.period)
    };

    //valor inicial
    getRandomValue();

    // inicia intervalo
    $scope.intervalFunction();
}
