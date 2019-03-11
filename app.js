(function () {
    var app=angular.module("module2App", []);
    app.controller("Controller2", ['$scope', '$filter',Controller]);
    function Controller($scope, $filter){
$scope.shoppingList=[
    {Name:"Chocolates", Number:"10"},
    {Name:"Cereal", Number:"2"},
    {Name:"Tuna", Number:"5"},
    {Name:"Bread", Number:"1"},
    {Name:"Apples", Number:"5"},
    {Name:"Chicken", Number:"1"}];
$scope.shoppingList2=["chocolate","flour", "pizza"];
$scope.something="its working";


};
})();