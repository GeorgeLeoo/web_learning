(function() {
  requirejs.config({
    baseUrl: 'js/modules',
    paths: {
      dataService: './dataService',
      alerter: './alerter',
    },
  });
  requirejs(['alerter'], function(alerter) {
    alerter.showMsg();
  });
})();
