(function (angular) {
	'use strict';
	/**
	 * 国际化切换
	 *	<select class="language-switching" ng-controller="LanguageSwitchingCtrl" ng-model="cur_lang" ng-change="switching(cur_lang)">
	 *		<option value="en">English</option>
	 *		<option value="cn">简体中文</option>
	 *  </select>
	 */
	angular.iApp.controller('LanguageSwitchingCtrl', ['$scope', '$translate', function (scope, $translate) {
	    scope.switching = function(lang){
	        $translate.use(lang);
	        window.localStorage.lang = lang;
	        window.location.reload();
	    };
	    scope.cur_lang = $translate.use();
	}]);
	
})(window.angular);