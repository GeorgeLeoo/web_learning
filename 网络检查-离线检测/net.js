// eslint-disable-next-line no-unused-vars
const net = (function net(options) {
  if (net.isOnLine()) {
    options.online();
  } else {
    options.offline();
  }
  EventUtils.addHandler(this, 'online', () => {
    options.online();
  });
  EventUtils.addHandler(this, 'offline', () => {
    options.offline();
  });
});
/**
 * 判断是否有网络
 * @return {Boolean} 返回是否在线，true：在线；false：离线
 */
net.isOnLine = function() {
  return navigator.onLine;
};


