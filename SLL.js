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
    
    removeSame(){1
        var curr = this.head
        while(curr !== null){
            if(curr.data == curr.next.data){
                curr.next = curr.next.next
                break;
            }
            curr = curr.next
        }
        console.log(this.head)
        // return this.head
    }

    print(){
        return this.head
    }
    // {
    //     var temp = this.head
    //     console.log(temp)
    // }
}

var list = new LinkedList()
list.add(1)
list.add(1)
list.add(3)
list.add(4)
// console.log('List :', Node)
// function print(t){
//     console.log(t)
// }
// console.log(list.print())

//console.log(list.print())

lld = list.print()

var curr = lld
while(curr !== null){
    console.log(curr.element) 
    curr = curr.next
    
}

// list.insertAt(0, 2)



// list.printList()
// console.log('isEmpty', list.isEmpty())
// console.log('size', list.listSize())

// list.removeElement(3)



 