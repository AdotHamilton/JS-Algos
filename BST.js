class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }

    // given a BST add a node to it in the appropriate spot!
    // remember a BST contain values that are larger to the right of a Node, and smaller to the left
    // a BST also does not contain duplicates!
    add(value){
        var newNode = new Node(value);
        if(this.root === null){     
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(current){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    // Given a BST, return the value of the min node in the tree
    findMin(){
        if(!this.root) return "empty list";
        let runner = this.root;
        if(!runner.left) return runner;
        while(runner.left){
            runner = runner.left;
        }
        return runner;
    }
    // Given a BST, return the value of the max node in the tree
    findMax(){
        if(!this.root) return "empty list";
        let runner = this.root;
        if(!runner.right) return runner;
        while(runner.right){
            runner = runner.right;
        }
        return runner;
    }
    printTree(){
        
    }
}

var bst = new BST();

bst.add(8);
bst.add(15);
bst.add(3);
bst.add(-12);
bst.add(22);
bst.add(10);
bst.add(5);
console.log(bst.findMax());
console.log(bst.findMin());