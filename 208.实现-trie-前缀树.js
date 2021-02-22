/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

class TrieNode {
  constructor() {
    this.links = {};
    this.isEnd = false;
  }

  /**
   *
   * @param {string} ch
   * @param {TrieNode} node
   * @returns {TrieNode}
   */
  set(ch, node) {
    this.links[ch] = node
    return node
  }
  /**
   *
   * @param {string} ch
   * @returns {TrieNode}
   */
  get(ch) {
    return this.links[ch];
  }

  /**
   *
   * @param {string} ch
   * @returns {boolean}
   */
  has(ch) {
    return !!this.get(ch);
  }
}

class Trie {
  constructor(){
    this.root = new TrieNode()
  }
  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root
    for(let c of word) {
      node = node.has(c) ? node.get(c) : node.set(c, new TrieNode())
    }
    node.isEnd = true
  }

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let node = this.root
    for(let c of word) {
      node = node.get(c)
      if(!node) return false
    }
    return node.isEnd
  }
  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let node = this.root
    for(let c of prefix) {
      node = node.get(c)
      if(!node) return false
    }
    return true
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
// let trie = new Trie();

// trie.insert("我是帅哥");
// console.log(trie.search("我是帅哥"))

// console.log(trie.search("我是帅"))
// ;  
// console.log(trie.startsWith("我是帅"))
// trie.insert("我是帅"); 
// console.log(trie.search("我是帅"))