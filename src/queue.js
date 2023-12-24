const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    this.head = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode (value);

    if (this.head === null) {
      this.head = newNode;
      return this;
    }

    if (!this.head.next) {
    this.head.next = newNode;
    return this;
    }

    let head = this.head;
    while (head.next !== null) {
      head = head.next;
      if (head.next === null) {
        head.next = newNode;
        return this;
      }
    }

  }

  dequeue() {
    let headValue = this.head.value;
    this.head = this.head.next;
    return headValue;
  }
}

module.exports = {
  Queue
};
