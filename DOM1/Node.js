/* eslint-disable no-unused-vars */
/**
 * Html Node
 */
function Node() {
  // 节点名称
  this.nodeName = 0;
  // 节点类型，对应Node常量
  this.nodeType = 0;
  // 节点值，始终是null
  this.nodeVlaue = 0;

  // 子节点
  this.childNodes = [];
  // 第一个节点
  this.firstChild = [];
  // 最后一个节点
  this.lastChild = [];
  // 下一个节点
  this.nextSibling = [];
  // 前一个节点
  this.previousSibling = [];
  // 父节点
  this.parentNode = [];
  // 父元素
  this.parentElement = [];
  // 自己的document
  this.ownerDocument = [];
  // 文本
  this.text = '';
  // 文本内容
  this.textContent = '';

  // 追加节点
  this.appendChild = function() {};
  // 插入节点
  this.insertBefore = function() {};
  // 移除节点
  this.removeChild = function() {};
  // 替换节点
  this.replaceChild = function() {};
  // 克隆节点
  this.cloneNode = function() {};
  // 是否包含
  this.contians = function() {};
  // 获取跟节点
  this.getRootNode = function() {};
  // 获取根节点
  this.hasChildNodes = function() {};
  // 判断节点是否相等
  this.isEqualNode = function() {};
  // 是不是相同的节点
  this.isSameNode = function() {};
  this.lookupNamespaceURI = function() {};
  this.lookupPrefix = function() {};
  this.normalize = function() {};
  this.isConnected = function() {};
  this.isDefaultNamespace = function() {};
}
Node.prototype = {
  // 常量
  // 元素节点
  ELEMENT_NODE: 1,
  // 属性节点
  ATTRIBUTE_NODE: 2,
  // 文本节点
  TEXT_NODE: 3,
  // 注释节点
  COMMENT_NODE: 8,
  // 文档节点
  DOCUMENT_NODE: 9,
  // 文档类型节点
  DOCUMENT_TYPE_NODE: 10,
  // 文档碎片节点
  DOCUMENT_FRAGMENT_NODE: 11,
};

