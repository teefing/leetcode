/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const wordSize = beginWord.length
  const allow = new Set(wordList)
  if (!allow.has(endWord)) return 0
  const queue = [beginWord]
  const visited = new Set(queue)
  let step = 1, len, i, j, k, newWord, cur
  while (queue.length) {
    len = queue.length
    for (i = 0; i < len; i++){
      cur = queue.shift()
      if(cur === endWord) return step
      for (j = 0; j < wordSize; j++){
        for (k = 0; k < 26; k++){
          newWord = getNewWord(cur, j, k)
          if (newWord !== cur && allow.has(newWord) && !visited.has(newWord)) {
            queue.push(newWord)
            visited.add(newWord)
          }
        }
      }
    }
    step++
  }
  return 0
};

function getNewWord (str, pos, letter) {
  str = str.split('')
  str[pos] = String.fromCharCode(letter+97)
  return str.join('')
}
// @lc code=end

