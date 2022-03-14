function arrayPlusArray(arr1, arr2) {
        var arr3 = arr1.concat(arr2);
        var sum = 0;
    for(var i = 0; i < arr3.length; i++){
      sum = sum + arr3[i];
    }
    return sum;
}
  arrayPlusArray([1, 2, 3], [4, 5, 6]);