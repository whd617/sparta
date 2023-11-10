// 1. push
// 2. pop
// 3. top
class stack {
    consturctor() {
        this._arr = [];
    }
    push(data) {
        return this._arr.push(data);
    }
    pop() {
        return this._arr.pop();
    }
    top() {
        return this._arr[this._arr.length - 1];
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());
stack.pop();

// 콜스택, 실행 컨테스트

class Queue {
    constructer() {
        this._arr = [];
    }
    enqueue(item) {
        return this._arr.push(tiem);
    }

    dequeue() {
        return this._arr.shift(item);
    }
}

// 테스크큐;
