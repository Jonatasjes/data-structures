/* 
    Stack Data Structure - based on object

    A stack is an ordered collection of items with the LIFO(Last In First Out) principal. 
    New additions or withdrawal of existing items occur at the same extremity.
    The stack end is knowledge as top, while the opposite side is knowledge as base. 
*/

export default class Stack {
    private items: any
    private count: number

    constructor() {
        this.items = {}
        this.count = 0
    }

    // add element 
    push(element: any) {
        this.items[this.count] = element
        this.count++
    }

    // remove element from the top of the stack
    pop() {
        if (this.isEmpty()) return undefined
        const deletedItem = this.items[this.count]
        this.count--
        delete this.items[this.count]
        return deletedItem
    }

    // return element from the top of the stack
    peek() {
        return this.items[this.count-1]
    }

    // return true if the stack is empyt
    isEmpty() {
        return this.count === 0
    }

    // remove all elements from the stack
    clear() {
        this.items = {}
        this.count = 0
    }

    // return the total of elements in the stack
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