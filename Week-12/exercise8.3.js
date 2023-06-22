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
    levelOrderTraversal(node){
        let str="";
        if(node==null){
            return;
        }
        let q=[];
        q.push(node);
        while(q.length!=0){
            let x=q.shift();
            str+=x.data+" ";
            if(x.left){
                q.push(x.left);
            }
            if(x.right){
                q.push(x.right);
            }
        }
        return str;
    }
    main(){
        const bt1=new BinaryTree();
        let a=[1,2,4,-1,-1,5,-1,-1,-1];
        let res=bt1.buildBinaryTree(a);
        console.log(this.levelOrderTraversal(res));
    }
}
const tree=new BinaryTree();
tree.main();


  