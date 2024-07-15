export default class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    linearSearch(value) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === value) { 
                return true;
            }
        }
        return false;
    }

    bubbleSort() {
        let iterations = 0;
        let n = this.length;

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                iterations++;
                if (this.data[j] > this.data[j + 1]) { 
                    let temp = this.data[j];
                    this.data[j] = this.data[j + 1];
                    this.data[j + 1] = temp;
                }
            }
        }

        return { sortedArray: Object.values(this.data), iterations };
    }

    radixSort() {
        let iterations = 0;

        const getMax = () => {
            let max = this.data[0];
            for (let i = 1; i < this.length; i++) {
                iterations++;
                if (this.data[i] > max) {
                    max = this.data[i];
                }
            }
            return max;
        };

        const countingSort = (exp) => {
            let output = new Array(this.length);
            let count = new Array(10).fill(0);

            for (let i = 0; i < this.length; i++) {
                iterations++;
                count[Math.floor(this.data[i] / exp) % 10]++;
            }

            for (let i = 1; i < 10; i++) {
                count[i] += count[i - 1];
            }

            for (let i = this.length - 1; i >= 0; i--) {
                iterations++;
                output[count[Math.floor(this.data[i] / exp) % 10] - 1] = this.data[i];
                count[Math.floor(this.data[i] / exp) % 10]--;
            }

            for (let i = 0; i < this.length; i++) {
                this.data[i] = output[i];
            }
        };

        let max = getMax();
        for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
            countingSort(exp);
        }

        return { sortedArray: Object.values(this.data), iterations };
    }

    mergeSort() {
        let iterations = 0;

        const merge = (left, right) => {
            let resultArray = [], leftIndex = 0, rightIndex = 0;
            while (leftIndex < left.length && rightIndex < right.length) {
                iterations++;
                if (left[leftIndex] < right[rightIndex]) {
                    resultArray.push(left[leftIndex]);
                    leftIndex++;
                } else {
                    resultArray.push(right[rightIndex]);
                    rightIndex++;
                }
            }
            return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
        };

        const mergeSortRecursive = (arr) => {
            if (arr.length <= 1) {
                return arr;
            }

            const middle = Math.floor(arr.length / 2);
            const left = arr.slice(0, middle);
            const right = arr.slice(middle);

            return merge(mergeSortRecursive(left), mergeSortRecursive(right));
        };

        let sortedArray = mergeSortRecursive(Object.values(this.data));
        for (let i = 0; i < this.length; i++) {
            this.data[i] = sortedArray[i];
        }

        return { sortedArray: Object.values(this.data), iterations };
    }
    toArray() {
        return Object.values(this.data);
    }
    
}
