/*
Linked Lists - Get Nth

Implement a GetNth() function that takes a linked list and an integer index and returns the node stored at the Nth index position. GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on. So for the list 42 -> 13 -> 666, GetNth() with index 1 should return Node(13);

getNth(1 -> 2 -> 3 -> null, 0).data === 1
getNth(1 -> 2 -> 3 -> null, 1).data === 2
The index should be in the range [0..length-1]. If it is not, GetNth() should throw/raise an exception (ArgumentException in C#, InvalidArgumentException in PHP). You should also raise an exception (ArgumentException in C#, InvalidArgumentException in PHP) if the list is empty/null/None.
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  let counter = 0;
  while (node) {
    if (counter === index) {
      return node;
    }
    counter++;
    node = node.next;
  }

  throw 'Cannot find index';
}

/*
Clever solution by other user
*/
// function getNth(node, index) {
//   if (!node) throw new Error('Invalid node at ' + index);
  
//   return (index === 0) ? node : getNth(node.next, index - 1);
// }

let sample = {
  data: 0,
  next: {
    data: 1,
    next: {
      data: 2,
      next: {
        data: 3,
        next: {
          data: 4,
          next: {
            data: 5,
            next: {
              data: 6,
              next: null
            }
          }
        }
      }
    }
  }
};

console.log(getNth(sample, 6).data);  // 6
console.log(getNth(sample, 1).data);  // 1
console.log(getNth(sample, 2).data);  // 2
console.log(getNth(sample, 0).data);  // 0
console.log(getNth(sample, 7).data);  // error

