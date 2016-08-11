(function(angular) {
    'use strict';
    angular.registerModule('iapp.login', ['app'])
      .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/account/login");
      $stateProvider
        .state('account', {
          url: '/account',
          "abstract": true,
          template: "<div ui-view></div>"
        })
        .state('account.login', {
          url: '/login',
          templateUrl: "modules/account/tpl/login.html",
          controller: "loginController"
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
