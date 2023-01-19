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
    addBack(element: any) {
        this.items[this.count] = element
        this.count++
    }

    // This method remove the queue front element.
    removeFront() {
        if(this.isEmpty()) return undefined

        const removedElement = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        
        if (this.count === 1) {
            this.lowestCount = 0
            this.count = 0
            return removedElement
        }

        this.lowestCount++
        this.count--

        return removedElement
    }

    // This method remove the queue last element.
    removeBack() {}

    // This method return the queue front element.
    peekFront() {
        return this.items[this.lowestCount]
    }

    // This method return the queue last element.
    peekBack() {}

    // This method return true if there's no element on the queue.
    isEmpty() {
        return this.count === 0
    }
}