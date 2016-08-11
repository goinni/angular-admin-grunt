(function(angular) {
    'use strict';
    angular.registerModule('iapp.home', ['app'])
      .config(function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/home/welcome");

      $stateProvider
        .state('home', {
          url: '/home',
          "abstract": true,
          template: "<div ui-view></div>"
        })
        .state('home.welcome', {
          url: '/welcome',
          templateUrl: "modules/home/tpl/welcome.html"
        })
        .state('home.demo', {
          url: '/demo',
          templateUrl: "modules/home/tpl/demo.html"
        })
        .state('account.logout', {
          url: '/logout',
          template: '<div class="jumbotron center-block" style="width:300px;"><div class="alert alert-info text-center">正在登出...</div></div>',
          controller: 'logoutController'
        })
        .state('account.settings', {
          url: '/settings',
          templateUrl: "modules/account/tpl/settings.html",
          controller: 'settingsController'
        })
        .state('account.member', {
          url: '/member',
          templateUrl: "modules/account/tpl/member.html",
          controller: 'memberController'
        })
        .state('account.role', {
          url: '/role',
          templateUrl: "modules/account/tpl/role.html",
          controller: 'roleController'
        });
    });
})(window.angular);

