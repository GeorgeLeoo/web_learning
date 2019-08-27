/* eslint-disable no-unused-vars */
/**
 *
 * @param {*} callback 要执行待测函数
 * @return {String} 返回函数执行需要时间
 */
function excuteTime(callback) {
  // 起始时间
  const start = new Date().getTime();
  // 执行待测函数
  callback();
  // 接受时间
  const end = new Date().getTime();
  console.log(end - start, 'ms');
  // 返回函数执行需要时间
  return (end - start) + 'ms';
}
