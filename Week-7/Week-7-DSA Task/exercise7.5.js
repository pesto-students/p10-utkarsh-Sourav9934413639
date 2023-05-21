function sumPair(arr,k){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(((arr[i]-arr[j])==k)||((arr[j]-arr[i])==k))
            {
                return 1;
            }
        }
    }
    return 0;
}
let arr1=[1,-5,8];
let pair1=sumPair(arr1,-13);
console.log(pair1);