export default class Linked {
    #head;
    #count;

    constructor() {
        this.#head = null;
        this.#count = 0;
    }

    push(value, weight = 1) {
        const newNode = { value, weight, next: null };

        if (!this.#head) {
            this.#head = newNode;
        } else {
            let current = this.#head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.#count++;
    }

    getElementAt(index) {
        if (index >= 0 && index < this.#count) {
            let node = this.#head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return null;
    }

    isEmpty() {
        return this.#head === null;
    }

    getHead() {
        return this.#head;
    }

    linearSearch(value) {
        let current = this.#head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    bubbleSort() {
        let iterations = 0;

        if (!this.#head || !this.#head.next) {
            return { sortedList: this.#head, iterations };
        }

        let swapped;
        do {
            swapped = false;
            let current = this.#head;

            while (current.next) {
                iterations++;
                if (current.value > current.next.value) {
                    let temp = current.value;
                    current.value = current.next.value;
                    current.next.value = temp;
                    swapped = true;
                }
                current = current.next;
            }
        } while (swapped);

        return { sortedList: this.#head, iterations };
    }

    mergeSort() {
        let iterations = 0;

        const split = head => {
            let fast = head;
            let slow = head;
            while (fast.next && fast.next.next) {
                slow = slow.next;
                fast = fast.next.next;
            }
            let temp = slow.next;
            slow.next = null;
            return temp;
        };

        const merge = (left, right) => {
            let result = { next: null };
            let current = result;
            while (left && right) {
                iterations++;
                if (left.value < right.value) {
                    current.next = left;
                    left = left.next;
                } else {
                    current.next = right;
                    right = right.next;
                }
                current = current.next;
            }
            current.next = left || right;
            return result.next;
        };

        const mergeSortRecursive = node => {
            if (!node || !node.next) {
                return node;
            }
            let middle = split(node);
            let left = mergeSortRecursive(node);
            let right = mergeSortRecursive(middle);
            return merge(left, right);
        };

        this.#head = mergeSortRecursive(this.#head);
        return { sortedList: this.#head, iterations };
    }

    radixSort() {
        return { sortedList: this.#head, iterations: 0 };
    }
    toArray() {
        let array = [];
        let current = this.head;
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }
}
