(function () {
var app= angular.module("module2App", []);
app.controller("Controller2", [$scope, $filter, Controller2]);
function Controller2($scope, $filter){
$scope.shoppingList=[];

};
})();