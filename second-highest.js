// To find the second largest number in an array.
/*
Method 1:
step1 : loop over array and remove the largest element.
step2: loop over remaining array and then find the largest.

Method 2:



*/

function second_highest(Arr) {
    let highest_num = Arr[0];
    let second_highest_num = -Infinity;
    
    // Find the highest number in the array
    for (let i = 1; i < Arr.length; i++) {
      if (Arr[i] > highest_num) {
        second_highest_num = highest_num;
        highest_num = Arr[i];
      } else if (Arr[i] > second_highest_num && Arr[i] < highest_num) {
        second_highest_num = Arr[i];
      }
    }
    
    return second_highest_num;
  }
  
  const Arr = [1,2,3,4,5,6,7,8,9,10];
  console.log(second_highest(Arr));


