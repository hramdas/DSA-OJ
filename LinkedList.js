class Node{
    constructor(element){
        this.element = element
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    //Add Elements
    add(element){
        let node = new Node(element)

        // if linkedlist is empty
        if(!this.head){
            //console.log('2 head', this.head)
           this.head = node
        }
        else{
            var current = this.head
            while(current.next){
                //console.log('current', current.next)
                current = current.next
            }
            current.next = node
        }
        this.size++
    }


    //Print Linkedlist
    printList(){
        var current = this.head
        var index = 0
        console.log(current)
        while(current){
            console.log('current: ', current.element,'index', index++)
            current = current.next
        }
    }

    isEmpty(){
        return this.size ===0?true:false
    }

    listSize(){
        return this.size
    }


    //Insert(el, index)
    insertAt(el, index){
        if(index>this.size || index<0 && this.size){
            return false
        }

        var node = new Node(el)
        var current = this.head
        var prev = null
        var i = 0
        if(index ===0){
            node.next = current
            this.head = node
        } else{
            
            while(i<index){
                prev = current
                current = current.next
                i++
            }
            //insert at index
            prev.next = node
            //move to the inserted node
            prev = prev.next
            // add rest of the current to inserted node
            prev.next = current
            this.size++
        }
    }

    //Delete element
    removeElement(el){
        var current = this.head
        var prev = null
      
        while(current !== null){
            if(current.element === el){
                //null
                if(prev === null){
                    this.head = current.next
                } else {
                    prev.next = current.next

                }
                this.size--
                console.log('removed element', el)
                return true
            }
            prev = current
            current = current.next
        }
    }

}


const list = new LinkedList()
list.add(1)
list.add(2)
list.add(3)
console.log('List :', list)

list.insertAt(0, 2)


list.printList()
console.log('isEmpty', list.isEmpty())
console.log('size', list.listSize())

list.removeElement(3)



 