function catchSignChange(arr){
    var counter = 0;
    
  for(var i = 0; i < arr.length; i++){
      
    if(arr[i] >= 0 && arr[i + 1]  < 0 || arr[i] < 0 && arr[i + 1] >= 0)
    {
      counter++;
    }
    else if(arr == null)
    {
        return 0;
    }
  }
  return counter;

}
catchSignChange([1.-2,5,-8]);