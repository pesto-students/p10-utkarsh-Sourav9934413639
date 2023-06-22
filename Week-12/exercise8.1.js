class Node{
    constructor(val){
        this.data=val;
        this.left=null;
        this.right=null;
    }
}
class BinaryTree{

    constructor(){
        this.idx=-1;
    }
    
    buildBinaryTree(arr){
        this.idx++;
        if(arr[this.idx]===-1){
            return null;
        }
        else{
            let newNode=new Node(arr[this.idx]);
            if(this.root===null){
                this.root=newNode;
            }
            newNode.left=this.buildBinaryTree(arr);
            newNode.right=this.buildBinaryTree(arr);
            return newNode;
        }
    }
    ismirror(node1,node2){
        if((node1===null)&&(node2===null)){
            return true;
        }
        if((node1===null)||(node2===null)){
            return false;
        }
        if(node1.data!==node2.data){
            return false;
        }
        if((node1.left==node2.right)&&(node1.right==node2.left)){
            return true;
        }
        return this.ismirror(node1.left,node2.right)&& this.ismirror(node1.right,node2.left);
        
        
    }
    depth(node){
        if(node===null){
            return 0;
        }
        let dep=0;
        let lt=this.depth(node.left);
        let rt=this.depth(node.right);
        dep=Math.max(lt,rt);
        return dep+1;
    }
    traverseTree(node){
        
        if(node===null){
            return "";
        }
        let str="";
        
        str+=this.traverseTree(node.left);
        str+=node.data+" ";
        str+=this.traverseTree(node.right);
     return str;
    }
    main(){
        const bt1=new BinaryTree();
        let a=[1,2,4,-1,-1,5,-1,-1,-1];
        let res=bt1.buildBinaryTree(a);
        console.log(bt1.depth(res));
        
    }
}
const tree=new BinaryTree();
tree.main();


  