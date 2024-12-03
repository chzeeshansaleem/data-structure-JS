var myStack = function(){

    this.storage = [];
    this.push = function(value) {
        this.storage[this.storage.length] = value;
    }
     this.pop = function() {
         if(!this.storage.length){
             return undefind;
         }
        result = this.storage[this.storage.length-1];
        console.log(this.storage.length)
this.storage.length = this.storage.length - 1;
return result
    }
    this.peek = function(){
        if(!this.storage.length){
             return undefind;
         }
        return this.storage[this.storage.length-1];
        
    }
}

const stack1 = new myStack()
stack1.push(1)
stack1.push(2)
stack1.push(3)
console.log(stack1.pop())
console.log(stack1.peek());
