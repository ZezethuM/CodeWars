function inAscOrder(arr) {
    //looping through the given array
     for(var i = 0; i < arr.length; i++){
       //checking if the second element of the array is less or equal to the first element
       if(arr[i + 1] <= arr[i]){
         //return false if thats the case  
           return false;
       }
     }
     // if not return true
     return true;
   }
   inAscOrder([1, 2, 6, 3, 7, 20]);