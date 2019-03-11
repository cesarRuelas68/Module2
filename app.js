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
$scope.empty = false;
$scope.empty2=true;
$scope.message=false;
$scope.alreadybought=[];
$scope.validate= function(){
    if($scope.shoppingList.length>0)
    {
        $scope.empty=false;
    }
    else
    {
        $scope.empty=true;
    }
    if($scope.alreadybought.length>0)
    {
        $scope.empty2=false;
    }
    else
    {
        $scope.empty2=true;
    }
};
$scope.moveItem= function(index){
    var number=$scope.alreadybought.length;
    $scope.alreadybought[number]=$scope.shoppingList[index];
    $scope.shoppingList.splice(index, 1);
    $scope.validate();
};


};
})();