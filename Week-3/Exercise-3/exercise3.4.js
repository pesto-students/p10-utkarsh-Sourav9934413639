function createStack() {
    const items = [];
  
    return {
      push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      }
    };
  }
  
  const stack = createStack();
  stack.push(50);
  stack.push(100);
  let x=stack.pop(); 
  console.log(x);
  console.log(stack.items);
  
//Earlier, we were able to access items array outside createStack() method because array was itself returned in the form of object aand was stored in the variable named "stack" but now in order the make the array non-accessible, we need to define the array outside the return statement where we need to return the changes in the array like inserting elements and deleting elements.
