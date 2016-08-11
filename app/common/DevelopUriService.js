(function(angular){
    'use strict';
    angular.registerModule('iss.pageurl.develop', ['app']).
    service('DevelopUriService', function($http, $q, $window) {
        

        this.namespace = "iss.pageurl.develop";
       
    // ------------------------------------------------------------------------
    //                      ---| 下面是请求 |---
    // ------------------------------------------------------------------------
        /**
         *  登录请求地址
         */
        this.action_login = uri('/mockdata/account.login.json');
        /**
         *  登录请求地址
         */
        this.action_compaign_typelist = uri('/mockdata/compaign.typelist.json');

        //构造url
        //@param n true 不加host
        function uri(url, n){
            var loc = $window.document.location,
                curl = loc.href,
                path = loc.pathname,
                pos = curl.indexOf(path),
                localhost = curl.substring(0, pos),
                time = new Date().getTime();
                //构造完整URI
                localhost = (!n ? localhost : '') + url;

            return (localhost + '?v=' + time);
        }
    });
})(window.angular);
