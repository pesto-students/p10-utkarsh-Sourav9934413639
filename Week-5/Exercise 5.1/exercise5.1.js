let a=[5,3,9,10,1,8,2,15];
async function doTasksAsync(a) {
    try {
      const result1 = await arrangingElementsOfArray(a);
      console.log(result1);
      const result2 = await findAverage(a);
      console.log(result2);
      const result3 = await greaterThan(a);
      console.log(result3);
    } catch (err) {
      console.error(err);
    }
  }
  
  function* doTasksGenerator(a) {
    try {
      const result1 = yield arrangingElementsOfArray(a);
      console.log(result1);
      const result2 = yield findAverage(a);
      console.log(result2);
      const result3 = yield greaterThan(a);
      console.log(result3);
    } catch (err) {
      console.error(err);
    }
  }
  
  
  function arrangingElementsOfArray(arr1) {
    return new Promise(resolve => {
        let sort_arr=[...arr1]
      setTimeout(() => {
        sort_arr.sort((a,b)=>{
            return b-a;
        })
        resolve(`Task 1 of sorting array in descending order is done, where the result is ${sort_arr}`);
      }, 1000);
    });
  }
  
  function findAverage(arr2) {
    return new Promise(resolve => {
      setTimeout(() => {
        let sum=0;
        for(let i=0;i<arr2.length;i++){
            sum+=arr2[i];
        }
        let avg=sum/arr2.length;
        resolve(`Task 2 of finding the average of all numbers in an array is done, where the result is ${avg}`);
      }, 2000);
    });
  }
  
  function greaterThan(arr3) {
    return new Promise(resolve => {
      setTimeout(() => {
        const result3=arr3.filter((elem)=>{
            return elem>=5;
        })
        resolve(`Task 3 of finding all numbers greater than or equal to 5 in an arrray is done, where the result is ${result3}`);
      }, 3000);
    });
  }
  

  doTasksAsync(a);
  const taskGenerator = doTasksGenerator(a);
  taskGenerator.next().value.then(result1 => {
    taskGenerator.next(result1).value.then(result2 => {
      taskGenerator.next(result2).value.then(result3 => {
        taskGenerator.next(result3);
      });
    });
  });


  