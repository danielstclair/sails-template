this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>home</h1>\n<a ui-sref="login">login</a>\n<a ui-sref="register">register</a>';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller="loginCTRL" class="login-view">\n\t\t<h1>login</h1>\n\n\t\t<a ui-sref="home">home</a>\n\t\t<a ui-sref="register">register</a>\n\t\t<form class="form" ng-submit="login(htmlCredentials)" novalidate>\n\t\t\t<p class="error" ng-repeat="errorMessage in error.generic" ng-bind="errorMessage">\n\t\t\t</p>\n            <!-- ng-model refers to credentials object(empty) in controller -->\n\t\t\t<input class="identifier" type="text" ng-model="htmlCredentials.identifier" placeholder="Email">\n\t\t\t\n\n\t\t\t<!-- ng-model refers to credentials object(empty) in controller -->\n\t\t\t<input class="password" type="password" ng-model="htmlCredentials.password" placeholder="Password">\n\n\t\t\t<button type="submit">Submit</button>\n\t\t\t<p class="errors" ng-bind="error.identifier"></p>\n\t\t\t<p class="errors" ng-bind="error.password"></p>\n\t\t</form>  \n</div>';

}
return __p
};

this["JST"]["assets/templates/register.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller="registerCTRL" class="login-view">\n\t<h1>Register</h1>\n\n    <form class="form" ng-submit="register(htmlCredentials)" novalidate>\n        <p class="error" ng-repeat="errorMessage in error.generic" ng-bind="errorMessage">\n        </p>\n            <!-- ng-model refers to credentials object(empty) in controller -->\n            <input type="text" ng-model="htmlCredentials.identifier" placeholder="Email">\n\n            <!-- ng-model refers to credentials object(empty) in controller -->\n            <input type="password" ng-model="htmlCredentials.password" placeholder="Password">\n\n            <button type="submit">Submit</button>\n            <p class="errors" ng-bind="error.identifier"></p>\n            <p class="errors" ng-bind="error.password"></p>\n    </form>  \n</div>';

}
return __p
};