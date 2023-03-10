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
    private higherCount: number
    private items: any

    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.higherCount = 0
        this.items = {}
    }

    getLowestCount() {
        return this.lowestCount
    }

    getHigherCount() {
        return this.higherCount
    }

    getItems() {
        return this.items
    }

    // This method add a new element on the end of the queue.
    enqueue(element: any) {
        if (this.isEmpty()) {
            this.items[this.higherCount] = element
            this.count++
            return    
        }

        this.higherCount++
        this.items[this.higherCount] = element 
        this.count++
    }

    // This method remove the queue first element. Also return the removed element.  
    dequeue() {

        if(this.isEmpty()) return undefined

        const removedElement = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        
        if (this.count === 1) {
            this.lowestCount = 0
            this.higherCount = 0
            this.count = 0
            return removedElement
        }

        this.lowestCount++
        this.count--

        return removedElement
    }

    // This method return the queue first element. It is the first element added and the first
    // will be returned. 
    peek() {
        return this.items[this.lowestCount]
    }

    // This method return true if there's no element on the queue.
    isEmpty() {
        return this.count === 0
    }

    // This method return the queue total of elements
    size(){
        return this.count
    }

    toString() {
        if(this.isEmpty()) return ''

        let objString = `${this.items[0]}`
        for(let i = 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }

        return objString
    }
}