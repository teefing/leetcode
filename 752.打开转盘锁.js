/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  const deads = new Set(deadends)
  const queue = []
  const visited = new Set()
  queue.push('0000')
  visited.add('0000')
  let step = 0, cur, len, i, j

  while (queue.length) {
    len = queue.length
    for (i = 0; i < len; i++){
      cur = queue.shift()
      if (cur === target) return step
      if (deads.has(cur)) continue
      for (j = 0; j < 4; j++){
        const up = addOne(cur, j)
        if (!visited.has(up)) {
          queue.push(up)
          visited.add(up)
        }

        const down = minusOne(cur, j)
        if (!visited.has(down)) {
          queue.push(down)
          visited.add(down)
        }
      }
    }
    step++
  }
  return -1
};

function addOne (str, position) {
  str = str.split('')
  let cur = +str[position]
  cur = (cur + 1) % 10
  str[position] = cur
  return str.join('')
}
function minusOne (str, position) {
  str = str.split('')
  let cur = +str[position]
  cur = (cur - 1+10) % 10
  str[position] = cur
  return str.join('')
}
// @lc code=end

