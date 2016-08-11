(function(angular) {
    'use strict';
	angular.module('iapp.login')
	.controller('loginController', function ($scope, $rootScope, $window, UriService) {

	  $scope.login = function () {
	  		//登录请求
			UriService.send({
				url: UriService.action_login,
				data: {}
			}).then(function(res){
			    if(res.code == 200){
			        //登录成功后跳转到首页
	      			$rootScope.open('/pages/index.html#/home/welcome');
			    }else{

			    }
			});
	  };

	});
})(window.angular);
