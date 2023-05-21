function threeSum(arr,target){
    let sum;
    let min=Infinity;
    let requiredSum;
    for(let i=0;i<arr.length-2;i++){
        for(let j=i+1;j<arr.length-1;j++){
            for(let k=j+1;k<arr.length;k++){
                sum=arr[i]+arr[j]+arr[k];
                let res=Math.abs(sum-target);
                if(res<min){
                    min=res;
                    requiredSum=sum;
                }
            }
        }
    }
    return requiredSum;
}
let arr1=[-1,2,1,-4];
let res1=threeSum(arr1,1);
console.log(res1);