/* 
    Queue Data Structure - based on object
 
    A queue is a items ordened colection based on FIFO(First In First Out), 
    also knowledge as first-come first-served.The new elements adition in a queue is made 
    from the tail and the remotion, from the front. The latest element added on queue must
    wait on the end of the queue.
*/

export default class Queue {
    private count: number
    private lowestCount: number
    private items: any

    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    // This method add a new element on the end of the queue.
    enqueue(element: any) {
        this.items[this.count] = element
        this.count++
    }

    // This method remove the queue first element. Also return the removed element.  
    dequeue() {}

    // This method return the queue first element. It is the first element added and the first
    // will be returned. 
    peek() {}

    // This method return true if there's no element on the queue.
    isEmpty() {}

    // This method return the queue total of elements
    size(){}
}