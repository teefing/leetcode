const findFirstNode = (nodeList) => {
  let nextIdMap = new Map();
  nodeList.forEach((node) => {
    nextIdMap.set(node.id, node.nextId);
  });
  nodeList.forEach((node) => {
    let nextId = node.nextId;
    if (nextId !== undefined) {
      nextIdMap.delete(nextId);
    }
  });

  let arr = [...nextIdMap.keys()];
  console.log("arr: ", arr);
  if (arr.length) return arr[0];
  else return new Error("error");
};
const list = [
  { id: 3, nextId: 0 },
  { id: 1, nextId: 2 },
  { id: 2, nextId: 3 },
];
//输出 1
console.log(findFirstNode(list));
