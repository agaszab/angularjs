angular.module('app',[])
.controller(AppCtrl),
function AppCtrl($scope){

    $scope.clickOkno = function(){
        window.alert('Kliknięty!');
        $scope.isHidden = !$scope.isHidden;
    };
    
    
   $scope.zespoly = [
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
 },
 {
   "lp": 6,
   "zawodnik": "Valtteri Bottas",
   "kraj": "Finlandia",
   "markasamochodu": "Mercedes",
   "punkty": 92
 },
 {
   "lp": 7,
   "zawodnik": "Kevin Magnussen",
   "kraj": "Dania",
   "markasamochodu": "Haas F1 Team",
   "punkty": 37
 },
 {
   "lp": 8,
   "zawodnik": "Nico Hulkenberg",
   "kraj": "Niemcy",
   "markasamochodu": "Renault",
   "punkty": 34
 },
 {
   "lp": 9,
   "zawodnik": "Fernando Alonso",
   "kraj": "Hiszpania",
   "markasamochodu": "McLaren",
   "punkty": 36
 },
 {
   "lp": 10,
   "zawodnik": "Carlos Sainz jr.",
   "kraj": "Hiszpania",
   "markasamochodu": "Renault",
   "punkty": 28
 },
 {
   "lp": 11,
   "zawodnik": "Sergio Perez",
   "kraj": "Meksyk",
   "markasamochodu": "Force India",
   "punkty": 23
 },
 {
   "lp": 12,
   "zawodnik": "Esteban Ocon",
   "kraj": "Francja",
   "markasamochodu": "Force India",
   "punkty": 19
 },
 {
   "lp": 13,
   "zawodnik": "Pierre Gasly",
   "kraj": "Francja",
   "markasamochodu": "Toro Rosso",
   "punkty": 18
 },
 {
   "lp": 14,
   "zawodnik": "Charles Leclerc",
   "kraj": "Monako",
   "markasamochodu": "Sauber F1 Team",
   "punkty": 13
 },
 {
   "lp": 15,
   "zawodnik": "Romain Grosjean",
   "kraj": "Francja",
   "markasamochodu": "Haas F1 Team",
   "punkty": 12
 },
 {
   "lp": 16,
   "zawodnik": "Stoffel Vandoorne",
   "kraj": "Belgia",
   "markasamochodu": "McLaren",
   "punkty": 8
 },
 {
   "lp": 17,
   "zawodnik": "Lance Stroll",
   "kraj": "Kanada",
   "markasamochodu": "Williams",
   "punkty": 4
 },
 {
   "lp": 18,
   "zawodnik": "Marcus Ericsson",
   "kraj": "Szwecja",
   "markasamochodu": "Sauber F1 Team",
   "punkty": 2
 },
 {
   "lp": 19,
   "zawodnik": "Brendon Hartley",
   "kraj": "Nowa Zelandia",
   "markasamochodu": "Toro Rosso",
   "punkty": 1
 },
 {
   "lp": 20,
   "zawodnik": "Siergiej Sirotkin",
   "kraj": "Rosja",
   "markasamochodu": "Williams",
   "punkty": 0
 }
];

    $scope.contacts = [
        {
            name: 'Janko Walski',
            phone: '01234567890',
            email: 'janko@walski.com',
            age: 23
        },
        {
            name: 'Karen Nerka',
            phone: '09876543210',
            email: 'karenne@email.com',
            age: 11
        } ,
        {
            name: 'Magda Wiewiórka',
            phone: '09876543210',
            email: 'karenne@email.com',
            age: 46
        }
    ];

    $scope.styleDemo = function(){
        if(!$scope.styler){
            return;
        }

        return {
            background: 'red',
            fontWeight: 'bold'
        };
    };

}
