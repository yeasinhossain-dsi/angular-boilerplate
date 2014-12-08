angular.module('templates-main', ['templates/404.html', 'templates/about.html', 'templates/contact.html', 'templates/directives/productList.html', 'templates/directives/sidebar.html', 'templates/directives/test-directive.html', 'templates/home.html', 'templates/layout/main.html', 'templates/login.html', 'templates/modals/login.html', 'templates/product.html', 'templates/products.html', 'templates/topbar.html']);

angular.module("templates/404.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/404.html",
    "<div class=\"col-md-12 col-lg-12 col-xs-12\">\n" +
    "    <div class=\"alert alert-info\">\n" +
    "        <p>Error-404</p>\n" +
    "        <p>Page Not Found</p>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("templates/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/about.html",
    "<div class=\"col-md-12\">\n" +
    "    \n" +
    "    <h3>About</h3><hr/>\n" +
    "    Fusce fermentum odio nec arcu. Donec posuere vulputate arcu. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Ut varius tincidunt libero. Phasellus nec sem in justo pellentesque facilisis.\n" +
    "\n" +
    "    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros.\n" +
    "\n" +
    "    Etiam ultricies nisi vel augue. In hac habitasse platea dictumst. Nunc sed turpis. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero.\n" +
    "\n" +
    "    Ut a nisl id ante tempus hendrerit. Sed lectus. Vestibulum dapibus nunc ac augue. Praesent egestas neque eu enim. Cras sagittis.\n" +
    "\n" +
    "    Praesent blandit laoreet nibh. Pellentesque auctor neque nec urna. Etiam ut purus mattis mauris sodales aliquam. Nam commodo suscipit quam. Nulla porta dolor.\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<add-more></add-more>");
}]);

angular.module("templates/contact.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/contact.html",
    "<div class=\"col-md-6 col-lg-6 col-xs-12 col-md-offset-3 col-lg-offset-3\" ng-controller=\"ContactUsCtrl\">\n" +
    "    \n" +
    "    <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "    \n" +
    "    <h3>Contact us</h3><hr/>\n" +
    "    <form name=\"cfrm\" class=\"contact-us-frm\" novalidate ng-submit=\"send(cfrm)\" role=\"form\">\n" +
    "        \n" +
    "        <div class=\"form-group\">            \n" +
    "            <input type=\"text\" name=\"name\" class=\"form-control\" ng-model=\"contact.name\" placeholder=\"Name\" required>\n" +
    "            <span ng-show=\"cfrm.name.$dirty && cfrm.name.$error.required\">This field is required</span>            \n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"form-group\">                        \n" +
    "            <input type=\"email\" name=\"email\" class=\"form-control\" ng-model=\"contact.email\" placeholder=\"Email...\" required>\n" +
    "            <span ng-show=\"cfrm.email.$dirty && cfrm.email.$error.required\">This field is required</span>\n" +
    "            <span ng-show=\"cfrm.email.$dirty && cfrm.email.$error.email\">Not a valid Email</span>            \n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"form-group\">            \n" +
    "            <textarea name=\"message\" ng-model=\"contact.message\" class=\"form-control\" placeholder=\"Message\" badword required ng-minlength=\"20\" rows=\"10\"></textarea>\n" +
    "            <span ng-show=\"cfrm.message.$dirty && cfrm.message.$error.badword\">don't use bad words</span>\n" +
    "            <span ng-show=\"cfrm.message.$dirty && cfrm.message.$error.required\">This field is required</span>\n" +
    "            <span ng-show=\"cfrm.message.$dirty && cfrm.message.$error.minlength\">Too short</span>            \n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"form-group\">\n" +
    "            <input type=\"submit\" value=\"Send\" class=\"btn btn-primary pull-right\" ng-disabled=\"cfrm.$invalid\">\n" +
    "        </div>\n" +
    "        \n" +
    "    </form>\n" +
    "    \n" +
    "</div>");
}]);

angular.module("templates/directives/productList.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/productList.html",
    "<h4>Products</h4><hr/>\n" +
    "<div class=\"row\">\n" +
    "    \n" +
    "    <div class=\"col-md-4 col-lg-4 col-xs-12 margin-bottom-10\" ng-repeat=\"d in data\">\n" +
    "        <div class=\"product-list-item\">\n" +
    "            <img src=\"{{d.product_image}}\" class=\"img-responsive\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                Product name: {{d.product_name}}\n" +
    "            </div>\n" +
    "            <div class=\"col-md-12\">\n" +
    "                Product Price: {{d.price|currencyFilter}}\n" +
    "            </div>\n" +
    "            <div class=\"col-md-12\">\n" +
    "                Product Info: {{d.product_description|descriptionTrimer}}\n" +
    "            </div>            \n" +
    "            <div class=\"col-md-12 margin-top-10\">\n" +
    "                <button class=\"btn btn-primary pull-right\" ng-click=\"addToCart(d)\">Add to cart</button>                \n" +
    "            </div>            \n" +
    "        </div>\n" +
    "    </div>    \n" +
    "    \n" +
    "</div>\n" +
    "\n" +
    "<p ng-if=\"!data.length\">No product found</p>");
}]);

