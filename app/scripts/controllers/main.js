'use strict';

/**
 * @ngdoc function
 * @name prototipo2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototipo2App
 */
angular.module('prototipo2App')
  .controller('MainCtrl', function ($scope, $mdSidenav) {
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

 });

  
