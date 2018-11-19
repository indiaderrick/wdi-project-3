import angular from 'angular';
import '@uirouter/angularjs';
import 'bulma';
import Router from './config/router';

// function Router($stateProvider, $urlRouterProvider) {
//   $stateProvider
//     .state('home', {
//       url: '/'
//     });
//   $urlRouterProvider.otherwise('/');
// }

angular.module('exhibition', ['ui.router'])
  .config(Router);
