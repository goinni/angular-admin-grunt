(function(angular) {
    'use strict';
    //Module 仓库
    angular.moduleStroe = [];
    /**
     * 注册Module，待页面加载完成后统一处理
     * @param name  模块名
     * @param requires  引用的模块
     * @param configFn
     */
    angular.registerModule = function (name, requires, configFn) {
        angular.moduleStroe.push(name);
        return angular.module(name, requires, configFn);
    }
    //创建基础 Module
    angular.iApp = angular.module('app', ['pascalprecht.translate', 'ui.router', 'ui.bootstrap', 'angular-growl', 'templates']);
    /**
     * 国际化处理
     */
    angular.iApp.config(['$translateProvider',function($translateProvider){
        var lang = window.localStorage.lang||'cn';
        $translateProvider.useStaticFilesLoader({
          prefix: '/i18n/',
          suffix: '.json'
        });
        $translateProvider.useSanitizeValueStrategy(null);
        $translateProvider.preferredLanguage(lang);
    }]);
    /**
     * 模块的手动加载
     */
    angular.element(document).ready(function () {
      angular.bootstrap(document, angular.moduleStroe);
      BirdApp.init();
    });
    /**
     * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
     * 这里的run方法只会在angular启动的时候运行一次。
     * @param  {[type]} $rootScope
     * @param  {[type]} $state
     * @param  {[type]} $stateParams
     * @return {[type]}
     */
    angular.iApp.run(function($rootScope, $state, $stateParams, $window) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        /**
         * 页面跳转
         * @param url 地址
         */
        $rootScope.open = function(url){
          $window.location.href = url;
        }
    });
    /**
     * 开发环境与线上环境开关
     * [ 注 ] 上线 或 与后台联调时一定要把 isDevelop 设置为 false !
     */
    angular.iApp.constant('isDevelop', true);
    
})(window.angular);
