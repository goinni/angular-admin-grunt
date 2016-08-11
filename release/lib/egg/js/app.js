/**
 * 资源库生成器
 * 共用的资源在这里添加，非共用请写在各自的页面上
 * @Since 2016-07-03
 */
(function(){

	var jslib = [
		'/lib/egg/js/jquery.js',
		'/lib/egg/js/jquery-ui.custom.min.js',
		'/lib/egg/js/jquery.slimscroll.min.js',
		'/lib/jquery-countTo/jquery.countTo.js',
		'/lib/egg/js/pace.min.js',
		'/lib/egg/js/moment.min.js',
		'/lib/angular/angular.min.js',
		'/lib/angular-translate/angular-translate.min.js',
		'/lib/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
		'/lib/angular-route/angular-route.min.js',
		'/lib/angular-ui-router/release/angular-ui-router.min.js',
		'/lib/ui-bootstrap-tpls/ui-bootstrap-tpls.min.js',
		'/lib/angular-growl/angular-growl.min.js',
		'/lib/egg/js/bootstrap.js',
		'/lib/egg/js/jquery.nanoscroller.min.js'
	];
	var csslib = [
		'/lib/egg/css/bootstrap/bootstrap.min.css',
		'/lib/egg/css/libs/font-awesome.css',
		'/lib/egg/css/libs/nanoscroller.css',
		'/lib/egg/css/compiled/theme_styles.css',
		'/lib/angular-growl/angular-growl.min.css',
		'/lib/animate.css/animate.min.css',
		'/css/app.min.css'
	];
	
	//add css link.
	for(var i = 0; i<csslib.length; i++){
		document.write('<link rel="stylesheet" href="'+csslib[i]+'" />');
	}
	//add js link.
	for(var i = 0; i<jslib.length; i++){
		document.write('<script type="text/javascript" src="'+ jslib[i] +'"></script>');
	}
	
})();