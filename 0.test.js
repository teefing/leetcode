function bfs (start, target) {
  const queue = []
  const visited = new Set()

  queue.push(start)
  visited.add(start)
  let level = 0

  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++){
      const cur = queue.shift()
      if (cur === target) {
        return level
      }
      for (let x of cur.neighbors) {
        if (visited.has(x) === false) {
          queue.push(x)
          visited.add(x)
        }
      }
    }

    level++
  }

}