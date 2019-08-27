// eslint-disable-next-line no-unused-vars
const jsonp = function(options) {
  const {url, cbName='cb', cb} = options;
  const script = document.createElement('script');
  script.src = url + '?' + cbName + '=' + cb;
  document.body.insertBefore(script, document.body.firstChild);
};
