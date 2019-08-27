const vnodeType = {
  HTML: 'HTML',
  TEXT: 'TEXT',
  CONPONENT: 'CONPONENT'
}

const childTypes = {
  EMPTY: 'EMPTY',
  SINGLE: 'SINGLE',
  MULTIPLE: 'MULTIPLE'
}
/**
 * 新建 vdom
 * @param {*} tag 元素
 * @param {*} data 属性
 * @param {*} children 子元素
 */
function createElement(tag, data, children = null) {
  let flag,
    childrenFlag;

  if (typeof tag === 'string') {
    flag = vnodeType.HTML;
  } else if (typeof tag === 'function') {
    flag = vnodeType.CONPONENT;
  } else {
    flag = vnodeType.TEXT;
  }

  if (children === null) {
    childrenFlag = childTypes.EMPTY;
  } else if (Array.isArray(children)) {
    let len = children.length;
    if (len === 0) {
      childrenFlag = childTypes.EMPTY;
    } else {
      childrenFlag = childTypes.MULTIPLE;
    }
  } else {
    // 其他情况是文本
    childrenFlag = childTypes.SINGLE;
    children = createTextVnode(children + '');
  }

  // 返回 vnode
  return {
    el: null,
    flag, // vnode 类型
    tag,  // 标签，div 文本没有 tag，组件就是函数
    data,
    children,
    childrenFlag
  }
}

/**
 * 渲染 vdom
 * @param {*} vnode  虚拟 dom
 * @param {*} container  容器
 */
function render(vnode, container) {
  // 区分首次渲染和再次渲染
  mount(vnode, container);
}

// 首次挂载元素
function mount(vnode, container) {
  let { flag } = vnode;
  if (flag === vnodeType.HTML) {
    mountElement(vnode, container);
  } else if (flag === vnodeType.TEXT) {
    mountText(vnode, container);
  }
}

function mountElement(vnode, container) {
  let dom = document.createElement(vnode.tag);
  vnode.el = dom;
  let { data, children, childrenFlag } = vnode;
  // 挂载 data
  if (data) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        patchData(dom, key, null, data[key]);
      }
    }
  }
  if (childrenFlag !== childTypes.EMPTY) {
    if (childrenFlag === childTypes.SINGLE) {
      mount(children, dom);
    } else if (childrenFlag === childTypes.MULTIPLE) {
      for (let i = 0; i < children.length; i++) {
        mount(children[i], dom);
      }
    }
  }
  console.log(dom);

  container.appendChild(dom);
}

function mountText(vnode, container) {
  let dom = document.createTextNode(vnode.children);
  vnode.el = dom;
  container.appendChild(dom);
}

// 新建文本类型的 vnode
function createTextVnode(text) {
  return {
    flag: vnodeType.TEXT,
    tag: null,
    data: null,
    children: text,
    childrenFlag: childTypes.EMPTY,
    el: null
  }
}

function patchData(el, key, pre, next) {
  switch (key) {
    case 'style':
      for (const k in next) {
        if (next.hasOwnProperty(k)) {
          el.style[k] = next[k];
        }
      }
      break;
    case 'class':
      el.className = next
      break;
    default:
      if (key[0] === '@') {
        if (next) {
          el.addEventListener(key.slice(1), next);
        } else {
          el.setAttribute(key, next);
        }
      }
  }
}
