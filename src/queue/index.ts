export class Queue<T> {
    arr: T[];

    constructor(arr: T[] = []) {
        this.arr = arr;
    }

    queue(ele: T) {
        this.arr.push(ele)
    };

    queueMany(ele: T[]) {
        this.arr.push(...ele)
    }

    dequeue() {
        if (this.arr.length === 0) return undefined;
        return this.arr.shift()
    }

    print() {
        console.log(this.arr)
    }

    getQueue() {
        return this.arr;
    }
}