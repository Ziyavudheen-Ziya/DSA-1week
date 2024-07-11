class Node{

    constructor(value){

         this.value = value
         this.next = null
         this.prev =null
    }
}

class LinkedList{


    constructor(){

        this.head = null
        this.tail = null
        this.size = 0
      }


      isEmpty(){

        return this.size ==0
      }

      isSize(){

        return this.size
      }

      prepend(value){

        let node = new Node(value)

          if(this.isEmpty()){

             this.tail = node

             
          }else{
            
             this.head.prev = node
             node.next = this.head
            
              
          }

          this.size++;
          this.head = node
      }

      print(){

         let str = ''

         let curr = this.head

         while(curr){

            str+= `${curr.value} `
            curr = curr.next


         }

         console.log(str);

      }
}

const list = new LinkedList()

list.prepend(1)
list.prepend(2)
list.prepend(3)
list.prepend(4)
list.prepend(5)

list.print()
