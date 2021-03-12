/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 322
 * +*
 */
var calculate = function(s) {
  s = s.replace(/\s/g, '').split(/\b/)
  let values = []
  let operators = []
  function isOperator(c){
    return ['+', '-', '*', '/'].includes(c)
  }
  const actions = {
    '*': (a, b) => a*b,
    '/': (a, b) => Math.floor(a/b),
    '+': (a, b) => a+b,
    '-': (a, b) => a-b,
  }

  for(let i=0;i<s.length;i++ ){
    if(isOperator(s[i])){
      if(['*', '/'].includes(s[i])) {
        let left = values.pop()
        let right = Number(s[i+1])
        let operator = s[i]
        let res = actions[operator](left, right)
        values.push(res)
        i++
      } else {
        operators.push(s[i])
      }
    } else {
      values.push(Number(s[i]))
    }
  }
  operators.reverse()
  values.reverse()
  while(operators.length) {
    let operator = operators.pop()
    let left = values.pop()
    let right = values.pop()
    let res = actions[operator](left, right)
    values.push(res)
  }
  return values[0]
};
// console.log(calculate("0-2147483647"))

// @lc code=end

