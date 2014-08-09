'use strict';

angular.module('angular.oauth.google', [])

.directive('googleLogin', function() {
  var 
    template = [
      '<div class="pure-button button-error">',
        '<i class="fa fa-google-plus"></i>',
        '<span> Login with Google+</span>',
      '</div>'
    ].join('');

  function asyncLoad() {
    var po   = document.createElement('script'); 
    po.type  = 'text/javascript'; 
    po.async = true;
    po.src   = 'https://apis.google.com/js/client:plusone.js?onload=onLoadCallback';
    var s    = document.getElementsByTagName('script')[0]; 
    s.parentNode.insertBefore(po, s);
  }

  function handleAuthResult(authResult, scope) {
    if (authResult && !authResult.error) {
      scope.$emit('authenticating');
      makeApiCall(scope);
    }
  }

  function makeApiCall(scope) {
    gapi.client.load('plus', 'v1', function() {
      var request = gapi.client.plus.people.get({ 'userId': 'me' });
      request.execute(function(response) {
        scope.$emit('googleAuthenticated', response);
      });
    });
  }

  return {
    restrict: 'E',
    replace: true,
    template: template,
    scope: { clientId: '=' },
    link: function(scope, element) {
      asyncLoad();
      // login
      element.on('click', function() { 
        gapi.auth.authorize({ client_id: scope.clientId.key, scope: 'https://www.googleapis.com/auth/plus.me', immediate: false }, function(authResult) {
          handleAuthResult(authResult, scope);
        }); 
      });
    }
  };
});

