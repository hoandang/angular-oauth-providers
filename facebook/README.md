angular.oauth.facebook
=======================

Facebook oauth directive

Usage
-------------------------------

```html
<facebook-login app-id="YOUR_APP_ID"></facebook-login>
```

```javascript

var app = angular.module( ['angular.oauth.facebook']);

app.controller('AuthCtrl', function($scope) {
  $scope.$on('facebookAuthenticated', function(e, userInfo) {
    console.log(userInfo);
  });
});

```

Setting
-------------------------------

![alt tag](https://raw.githubusercontent.com/hoandang/angular-oauth-providers/master/facebook/setting.png)
![alt tag](https://raw.githubusercontent.com/hoandang/angular-oauth-providers/master/facebook/status.png)
