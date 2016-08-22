'use strict';

var myapp = angular.module('myapp', ["highcharts-ng"]);

myapp.controller('myctrl', function ($scope) {

  $scope.chartTypes = [
    {"id": "spline", "title": "Smooth line"},
  ];

  $scope.bewertungStyles = [
    {id: [0], title: 0},
    {id: [1], title: 1},
    {id: [2], title: 2},
    {id: [3], title: 3},
    {id: [4], title: 4}
  ];

  $scope.chartSeries = [
    {name: 'konsum', data: [0, 1, 3, 4, 2]},
    {name: 'befinden', data: [2, 4, 3, 1, 0]},
    {name: 'wohnen', data: [4, 3, 2, 1, 0]},
  ];

  $scope.addNumber = function (id) {
    var seriesArray = $scope.chartConfig.series;
    seriesArray.push(id)
  }

  $scope.removeSeries = function (id) {
    var seriesArray = $scope.chartConfig.series;
    seriesArray.splice(id, 1)
  }

  $scope.chartConfig = {
    options: {
      chart: {
        type: 'spline'
      },
      plotOptions: {
        series: {
          stacking: ''
        }
      }
    },
    series: $scope.chartSeries,
    title: {
      text: 'KuK'
    },
    size: {}
  }
});