angular.module("templates/directives/sidebar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/sidebar.html",
    "<ul class=\"nav nav-pills nav-stacked\" role=\"tablist\" ng-controller=\"sidebarCtrl\">\n" +
    "    <li ng-repeat=\"item in menuItems\">\n" +
    "        <a href=\"javascript:void(0)\" ng-click=\"msg(item)\">{{item.label}}</a>\n" +
    "    </li>\n" +
    "</ul>");
}]);

angular.module("templates/directives/test-directive.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/directives/test-directive.html",
    "");
}]);

angular.module("templates/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/home.html",
    "<div class=\"col-md-3 col-lg-3 col-xs-12\">\n" +
    "    <div side-bar></div>\n" +
    "</div>\n" +
    "<div class=\"col-md-9 col-lg-9 col-xs-12\">\n" +
    "    <h3> {{greeting}} </h3>\n" +
    "    <p> {{main}} </p>    \n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/layout/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/layout/main.html",
    "<div class=\"col-md-4 col-lg-4\">\n" +
    "	<div ui-view=\"sidebar\"></div>\n" +
    "</div>\n" +
    "<div class=\"col-md-8 col-lg-8\">\n" +
    "	<div ui-view=\"mainContent\"></div>\n" +
    "</div>");
}]);

angular.module("templates/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/login.html",
    "<div class=\"col-md-4 col-md-offset-4\" ng-controller=\"SigninCtrl\">\n" +
    "\n" +
    "    <h3>Sign in</h3><hr/>\n" +
    "    <form action=\"javascript:void(0)\" role=\"form\" novalidate>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"exampleInputEmail1\">Email address</label>\n" +
    "            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter email\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"exampleInputPassword1\">Password</label>\n" +
    "            <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n" +
    "        </div>        \n" +
    "        <div class=\"col-md-6 col-xs-12\">\n" +
    "            <label>\n" +
    "                <input type=\"checkbox\"> Remember me\n" +
    "            </label>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-6 col-xs-12\">\n" +
    "            <button type=\"submit\" class=\"btn btn-primary pull-right\" ng-click=\"signin()\">Sing in</button>\n" +
    "        </div>        \n" +
    "    </form>\n" +
    "\n" +
    "</div>");
}]);

angular.module("templates/modals/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/modals/login.html",
    "<div class=\"row\">\n" +
    "\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <div class=\"col-md-12 margin-bottom-10\" ng-controller=\"SigninCtrl\">\n" +
    "\n" +
    "            <h3>Sign in</h3><hr/>\n" +
    "            <form action=\"javascript:void(0)\" role=\"form\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"exampleInputEmail1\">Email address</label>\n" +
    "                    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter email\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"exampleInputPassword1\">Password</label>\n" +
    "                    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n" +
    "                </div>        \n" +
    "                <div class=\"col-md-6 col-xs-12\">\n" +
    "                    <label>\n" +
    "                        <input type=\"checkbox\"> Remember me\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6 col-xs-12\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-primary pull-right\" ng-click=\"signin()\">Sing in</button>\n" +
    "                </div>        \n" +
    "            </form>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("templates/product.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/product.html",
    "<div class=\"col-md-12\">\n" +
    "    Product id: {{id}}<br/>\n" +
    "    --{{product}}--\n" +
    "</div>");
}]);

angular.module("templates/products.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/products.html",
    "<h3> {{greeting}} </h3>\n" +
    "\n" +
    "\n" +
    "<div class=\"col-md-3 col-lg-3 col-xs-12\">\n" +
    "    <select ng-model=\"category\" ng-options=\"item.id as item.name for item in category\">\n" +
    "        <option value=\"\">Select Category</option>\n" +
    "    </select>\n" +
    "</div>\n" +
    "<div class=\"col-md-9 col-lg-9 col-xs-12\">\n" +
    "    <product-list data-model=\"data\"></product-list>\n" +
    "</div>");
}]);

angular.module("templates/topbar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/topbar.html",
    "<!-- Navigation -->\n" +
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"topbarCtrl\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"container-fluid\">                    \n" +
    "            <div class=\"navbar-header\">\n" +
    "                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"javascript:void(0)bs-example-navbar-collapse-1\">\n" +
    "                    <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                </button>\n" +
    "                <a class=\"navbar-brand\" href=\"/\">Brand</a>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "                <ul class=\"nav navbar-nav\">\n" +
    "                    <li class=\"active\"><a href=\"#/\">Home</a></li>\n" +
    "                    <li><a href=\"#products\">Products</a></li>                            \n" +
    "                    <li><a href=\"#about\">About</a></li>                                                \n" +
    "                    <li><a href=\"#contact\">Contact Us</a></li>                                                \n" +
    "                    <li><a href=\"#multiple\">Multiple</a></li>                                                \n" +
    "                </ul>                 \n" +
    "                \n" +
    "                <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                    <li class=\"dropdown\" ng-if=\"isLoggedIn\">\n" +
    "                        <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{userName}} <span class=\"caret\"></span></a>\n" +
    "                        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "                            <li><a href=\"javascript:void(0)\">Privacy Settings</a></li>\n" +
    "                            <li><a href=\"javascript:void(0)\">Account Settings</a></li>                        \n" +
    "                            <li class=\"divider\"></li>\n" +
    "                            <li><a href=\"javascript:void(0)\" ng-click=\"logout()\">Logout</a></li>\n" +
    "                        </ul>\n" +
    "                    </li>\n" +
    "                    <li ng-if=\"isLoggedIn != 1\"><a href=\"#/login\">Login</a></li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>");
}]);
