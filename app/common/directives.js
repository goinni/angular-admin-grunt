(function(angular) {
    'use strict';
    /* 页面模板 */
    angular.iApp.directive('csLayout', function ($rootScope, birdMenuListData) {
      return {
        restrict: 'A',
        replace: false,
        transclude: true,
        templateUrl: 'common/tpl/layout.part.html',
        link: function (scope, element, attrs) {
          // 例外名单：不需要登陆 不适用默认布局
          var excludes = ['account.login', 'account.logout'];

          //监听路由变化
          $rootScope.$on('$stateChangeStart', function (e, state, params, source, srouceParams) {
            // 模板选择开关
            $rootScope.$layout = excludes.indexOf(state.name) === -1;

            //根据路由地址控制菜单激活状态
            // angular.forEach(birdMenuListData, function (item) {
            //       var sname = '#/'+state.name.replace(/[.]/g,'/');
            //       if(item.href && item.href.match(sname) 
            //         || item.submenus && item.submenus.href && item.submenus.href.match(sname)
            //         || item.submenus && item.submenus.submenus && item.submenus.submenus.href && item.submenus.submenus.href.match(sname)){
            //         item.active = true;
            //       }
            // });

          });
        }
      };
    });
    /* 配制面板 */
    angular.iApp.directive('csConfig', function ($rootScope) {
      return {
        restrict: 'A',
        replace: true,
        transclude: true,
        templateUrl: 'common/tpl/config.part.html',
        link: function (scope, element, attrs) {
        }
      };
    });
    /* 页面公共头 */
    angular.iApp.directive('csHeader', function ($rootScope) {
      return {
        restrict: 'A',
        replace: true,
        transclude: true,
        templateUrl: 'common/tpl/header.part.html',
        link: function (scope, element, attrs) {
            var msearch = element.find('.mobile-search');
            msearch.click(function(e) {
                e.preventDefault();
                msearch.addClass('active');
                msearch.find('form input.form-control').focus();
            });
            //单击页面隐藏搜索框
            $(document).mouseup(function(e) {
                var container = msearch;
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    container.removeClass('active');
                }
            });
            //左侧菜单切换
            element.find('#make-small-nav').click(function(e) {
                $('#page-wrapper').toggleClass('nav-small');
            });
        }
      };
    });
    /* 左侧菜单 */
    angular.iApp.directive('csMenu', function ($rootScope, birdMenuListData) {
      return {
        restrict: 'A',
        replace: false,
        templateUrl: 'common/tpl/menubar.part.html',
        link: function (scope, element, attrs) {
            scope.menus = birdMenuListData;
            scope.toggleMenu = function (e) {
                   e.preventDefault();
                  var item = $(e.target).parent();
                  if (!item.hasClass('open')) {
                      item.parent().find('.open .submenu').slideUp('fast');
                      item.parent().find('.open').toggleClass('open');
                  }
                  item.toggleClass('open');
                  if (item.hasClass('open')) {
                      item.parent().find('li.active').removeClass('active');//删除上一个选中样式
                      item.toggleClass('active');//添加当前项为选择样式
                      item.children('.submenu').slideDown('fast');
                  } else {
                      item.children('.submenu').slideUp('fast');
                  }
            }
            //初始化menu鼠标移入移出事件
            BirdApp.initAppEvent(element);
        }
      };
    });
    /**
     * 随机动画
     */
    angular.iApp.directive('csAnimate', function () {
      return {
        restrict: 'A',
        replace: false,
        link: function (scope, element, attrs) {
          var actions = ['swing', 'pulse', 'flip', 'tada', 'bounce', 'bounceIn'];
          var animate = actions[Math.floor(actions.length * Math.random(0, 1))];
          $(element).addClass('animated').addClass(animate);
        }
      };
    });
    /**
     * 自动聚焦...
     */
    angular.iApp.directive('csFocus', function ($timeout) {
      return {
        restrict: 'A',
        replace: false,
        link: function (scope, element) {
          var times = 0;
          (function focus() {
            if (element.is(':visible')) {
              element.focus();
            }
            else if (times++ < 1) {
              $timeout(focus, 200);
            }
          }());
        }
      };
    });

    /**
     * 防止自动完成不触发form验证
     */
    angular.iApp.directive("csAutofill", function ($timeout) {
      return {
        require: '^ngModel',
        link: function (scope, element, attrs, ngModel) {
          var times = 0;
          var timer = null;
          var origin = element.val();

          (function fill() {
            if (element.val() !== origin) {
              ngModel.$setViewValue(element.val());
              element.focus();
            }
            else if (times++ < 3) {
              $timeout.cancel(timer);
              timer = $timeout(fill, 200);
            }
          }());

          scope.$on('$destroy', function () {
            $timeout.cancel(timer);
          });
        }
      };
    });

    // 多选checkbox 填值进入Array
    angular.iApp.directive('csCheckbox', function () {
      return {
        restrict: 'A',
        replace: false,
        scope: {
          list: '=',
          fill: '=',
          label: '@',
          value: '@'
        },
        templateUrl: 'config/templates/checkbox.partial.html',
        link: function (scope, element, attrs) {
          scope.fill = scope.fill || [];
          scope.toggleValue = function (value) {
            var index = scope.fill.indexOf(value);
            if (index > -1) {
              scope.fill.splice(index, 1);
            }
            else {
              scope.fill.push(value);
            }
          };
        }
      };
    });

    // 通用选择
    angular.iApp.directive('csSelect', function ($timeout, $http) {
      return {
        restrict: 'A',
        replace: true,
        scope: {
          associate: '=', // 关联到scope的哪个属性上
          url: '@', // 查询地址
          key: '@', // option的value 默认是id
          label: '@', // option中显示的文案 默认是name
          blank: '@', // 空白情况下显示的文案 默认是请选择
          type: '@', // 这个值和url互斥 既如果定义常量的话 不会发起ajax请求 可以问我
          params: '=', // 查询url额外的参数
          sname: '@', // select的name属性值
          required: '@', // 是否必选
          change: '&' // onchange
        },
        templateUrl: function (element, attrs) {
          return 'config/templates/select.partial.html';
        },
        link: function (scope, element, attrs) {
          scope.$key = scope.key || 'id';
          scope.$label = scope.label || 'name';
          scope.$blank = angular.isUndefined(scope.blank) ? '请选择' : scope.blank;

          if (scope.url) {
            $http({
              url: scope.url,
              params: scope.params
            }).then(function (res) {
              scope.list = res.list;

              // 如果默认没有提示 自动选择第一个
              if (scope.$blank === 'false' && res.list.length > 0) {
                if (scope.associate !== res.list[0][scope.key]) {
                  // 触发change事件
                  scope.associate = res.list[0][scope.key];
                  $timeout(function () {
                    scope.change();
                  }, 50);
                }
              }
            });
          }
        }
      };
    });
})(window.angular);
