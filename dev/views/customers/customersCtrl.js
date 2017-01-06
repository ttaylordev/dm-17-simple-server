(function(){
  'use strict';
  angular.module("app").controller("customersCtrl", ['$scope', 'customerSvc', function($scope, customerSvc) {
    
    $scope.getCustomers = () =>{
      customerSvc.getCustomers().then(function(response){
        console.log(response);
        $scope.customers = response.data;
        console.log($scope.customers);
      });
    };
    
    $scope.getCustomers();
    
    $scope.addCustomer = function(newCustomer){
      newCustomer.id = $scope.customers.length + 1
      console.log(newCustomer);
      customerSvc.addCustomer(newCustomer).then(function(res){
        if(res.status === 200) {
          $scope.getCustomers();
        }
      });
    };
    
    $scope.updateCustomer = (updatedCustomer) => {
      $scope.selected = -1;
      console.log(updatedCustomer);
      customerSvc.putCustomers(updatedCustomer).then(function(res){
        // if(res.data === 'updated') {
          $scope.getCustomers();
        // }
      })
    };
    
    $scope.deleteCustomer = (customer) => {
      $scope.selected = -1;
      console.log(customer);
      customerSvc.deleteCustomers(customer).then(function(res){
        if(res.data === 'deleted'){
          $scope.getCustomers();
        }
      })
    };
    
    $scope.selected = -1;
    
    $scope.toggleInputs = (index) => {
      if(index === $scope.selected){
        $scope.selected = -1
      } else {
        $scope.selected = index;
        $scope.first = $scope.customers[index].first;
        $scope.last = $scope.customers[index].last;
        
      }
    };
    

    
    }]);
})();