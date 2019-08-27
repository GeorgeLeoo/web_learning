/* eslint-disable no-unused-vars */
/**
 * 与url有关的类
 * @param {url} url
 * @return {Object} object
 */
function Url(url) {
  url = decodeURIComponent(url);
  let urlArray=[];
  urlArray = url.split('?');
  let hostString = urlArray[0].split('://');
  let hostArray = hostString[1].split(':');
  return {
    getQuerys: function() {
      if (urlArray.length === 1) {
        return null;
      }
      const queryString = urlArray[1].split('&');
      const querys = {};
      for (let i=0; i<queryString.length; i++) {
        const item = queryString[i].split('=');
        querys[item[0]] = item[1];
      }
      return querys;
    },
    getHost: function() {
      return hostArray[0].split('/')[0];
    },
    getProtocol: function() {
      return hostString[0];
    },
    getUrl: function() {
      return url;
    },
    getPort: function() {
      if (hostString[1].indexOf(':') === -1) {
        return null;
      }
      if (hostArray.length > 1) {
        return hostArray[1].split('/')[0];
      }
      return null;
    },
    getOrigin: function() {
      const originArray = urlArray[0].split('/');
      return originArray[0] + '//' + originArray[2];
    },
    getPath: function() {
      let pathArray;
      if (hostString[1].indexOf(':') > -1) {
        if (hostArray.length ===1) {
          return null;
        }
        pathArray = hostArray[1].split('/');
      } else {
        pathArray = hostString[1].split('/');
      }
      return '/' + pathArray.slice(1).join('/').split('/#')[0];
    },
    getSearch: function() {
      if (urlArray.length === 1) {
        return null;
      }
      return '?' + urlArray[1];
    },
    getHash: function() {
      if (urlArray[0].indexOf('#') === -1) {
        return null;
      }
      return '#' + urlArray[0].split('#')[1];
    },
    setParams: function(args) {
      let queryString = '';
      for (const key in args) {
        if (key) {
          queryString += key + '=' +args[key] + '&';
        }
      }
      url = url + '?' + queryString.substr(0, queryString.length-1);
      urlArray = url.split('?');
      hostString = urlArray[0].split('://');
      hostArray = hostString[1].split(':');
    },
    getAll: function() {
      const context = this;
      return {
        hash: context.getHash(),
        search: context.getSearch(),
        path: context.getPath(),
        origin: context.getOrigin(),
        port: context.getPort(),
        protocol: context.getProtocol(),
        host: context.getHost(),
        querys: context.getQuerys(),
        url: context.getUrl(),
      };
    },
  };
}

// const url = new Url(encodeURIComponent(window.location.href));
// const url = new Url('http://www.baidu.com');

const url = new Url(encodeURIComponent('https://developer.mozilla.org:90/zh-CN/docs/Web/API/Document/#compatMode'));

url.setParams({a: 2, d: 3});

console.log('Host: ', url.getHost());
console.log('Protocol: ', url.getProtocol());
console.log('Port: ', url.getPort());
console.log('Origin: ', url.getOrigin());
console.log('Path: ', url.getPath());
console.log('Search: ', url.getSearch());
console.log('Hash: ', url.getHash());
console.log('query: ', url.getQuerys());
console.log('url: ', url.getUrl());
console.log('host: ', url.getAll());

