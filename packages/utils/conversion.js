/**
 *
 * @param {需要转换到值} param
 * @param {父节点} node
 * @param {key} direction
 * @param {不能小于的值} ask
 * @returns
 */
export const converse = function (param, node, direction, ask) {
  const unit = param.replace(/\d/g, '');
  const number = parseFloat(param.match(/\d+/)[0]);
  let pxValue = null;
  let defaultRootFontSize = null;
  if (unit === 'rem') {
    defaultRootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    pxValue = defaultRootFontSize * number;
    // 打印根节点字体大小的默认值
  } else if (unit === 'em') {
    const theParentNode = node.parentNode;
    defaultRootFontSize = parseFloat(getComputedStyle(theParentNode).fontSize);
    pxValue = defaultRootFontSize * number;
  } else if (unit === 'vw' || unit === 'vh') {
    let viewportValue = null;
    if (unit === 'vw') {
      viewportValue = window.innerWidth || document.documentElement.clientWidth;
    } else {
      viewportValue = window.innerHeight || document.documentElement.clientHeight;
    }
    pxValue = (number / 100) * viewportValue;
  } else if (unit === '%') {
    let theParentNodeValue = null;
    if (direction === 'width') {
      theParentNodeValue = node.parentNode.offsetWidth;
    } else {
      theParentNodeValue = node.parentNode.offsetHeight;
    }
    pxValue = (theParentNodeValue * (number / 100)).toFixed(2);
  } else if (unit === 'px' || unit === '') {
    pxValue = number;
  }

  // ask
  if (pxValue < ask) {
    console.error(`lemonui:the Width or Height can't less than ${ask}px`);
  }
  return pxValue;
};
