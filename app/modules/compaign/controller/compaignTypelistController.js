(function(angular) {
    'use strict';
	angular.module('iapp.compaign.type')
	.controller('CompaignTypelistController', function ($scope, $rootScope, $window, UriService) {

	  // 初始化数据
	  (function(){
	  		UriService.send({
				url: UriService.action_compaign_typelist,
				data: {}
			}).then(function(res){
			    if(res.code == 200){
			    	$scope.datalist = res.data;
			    }else{
			    	alert(res.msg);
			    }
			});
	  })();

	});
})(window.angular);
