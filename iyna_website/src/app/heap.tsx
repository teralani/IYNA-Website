type PriorityQueueNode<T> = { data: T; priority: number };

export class PriorityQueue<T> {
    public heap: PriorityQueueNode<T>[];

    constructor() {
        this.heap = [];
    }

    push(data: T, priority: number): void {
        const node: PriorityQueueNode<T> = { data, priority };
        this.heap.push(node);
        this.bubbleUp();
    }

    pop(): T | null {
        if (this.heap.length === 0) return null;
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0 && end !== undefined) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return max.data;
    }

    private bubbleUp(): void {
        let index = this.heap.length - 1;
        const element = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (element.priority <= parent.priority) break;
            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    private bubbleDown(): void {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let leftChild: PriorityQueueNode<T> | undefined, rightChild: PriorityQueueNode<T> | undefined;
            let swap: number | null = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild.priority > element.priority) swap = leftChildIndex;
            }
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild.priority > element.priority) ||
                    (swap !== null && rightChild.priority > (leftChild ? leftChild.priority : -Infinity))
                ) swap = rightChildIndex;
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            index = swap;
        }
        this.heap[index] = element;
    }
}