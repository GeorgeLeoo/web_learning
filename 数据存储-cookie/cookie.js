// eslint-disable-next-line no-unused-vars
const cookie = {
  get: function() {
    const name = encodeURIComponent(name) + '=';
    let start = document.cookie.indexOf(name);
    let value = null;
    if (start > -1) {
      const end = document.cookie.indexOf(';', start);
      if (parseInt(end) === -1) {
        end = document.cookie.length;
      }
      value = decodeURIComponent(
          document.cookie.substring(start + name.length, end)
      );
    }
    return value;
  },
  set: function(options) {
    const {name, value, expirse, path, domain, secure} = options;
    const text = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if (expirse instanceof Date) {
      text += '; expires=' + expirse.toGMTString();
    }
    if (path) {
      text += ';path=' + path;
    }
    if (domain) {
      text += '; domain=' + domain;
    }
    if (secure) {
      text += ';secure';
    }
    document.cookie = text;
  },
  unset: function() {
    this.set(name, '', new Date(0), path, domain, secure);
  },
};
