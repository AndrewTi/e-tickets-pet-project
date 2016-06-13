var app = angular.module('ETicketsApp', ['ngMaterial']);

var ticketsData = [
  {
    title: 'first',
    image: 'http://placekitten.com/100/100'
  },
  {
    title: 'second',
    image: 'http://placekitten.com/100/101'
  },
  {
    title: 'third',
    image: 'http://placekitten.com/100/102'
  },
  {
    title: 'third',
    image: 'http://placekitten.com/100/102'
  },
  {
    title: 'third',
    image: 'http://placekitten.com/100/102'
  },
  {
    title: 'third',
    image: 'http://placekitten.com/100/102'
  },
  {
    title: 'third',
    image: 'http://placekitten.com/100/102'
  },
  {
    title: 'third',
    image: 'http://placekitten.com/100/102'
  },
  {
    title: 'last',
    image: 'http://placekitten.com/100/103'
  }
];

app.controller('listCtrl', function ($scope) {
  $scope.tickets = ticketsData;
});
