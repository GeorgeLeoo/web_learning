// import { Attribute } from './Attribute';
interface Attribute {
  [index: string]: string;
}
interface Css {
  [index: string]: string;
}

const AttributeTypes = {
  CLASSNAME: 'className',
  CSS: 'css',
  DATASET: 'dataset'
}

class Utils {

  private el: any;

  constructor(el: any) {
    this.el = el;
  }

  /**
   * 获取innerHTML
   * @param el 选择器 或 元素
   * @returns {string} innerHTML的内容
   */
  static getHtml(el: any): string {
    if (typeof el === 'string' || el === null) {
      return document.querySelector(el).innerHTML;
    }
    return el.innerHTML;
  }

  /**
   * 设置innerHTML
   * @param el 选择器 或 元素
   * @param content 要设置的内容
   */
  static setHtml(el: any, content: any): void {
    if (typeof el === 'string' || el === null) {
      document.querySelector(el).innerHTML = content;
    } else {
      el.innerHTML = content;
    }
  }

  /**
   * 获取innerText
   * @param el 选择器 或 元素
   * @returns {string} innerText
   */
  static getText(el: any): string {
    if (typeof el === 'string' || el === null) {
      return document.querySelector(el).innerText;
    }
    return el.innerText;
  }

  /**
   * 设置innerText
   * @param el 选择器 或 元素
   * @param content 要设置的内容
   */
  static setText(el: any, content: string): void {
    if (typeof el === 'string' || el === null) {
      document.querySelector(el).innerText = content;
    } else {
      el.innerHTML = content;
    }
  }

  /**
   * 获取类名
   * @param el 选择器 或 元素
   * @returns {DOMTokenList} DOMTokenList
   */
  static getClassName(el: any): DOMTokenList {
    if (typeof el === 'string' || el === null) {
      return document.querySelector(el).classList;
    }
    return el.classList;
  }

  /**
   * 
   * @param classNames 类名数组 或 类名字符串
   * @param el 元素
   */
  static _addClassName(classNames: string[] | string, el: any): void {
    if (typeof classNames === 'string') {
      // 如果是字符串就直接添加
      el.classList.add(classNames)
    } else {
      // 如果是数组就用三点运算符
      el.classList.add(...classNames)
    }
  }

  static _removeClassName(classNames: string[] | string, el: any): void {
    if (typeof classNames === 'string') {
      el.classList.remove(classNames)
    } else {
      el.classList.remove(...classNames)
    }
  }

  static _toggleClassName(className: string, el: any, isAdd?: boolean): void {
    if (isAdd !== undefined) {
      document.querySelector(el).classList.toggle(className, isAdd);
    } else {
      document.querySelector(el).classList.toggle(className);
    }
  }

  static addClassName(el: any, classNames: string[] | string): void {
    if (typeof el === 'string' || el === null) {
      Utils._addClassName(classNames, document.querySelector(el));
    } else if (Array.isArray(el)) {
      for (let val of el) {
        Utils._addClassName(classNames, val);
      }
    } else {
      Utils._addClassName(classNames, el);
    }
  }

  static removeClassName(el: any, classNames: string[] | string): void {
    if (typeof el === 'string' || el === null) {
      Utils._removeClassName(classNames, document.querySelector(el));
    } else if (Array.isArray(el)) {
      for (let val of el) {
        Utils._removeClassName(classNames, val);
      }
    } else {
      Utils._removeClassName(classNames, el);
    }
  }

  static toggleClassName(el: any, className: string, isAdd?: boolean): void {
    if (typeof el === 'string' || el === null) {
      Utils._toggleClassName(className, document.querySelector(el), isAdd);
    } else if (Array.isArray(el)) {
      for (let val of el) {
        Utils._toggleClassName(className, val);
      }
    } else {
      Utils._toggleClassName(className, el, isAdd);
    }
  }

  /**
   * 创建元素
   * @param tag 标签名
   * @param data  属性对象
   * @param children  子元素
   * @returns {Element} 返回创建的元素 
   */
  static createElement(tag: string, data: Attribute | null, children: Element | null): Element {
    let el = document.createElement(tag);
    // 如果有 data 就添加 data 中的属性
    if (data !== null) {
      Utils.setAttribute(el, data);
    }
    if (children && children !== null) {
      if (typeof children === 'string') {
        // children 是字符串就创建文本节点,并添加到 el 的最后
        Utils.addLast(el, Utils.createTextNode(children));
      } else {
        Utils.addLast(el, children);
      }
    }
    return el;
  }
  static setDataSet(el: HTMLElement, dataSet: any): void {
    let keys = Object.keys(dataSet);
    for (let key of keys) {
      el.dataset[key] = dataSet[key];
    }
  }

  static addCss(el: HTMLElement, css: any): void {

    let keys = Object.keys(css);
    if (Array.isArray(el)) {
      for (let val of el) {
        for (let key of keys) {
          val.style[key] = css[key]
        }
      }
    } else {
      for (let key of keys) {
        el.style[key] = css[key]
      }
    }
  }

  static getCss(el: HTMLElement, key: string) {
    return el.style[key];
  }

  static createTextNode(children: string): Text {
    return document.createTextNode(children);
  }

  static addLast(el: Element, addNode: Element | Text) {
    el.appendChild(addNode);
  }

  static addBefore(el: Element, addNode: Element, originNode: Element) {
    el.insertBefore(addNode, originNode);
  }

  static addElement() { }

  static setAttribute(el: any, data: Attribute) {
    if (typeof el === 'string') {
      el = document.querySelector(el);
    }
    const keys = Object.keys(data);
    for (let key of keys) {
      let value = data[key];

      switch (key) {
        case AttributeTypes.CLASSNAME:
          // 如果是 className 属性，就调用 addClassName 方法添加 class
          Utils.addClassName(el, value);
          break;
        case AttributeTypes.CSS:
          // 如果是 css 属性，就调用 addCss 方法添加 css
          Utils.addCss(el, value);
          break;
        case AttributeTypes.DATASET:
          Utils.setDataSet(el, value);
          break;
        default:
          el.setAttribute(key, value);
          break;
      }
    }
  }

  static _formateCss(css) {
    let res = {};
    let cssArr = css.split(';');
    for (const val of cssArr) {
      if (val) {
        let vals = val.split(':');
        res[vals[0].trim()] = vals[1].trim();
      }
    }
    return res;
  }

  static getAttribute(el: any, key: string): any {
    switch (key) {
      case AttributeTypes.CLASSNAME:
        key = 'class';
        break;
      case AttributeTypes.CSS:
        key = 'style';
        let css = el.getAttribute(key);
        return Utils._formateCss(css);
      case AttributeTypes.DATASET:
        key = AttributeTypes.DATASET;
        return el.dataset;
    }

    return el.getAttribute(key);
  }

  static getParent(el: any) {
    if (typeof el === 'string' || el === null) {
      return document.querySelector(el).parentNode;
    } else {
      return el.parentNode;
    }
  }

  static getSiblings(el: any) {
    let res: any = [];
    if (typeof el === 'string' || el === null) {
      el = document.querySelector(el);
    }
    let parent = Utils.getParent(el);
    let children = parent.children;

    for (let val of children) {
      if (val !== el) {
        res.push(val);
      }
    }
    return res;
  }
}