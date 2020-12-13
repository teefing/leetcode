/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let need = {},
    window = {};
  for (c of t) {
    need[c] = (need[c] || 0) + 1;
  }

  let left = 0,
    right = 0;

  let valid = 0;

  // 记录最小覆盖字串的起始索引及长度
  let start = 0,
    len = Infinity;
  while (right < s.length) {
    // c是将移入窗口的字符
    let c = s[right];
    // 右移窗口
    right++;
    // 进行窗口内数据的一系列更新
    if (need[c]) {
      window[c] = (window[c] || 0) + 1;
      if (window[c] === need[c]) valid++;
    }
    // 判断左侧窗口是否要收缩
    while (valid === Object.values(need).length) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }

      // d是将要移出窗口的字符
      let d = s[left];
      // 左移窗口
      left++;
      // 进行窗口内数据的一系列更新
      if (need[d]) {
        if (window[d] === need[d]) {
          valid--;
        }
        window[d]--;
      }
    }
  }
  // 返回最小覆盖字串
  return len === Infinity ? "" : s.substr(start, len);
};

// console.log(minWindow("aa", "aa"));
// @lc code=end
