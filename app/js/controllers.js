'use strict';
angular.module('myApp',[])
    .controller('kontrolerTabeli', ['$scope', '$filter', function($scope, $filter){
        $scope.edycja=false;

        $scope.dodajZawodnika =function(){
            $scope.samochody.splice(0, 0, {zawodnik:$scope.zawodnik, kraj:$scope.kraj, markasamochodu:$scope.zespol, punkty:$scope.punkty});
        };

        $scope.usunZawodnika =function($index){
            $scope.samochody.splice($index, 1);
        };

        $scope.samochody=[
            {
                "lp": 1,
                "zawodnik": "Sebastian Vettel",
                "kraj": "Niemcy",
                "markasamochodu": "Ferrari",
                "punkty": 146
            },
            {
                "lp": 2,
                "zawodnik": "Lewis Hamilton",
                "kraj": "Wlk. Brytania",
                "markasamochodu": "Mercedes",
                "punkty": 145
            },
            {
                "lp": 3,
                "zawodnik": "Kimi Raikkonen",
                "kraj": "Finlandia",
                "markasamochodu": "Ferrari",
                "punkty": 101
            },
            {
                "lp": 4,
                "zawodnik": "Daniel Ricciardo",
                "kraj": "Australia",
                "markasamochodu": "Red Bull",
                "punkty": 96
            },
            {
                "lp": 5,
                "zawodnik": "Max Verstappen",
                "kraj": "Holandia",
                "markasamochodu": "Red Bull",
                "punkty": 93
            }
        ];
    }]);
