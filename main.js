let push = document.getElementById("push");
let pop = document.getElementById("pop");
let stack_size = document.getElementById("stackSize");
let status = document.getElementById("result");
let stack = document.getElementById("stack");


class Stack {
    constructor(){

        this.data = [];
        this.top = 0;
    }

isEmpty(){
    if(this.top === 0){
        return true;
    }else{
        return false;
    }
}
isFull(){
    if(this.top===this.size){
        return true;
    }else{
        return false;
    }
}
pushElement(element) {
    if(!this.isFull()){
        this.data.unshift(element);
        this.top++;
    }else{
        status.innerHTML = "Stack is Full";
    }
}
popElement(){
    if(!this.isEmpty()){
    this.data.shift();
    this.top--;
    }else{
        status.innerHTML = "Stack is Empty";
    }
}
print(){
    stack.innerHTML="";
    this.data.forEach(function(data){
        stack.innerHTML+="<div class='block'>"+data+"</div>"
    })
    }

length(){
    return this.top;
}
}
let finalstack = new Stack();


push.addEventListener("click",function(){
    let x = document.getElementById("pushElement").value;
    finalstack.pushElement(x);
    document.getElementById("pushElement").value = "";
    finalstack.length();
    finalstack.print();
    console.log(finalstack.top);
})


pop.addEventListener("click",function(){
    finalstack.popElement();
    document.getElementById("pushElement").value = "";
    finalstack.length();
    finalstack.print();
})