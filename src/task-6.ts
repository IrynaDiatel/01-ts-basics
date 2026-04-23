/* Task */
function getFirstElement(arr) {
  return arr[0];
}

getFirstElement([1, 2, 3]);           // 1
getFirstElement(["a", "b", "c"]);     // "a"
getFirstElement([true, false, true]); // true

/* Decision */
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]);           
getFirstElement<string>(["a", "b", "c"]);     
getFirstElement<boolean>([true, false, true]); 
