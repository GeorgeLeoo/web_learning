/* eslint-disable no-unused-vars */
const ajax = (function() {
  const window = this;
  /**
   * 这个一个XHR类，用来请求数据
   * @param {*} options 配置项
   * @param {*} cb 回调函数
   * @return {Object} 返回xhr对象
   */
  function XHR(options) {
    const {
      method='get',
      url,
      isAsync='false',
      data=null,
      headers=null,
      timeout=10000,
    } = options;
    const createXHR = function() {
      if (typeof XMLHttpRequest === undefined) {
        return new ActiveXObject('Microsoft.XMLHTTP');
      } else {
        return new XMLHttpRequest();
      }
    };
    const xhr = createXHR();
    // 打开xhr
    xhr.open(method, url, isAsync);
    // 超时
    xhr.timeout = timeout;
    // 自定义请求头部信息
    if (headers) {
      const _headers = Object.entries(headers);
      for (let i = 0; i< _headers.length; i++) {
        xhr.setRequestHeader(_headers[i][0], _headers[i][1]);
      }
    }
    // 发送数据
    xhr.send(data);
    return xhr;
  }

  const getHeaders = function(xhr) {
    // Get the raw header string
    const headers = xhr.getAllResponseHeaders();
    // Convert the header string into an array
    // of individual headers
    const arr = headers.trim().split(/[\r\n]+/);
    // Create a map of header names to values
    const headerMap = {};
    arr.forEach(function(line) {
      const parts = line.split(': ');
      const header = parts.shift();
      const value = parts.join(': ');
      headerMap[header] = value;
    });
    return headerMap;
  };

  /**
   * __ajax是ajax的主要函数部分
   * @param {*} options 配置项
   * @return {Object} 返回promise对象
   */
  const __ajax = function(options) {
    if (options.type === 'jsonp') {
      __jsonp(options);
    } else {
      return new Promise((resolve, reject) => {
        const xhr = new XHR(options);
        xhr.ontimeout = function() {
          reject(new Error('timeout: '+xhr.timeout));
        };
        xhr.onreadystatechange = () => {
          const {readyState, status, statusText, response, responseURL} = xhr;
          const res = {
            headers: getHeaders(xhr),
            url: responseURL,
            status,
            statusText,
            data: response ? JSON.parse(response) : null,
          };
          if (readyState === 4 && status === 200) {
            resolve(res);
          }
        };
      });
    }
  };

  /**
   *  生成随机字符串
   * @param {*} len 字符串长度
   * @return {String} 返回新字符串
   */
  function randomString(len) {
    len = len || 32;
    const chars
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhijklmnoprstuvwxyz1234567890';
    const maxPos = chars.length;
    let pwd = '';
    for ( i = 0; i < len; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
  }

  const __jsonp = function(data) {
    // 生成随机函数名并指向传入的回调函数
    const callbackfun = 'jquery_' + randomString(32);
    eval( callbackfun+ ' = data.success; ');
    // 提供jsonp服务的url地址（不管是什么类型的地址，最终生成的返回值都是一段javascript代码）
    const url = data.url + '&callback='+callbackfun;
    // 创建script标签，设置其属性
    const script = document.createElement('script');
    script.setAttribute('src', url);
    // 把script标签加入head，此时调用开始
    document.getElementsByTagName('head')[0].appendChild(script); 
  };

  /**
   * _jsonp
   * @param {*} options 配置项
   */
  function _jsonp(options) {
    __jsonp(options);
  }

  /**
   * Ajax对象
   * @param {*} options 配置项
   * @return {Object} 返回Ajax对象
   */
  function _ajax(options) {
    const _options = options ? Object.entries(options) : [];
    if (_options.length>0) {
      return __ajax(options);
    }
  }

  _ajax.get = function(url) {
    const options = {url};
    Object.assign(options, {method: 'get'});
    return __ajax(options);
  };

  _ajax.post = function(url) {
    const options = {url};
    Object.assign(options, {method: 'post'});
    return __ajax(options);
  };

  _ajax.jsonp = function(options) {
    return _jsonp(options);
  };
  return _ajax;
})();
