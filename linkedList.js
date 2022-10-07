class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}


class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    // add element to the end of the linked list
    append(value) {
        const node = new Node(value);

        if (this.head == null) { // if there is no head element - linked list in empty
            this.head = node; // then new node is the head element (and the tail element simultaniously)
        }

        if (this.tail != null) { // if there is the tail element - linked list is not empty - we must rewrite the tail element
            const prevTailNode = this.tail;
            prevTailNode.nextNode = node; // previous tail element gets link to the new tail element
        }
        this.size += 1; // list size incremented
        this.tail = node; // added node to the end of the linked list
    }

    // add element to the start of the linked list
    prepend(value) {
        const node = new Node(value);

        if (this.tail == null) { // if there is no tail element - linked list in empty
            this.tail = node; // then new node is the tail element (and the head element simultaniously)
        }

        if (this.head != null) { // if there is the head element - linked list is not empty
            node.nextNode = this.head; // new head node gets link to the previous head element
        }
        this.size += 1; // list size incremented
        this.head = node; // added node to the start of the linked list
    }

    size() {
        return this.size;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    // returns the node at the given index
    at(index) {
        if (index > this.size - 1) {
            return null; // index exceeds the last element index
        }

        let currentElement = this.head;
        for (let i = 0; i < this.size; i++) {
            if (i == index) {
                return currentElement;
            }
            currentElement = currentElement.nextNode;
        }
    }

    // removes the last element from the list (can't figure out how to make without loop :( )
    pop() {
        if (this.size == 0) {
            return;
        } else if (this.size == 1) {
            this.head = null;
            this.tail = null;
            this.size = 0;
            return;
        }

        this.tail = this.at(this.size - 2); // get the element which before the tail element
        this.tail.nextNode = null;
        this.size--;
    }

    // returns true if the passed in value is in the list and otherwise returns false
    contains(value) {
        if (this.size == 0) {
            return false; // linked list is empty
        }

        let currentElement = this.head;
        for (let i = 0; i < this.size; i++) {
            if (currentElement.value == value) {
                return true; // value founded 
            }
            currentElement = currentElement.nextNode;
        }
        return false; // value does not found
    }

    // returns the index of the node containing value, or null if not found
    find(value) {
        if (this.size == 0) {
            return null; // linked list is empty
        }

        let currentElement = this.head;
        for (let i = 0; i < this.size; i++) {
            if (currentElement.value == value) {
                return i; // value founded 
            }
            currentElement = currentElement.nextNode;
        }
        return null; // value does not found
    }

    // represents LinkedList objects as strings in format: ( value ) -> ( value ) -> ( value ) -> null
    toString() {
        if (this.size == 0) {
            return 'null';
        }

        let outputStr = '';
        let currentElement = this.head;
        for (let i = 0; i < this.size; i++) {
            outputStr += `( ${currentElement.value} )`;
            currentElement = currentElement.nextNode;

            if (i != this.size - 1) {
                outputStr += ' -> ';
            }
        }
        return outputStr;
    }

    // inserts a new node with the provided value at the given index
    insertAt(value, index) {
        if (index > this.size) {
            console.log('index exceeds list (size + 1)');
        } else if (index == this.size) { // the same as append
            this.append(value);
        } else if (index == 0) { // the same as prepend
            this.prepend(value);
        } else { // inserted element is between head and tail
            const newNode = new Node(value);
            const prevElement = this.at(index - 1);
            const nextElement = this.at(index);
            
            prevElement.nextNode = newNode;
            newNode.nextNode = nextElement;
            this.size++;
        }
    }

    // removes the node at the given index
    removeAt(index) {
        if (index > this.size - 1) {
            console.log('index exceeds list size');
        } else if (index == this.size) { // the same as pop
            this.pop(index);
        } else if (index == 0) {
            const newHeadElement = this.head.nextNode;
            this.head = newHeadElement;
            this.size--;
        } else { // removed element is between head and tail
            const prevElement = this.at(index - 1);
            prevElement.nextNode = this.at(index + 1);
            this.size--;
        }
    }
} 

module.exports = { Node, LinkedList };