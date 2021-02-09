/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = new Map()
  }
  get(key){
    if(!this.map.has(key)) return -1
    let value = this.map.get(key)
    this.map.delete(key)
    this.map.set(key, value)
    return value
  }

  put(key, value){
    // 修改
    if(this.map.has(key)) {
      this.map.delete(key)
      this.map.set(key, value)
      return
    }

    // 新增
    // 容量已满
    if(this.capacity === this.map.size) {
      const delKey = this.map.keys().next().value
      this.map.delete(delKey)
    }
    this.map.set(key, value)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

