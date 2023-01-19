/* 
    Deque Data Structure - based on object
 
    A deque, also knowledge as double-ended queue, is a especial queue that permite 
    insert and remove elements from the end and from the front at the queue.  
*/

export default class Deque {
    private count: number
    private lowestCount: number
    private items: any

    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    // This method add a new element in front of the queue.
    addFront(element: any) {}

    // This method add a new element in the end of the queue. 
    addBack(element: any) {}

    // This method remove the queue front element.
    removeFront() {}

    // This method remove the queue last element.
    removeBack() {}

    // This method return the queue front element.
    peekFront() {}

    // This method return the queue last element.
    peekBack() {}
}