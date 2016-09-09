angular.module("routingApp")
.controller("productsCtrl", function($scope, $stateParams, productsService) {
  if ($stateParams.id === 'shoes') {
    $scope.productData = productsService.shoeData;
  } else {
    $scope.productData = productsService.sockData;
  }

})
