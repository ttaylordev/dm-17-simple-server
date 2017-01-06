(function() {
  'use strict';
  angular.module("app").service("customerSvc", ['$http', '$q', function($http, $q) {

    this.getCustomers = () => {
      console.log(' get called');
      return $http({
      method : 'GET',
      url : '/api/customers'
      })
    };
    
    this.addCustomer = (customer) => {
      console.log('add called');
      return $http({
      method : 'POST',
      url : '/api/customers',
      data : customer
      })
    };
    
    this.putCustomers = (updatedCustomer) => {
      console.log('put called');
      return $http({
      method : 'PUT',
      url : '/api/customers/' + updatedCustomer.id,
      data : updatedCustomer
      })
    };
    
    this.deleteCustomers = (customer) => {
      console.log('delete called');
      return $http({
      method : 'DELETE',
      url : '/api/customers/' + customer.id
      })
    };

  }]);
})();
