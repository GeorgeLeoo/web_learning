define(['dataService'], function(dataService) {
  const msg = 'alerter.js';
  // eslint-disable-next-line require-jsdoc
  function showMsg() {
    console.log(msg, dataService.getName());
  }
  return {showMsg};
});
