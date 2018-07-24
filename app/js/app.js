var app = angular.module("app", []);


app.controller('HelloController', HelloController);


function HelloController() {
    this.exampleVariable = 'Przykladowy tekst gfdgfd';
    this.moja = 'trata tata';
    
}
app.controller('osoba', osoba);
   
   function osoba($scope) {
      $scope.osoba = {
         imie: "Ala",
         nazwisko: "Kot",
          wiek:20
      };
   }
