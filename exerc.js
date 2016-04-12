angular.module("jogo", []).controller("dados", function($scope, $interval, $timeout) {

$scope.numerosort = "";


$scope.jogar = function (){

$scope.numerosort = Math.floor((Math.random() * 6));

if ($scope.numerosort == 0){

$scope.numerosort = "img/um.png";

}

if ($scope.numerosort == 1){

$scope.numerosort = "img/dois.png";
}

if ($scope.numerosort == 2){

$scope.numerosort = "img/tres.png";
}

if ($scope.numerosort == 3){

$scope.numerosort = "img/quatro.png";
}

if ($scope.numerosort == 4){

$scope.numerosort = "img/cinco.png";
}

if ($scope.numerosort == 5){

$scope.numerosort = "img/seis.png";
}

}

$scope.conectar = function () {

 return "Conectado com o Java Script... OK....";
}
});
