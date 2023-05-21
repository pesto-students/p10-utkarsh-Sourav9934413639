
let query=[0,2,1,2,0,7,3,-2,6];
let len=query.length;
function my_sort(n,arr){
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            if(arr[i]>arr[j]){
                swap(arr,i,j);
                }
        }
    }
    return arr;
}
function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
console.log(my_sort(len,query));