(function(angular) {
    'use strict';
    angular.iApp.value('birdMenuListData',[{
        name: "Dashboard",
        active: true,
        icon:"fa fa-dashboard",
        href: "/pages/index.html#/home/welcome",
        mark: {
            class:"label label-info label-circle pull-right",
            value: 26
        }
    },{
        name: "Compaign",
        icon:"fa fa-table",
        href: "#",
        submenus: [{
            name: "Create Type",
            href: "/pages/compaign.html#/compaign/typecreate"
        },{
            name: "Type List",
            href: "/pages/compaign.html#/compaign/typelist",
        }]
    },{
        name: "Report",
        icon:"fa fa-book",
        href: "#",
        submenus: [{
            "name": "KCI Current by Buyer",
            "href": "/pages/index.html#/home/demo",
        },{
            "name": "KCI Current by KIFA",
            "href": "http://www.163.com",
        },{
            "name": "KCI Trend",
            "href": "http://www.163.com",
        },{
            "name": "KCI Turnover",
            "href": "http://www.163.com",
        }]
    },{
        name: "Setting",
        icon:"fa fa-windows",
        href: "http://www.qq.com",
        submenus: [{
            "name": "FX Rate",
            "href": "/pages/index.html#/home/demo",
        },{
            "name": "Group Management",
            "href": "http://www.163.com",
        },{
            "name": "Hardcode Value",
            "href": "http://www.163.com",
        },{
            "name": "Preference",
            "href": "http://www.163.com",
        },{
            "name": "Project Mapping List",
            "href": "http://www.163.com",
        },{
            "name": "Strange Price Key Words Maintenance",
            "href": "http://www.163.com",
        },{
            "name": "Threshold",
            "href": "http://www.163.com",
        },{
            "name": "User Management",
            "href": "http://www.163.com",
        }]
    }]);
})(window.angular);
