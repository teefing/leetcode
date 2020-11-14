/*
 * @lc app=leetcode.cn id=773 lang=javascript
 *
 * [773] 滑动谜题
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
  let start = board[0].concat(board[1]).join('')
  const target = '123450'
  const neighborMap = [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]]
  let queue = [start]
  let visited = new Set(queue)
  let step = 0

  while (queue.length) {
    let len = queue.length
    for (let i = 0; i < len; i++){
      let curBoard = queue.shift()
      if (curBoard === target) {
        return step
      }
      let zeroIndex = curBoard.indexOf('0')
      
      let neighbor = neighborMap[zeroIndex]
      neighbor.forEach(neighborPos => {
        let newBoard = swap(curBoard, zeroIndex, neighborPos)

        if (!visited.has(newBoard)) {
          queue.push(newBoard)
          visited.add(newBoard)
        }
      })

    }
    step++
  }
  return -1
};

function swap (str, i, j) {
  str = str.split('')
  ;[str[i], str[j]] = [str[j], str[i]]
  return str.join('')
}
// @lc code=end

