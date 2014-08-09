angular.oauth.google
=======================

Goole oauth directive

Usage
-------------------------------

***Because angular doesn't like dash variable so we have to serialise clientId***

[Create a project in google console](https://developers.google.com/+/web/signin/add-button)

```html
<google-login client-id="{key: 'CLIENT_ID}'"></google-login>
```

```javascript

var app = angular.module( ['angular.oauth.google']);

app.controller('AuthCtrl', function($scope) {
  $scope.$on('googleAuthenticated', function(e, userInfo) {
    console.log(userInfo);
  });
});

```
