/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  if(digits.length === 0) return []

  let track = []
  let res = []

  function backtrack (curNumberIndex = 0) {
    
    
    if (track.length === digits.length) {
      res.push(track.slice())
      return
    }

    if(curNumberIndex >= digits.length) return
    let choiceList = map[digits[curNumberIndex]] || []
    for (let i = 0; i < choiceList.length; i++) {
      track.push(choiceList[i])
      backtrack(curNumberIndex + 1)
      track.pop(choiceList[i])
    }
  }

  backtrack()
  return res.map(item => item.join(''))
};

// console.log(letterCombinations('23'));
// @lc code=end

