/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  const value = getValueFromLinkedList(l1) + getValueFromLinkedList(l2);
  return getLinkedListFromValue(value);
};

function getLinkedListFromValue(value) {
  strArr = value.toString().split("");
  let head = null;
  for (let i = 0; i < strArr.length; i++) {
    const node = new ListNode(+strArr[i], head);
    head = node;
  }
  return head;
}

function getValueFromLinkedList(listNode) {
  const values = [];
  let head = listNode;

  while (head !== null) {
    values.push(head.val.toString());
    head = head.next;
  }

  return BigInt(values.reverse().join(""));
}

/**********************************************************************/

const node17 = new ListNode(1, null);
const node16 = new ListNode(0, node17);
const node15 = new ListNode(0, node16);
const node14 = new ListNode(0, node15);
const node13 = new ListNode(0, node14);
const node12 = new ListNode(0, node13);
const node11 = new ListNode(0, node12);
const node10 = new ListNode(0, node11);
const node9 = new ListNode(0, node10);
const node8 = new ListNode(0, node9);
const node7 = new ListNode(0, node8);
const node6 = new ListNode(0, node7);
const node5 = new ListNode(0, node6);
const node4 = new ListNode(0, node5);
const node3 = new ListNode(0, node4);
const node2 = new ListNode(0, node3);
const node1 = new ListNode(1, node2);

const l1 = node1;

const node23 = new ListNode(4, null);
const node22 = new ListNode(6, node23);
const node21 = new ListNode(5, node22);

const l2 = node21;

addTwoNumbers(l1, l2);
