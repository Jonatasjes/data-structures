/* 
    Deque Data Structure - based on object
 
    A deque, also knowledge as double-ended queue, is a especial queue that permite 
    insert and remove elements from the end and from the front at the queue.  
*/

export default class Deque {
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
        return JSON.stringify(this.items).replace('{','').replace('}','') 
    }

    // This method add a new element in front of the queue.
    addFront(element: any) {}

    // This method add a new element in the end of the queue. 
    addBack(element: any) {
        if (this.isEmpty()) {
            this.items[this.higherCount] = element
            this.count++
            return    
        }

        this.higherCount++
        this.items[this.higherCount] = element 
        this.count++
    }

    // This method remove the queue front element.
    removeFront() {
        if(this.isEmpty()) return undefined

        const removedElement = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        
        if (this.count === 1) {
            this.higherCount = 0
            this.lowestCount = 0
            this.count = 0
            return removedElement
        }

        this.lowestCount++
        this.count--

        return removedElement
    }

    // This method remove the queue last element.
    removeBack() {
        if(this.isEmpty()) return undefined

        const removedElement = this.items[this.higherCount]
        delete this.items[this.higherCount]

        if (this.count === 1) {
            this.higherCount = 0
            this.lowestCount = 0
            this.count = 0
            return removedElement
        }

        this.higherCount--
        this.count--

        return removedElement
    }

    // This method return the queue front element.
    peekFront() {
        if(this.isEmpty()) return undefined
        return this.items[this.lowestCount]
    }

    // This method return the queue last element.
    peekBack() {
        if(this.isEmpty()) return undefined
        return this.items[this.higherCount]
    }

    // This method return true if there's no element on the queue.
    isEmpty() {
        return this.count === 0
    }

    // This method return the queue total of elements
    size() {
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