(function(angular) {
    'use strict';
    angular.registerModule('iapp.compaign.type', ['app'])
      .config(function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/compaign/typelist");

      $stateProvider
        .state('compaign', {
          url: '/compaign',
          "abstract": true,
          template: "<div ui-view></div>"
        })
        .state('compaign.typelist', {
          url: '/typelist',
          templateUrl: "modules/compaign/tpl/typelist.html",
          controller: "CompaignTypelistController"
        })
        .state('compaign.typecreate', {
          url: '/typecreate',
          templateUrl: "modules/compaign/tpl/typecreate.html"
        });
    });
})(window.angular);

