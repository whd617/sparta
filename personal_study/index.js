// 1. Node
// 2. LinkedList
/*
1. getFirst(); // head 갖고오기 o
2. getLast(); // tail 갖고오기 o
3. getSize(); // 링크드리스트의 크기 갖고오기 o
4. insertAt(); // 원하는 인덱스에 노드 넣기
*/
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor(node = null) {
        this.head = node;
    }
    getFirst() {
        // 링크드 리스트의 첫번째 요소를 갖고와야함
        // 첫번째요소는 헤드임
        return this.head;
    }
    getLast() {
        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }
        return temp;
    }
    getSize() {
        let cnt = 0;
        let temp = this.head;
        if (temp) {
            // 링크드리스트가 비어있지 않을 때!
            while (temp.next !== null) {
                temp = temp.next;
                cnt++;
            }
        } else {
            // 링크드리스트가 비어있다. 아무것도 없음!
            return 0;
        }
        return cnt + 1;
    }
    insertAt(idx, node) {
        if (this.head === null) {
            console.log("List가 비어있습니다.");
            this.head = node;
            return;
        }
        if (idx === this.getSize()) {
            this.getLast().next = node;
            return;
        }
        // 중간에 넣는거 !
        let temp = this.head;
        let cnt = 0;
        while (cnt !== idx - 1) {
            temp = temp.next;
            cnt++;
        }
        node.next = temp.next;
        temp.next = node;
        return;
    }
    showNode() {
        let temp = this.head;
        for (let i = 0; i < this.getSize(); i++) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let linkedList = new LinkedList(node1);
let node4 = new Node(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
let node5 = new Node(5);
node4.next = node5;
let node6 = new Node(6);
linkedList.insertAt(3, node6);
linkedList.showNode();
