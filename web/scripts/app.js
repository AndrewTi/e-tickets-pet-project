var app = angular.module('ETicketsApp', ['ngMaterial']);

app.service('tickets', function ($http) {
  this.getAll = function () {
    return $http.get('/mocks/tickets.json');
  };
});

app.controller('listCtrl', function ($scope, tickets) {
  $scope.tickets = [];

  tickets.getAll().then(function (response) {
    $scope.tickets = response.data;
  });
});
