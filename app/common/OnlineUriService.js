(function(angular){
    'use strict';
    angular.registerModule('iss.pageurl.online', ['app']).
    service('OnlineUriService', function($http, $q,$window) {
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
        //命名空间
        this.namespace = "iss.pageurl.online";
       
    // ------------------------------------------------------------------------
    //                      ---| 下面是请求 |---
    // ------------------------------------------------------------------------
        /**
         *  登录请求地址  done
         */
        this.action_login = uri('/admin/login');
        /**
         *  退出登录
         */
        this.action_login_out = uri('/admin/logout');
        /**
         *  登录请求地址
         */
        this.action_compaign_typelist = uri('/mockdata/compaign.typelist.json');
       
       

    });
})(window.angular);