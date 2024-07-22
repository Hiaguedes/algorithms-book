import { describe, expect, it } from "vitest";
import { Queue } from ".";

describe('queue', () => {
    it('queue and dequeue correctly', () => {
        const queue = new Queue();

        queue.queue(1)
        queue.queue(2)
        queue.queue(3)
        expect(queue.dequeue()).toBe(1);

        expect(queue.getQueue()).toMatchObject([2, 3])
    })
})