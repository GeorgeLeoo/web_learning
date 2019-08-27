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
  if (container.vnode) {
    // 更新
    patch(container.vnode, vnode, container);
  } else {
    // 首次
    mount(vnode, container);
  }
}

function patch(prev, next, container) {
  let nextFlag = next.flag,
    preFlag = pre.flag;
  // pre是 text ，next 是p 直接替换
  if (nextFlag !== preFlag) {
    replaceVnode(prev, next, container);
  } else if (nextFlag === vnodeType.HTML) {
    patchElement(prev, next, container);
  } else if (nextFlag === vnodeType.TEXT) {
    patchText(prev, next);
  }
}

function patchElement(prev, next, container) {
  if (prev.tag !== next.tag) {
    replaceVnode(prev, next, container);
    return;
  }
  let el = (next.el = prev.el);
  let prevData = prev.data;
  let nextData = next.data;
  if (nextData) {
    for (const key in nextData) {
      const prevVal = nextData[key];
      const nextVal = nextData[key];
      patchData(el, key, prevVal, nextVal);
    }
  }
  if (prevData) {
    for (const key in prevData) {
      const prevVal = nextData[key];
      if (prevVal && !nextData.hasOwnProperty(key)) {
        patchData(el, key, prevVal, null);
      }
    }
  }
  // data 更新完毕，开始更新子元素
  patchChildren(
    prev.childrenFlag,
    next.childrenFlag,
    prev.children,
    next.children,
    el,
  );

}

function patchChildren(
  prevChildrenFlag,
  nextChildrenFlag,
  prevChildren,
  nextChildren,
  container,
) {
  // 1. 
  // 老的是单独的
  // 老的是空的
  // 老的是多个

  // 2. 
  // 新的是单独的
  // 新的是空的
  // 新的是多个
  switch (prevChildrenFlag) {
    case childTypes.SINGLE:
      switch (nextChildrenFlag) {
        case childTypes.SINGLE:
          patch(prevChildren, nextChildren, container);
          break;
        case childTypes.EMPTY:
          container.removeChild(prevChildren.el);
          break;
        case childTypes.MULTIPLE:
          container.removeChild(prevChildren.el);
          for (let i = 0; i < nextChildren.length; i++) {
            mount(nextChildren[i], container);
          }
          break;
      }
      break;
    case childTypes.EMPTY:
      switch (nextChildrenFlag) {
        case childTypes.SINGLE:
          mount(nextChildren, container);
          break;
        case childTypes.EMPTY:

          break;
        case childTypes.MULTIPLE:
          for (let i = 0; i < nextChildren.length; i++) {
            mount(nextChildren[i], container);
          }
          break;
      }
      break;
    case childTypes.MULTIPLE:
      switch (nextChildrenFlag) {
        case childTypes.SINGLE:
          for (let i = 0; i < prevChildren.length; i++) {
            container.removeChild(prevChildren[i].el);
          }
          mount(nextChildren, container);
          break;
        case childTypes.EMPTY:
          for (let i = 0; i < prevChildren.length; i++) {
            container.removeChild(prevChildren[i].el);
          }
          break;
        case childTypes.MULTIPLE:
          console.log('新老都是数组');

          // 众多虚拟 dom 在这个区分，算法不一样
          let lastIndex = 0;
          let find = false;
          for (let i = 0; i < nextChildren.length; i++) {
            let nextVnode = nextChildren[i];
            let j = 0;
            for (j; j < prevChildren.length; j++) {
              if (prevVnode.key === nextVnode) {
                find = true;
                // key 相等,认为是相同的元素
                let prevVnode = prevChildren[i];
                patch(prevVnode, nextVnode, container);
                if (j < lastIndex) {
                  //需要移动
                  // insertBefore移动元素
                  let flagNode = nextChildren[i - 1].el.nextSibling;
                  container.insertBefore(prevVnode.el, flagNode);
                  break;
                } else {
                  lastIndex = j;
                }
              }

            }
            if (!flag) {
              // 需要新增的
              let flagNode = i === 0 ? prevChildren[0].el : nextChildren[i - 1].el.nextSibling
              mount(nextVnode, container, flagNode)
            }
          }
          // 不需要移除
          for (let i = 0; i < prevChildren.length; i++) {
            const prevVnode = prevChildren[i];
            const has = nextChildren.find(next => next.key === prevChildren.key);
            if (!has) {
              container.removeChild(prevChildren.el);
            }
          }
          break;
      }
      break;
  }
}

function patchText(prev, next) {
  let el = (next.el = prev.el);
  if (next.children !== prev.children) {
    el.nodeValue = next.children;
  }
}

// 替换
function replaceVnode(prev, next, container) {
  container.removeChild(prev, el);
  mount(next, container);
}

// 首次挂载元素
function mount(vnode, container, flagNode) {
  let { flag } = vnode;
  if (flag === vnodeType.HTML) {
    mountElement(vnode, container, flagNode);
  } else if (flag === vnodeType.TEXT) {
    mountText(vnode, container, flagNode);
  }
}

function mountElement(vnode, container, flagNode) {
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

  flagNode ? container.insertBefore(dom, flagNode) : container.appendChild(dom);
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

function patchData(el, key, prev, next) {
  switch (key) {
    case 'style':
      for (const k in next) {
        el.style[k] = next[k];
      }
      for (const k in prev) {
        if (!next.hasOwnProperty(k)) {
          el.style[k] = '';
        }
      }
      break;
    case 'class':
      el.className = next
      break;
    default:
      if (key[0] === '@') {
        if (prev) {
          el.removeEventListener(key.slice(1), prev);
        }
        if (next) {
          el.addEventListener(key.slice(1), next);
        } else {
          el.setAttribute(key, next);
        }
      }
  }
}
