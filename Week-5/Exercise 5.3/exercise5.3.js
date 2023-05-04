function hasDuplicate(arr){
    let duplicateElem=new Map();
    for(let elem of arr){
            if(duplicateElem.has(elem))
            {
                duplicateElem.set(elem,duplicateElem.get(elem)+1);
            }
            else
            {
                duplicateElem.set(elem,1);
            }
        
    }
    let result=false;
    for(let [key,value] of duplicateElem){
        if(value>1){
            result=true;
        }
    }
    return result;
}

let query=hasDuplicate([1,2,6,19,61,2]);
console.log(query);