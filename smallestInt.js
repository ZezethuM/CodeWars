class SmallestIntegerFinder {
    findSmallestInt(args) {
         var tempArr = [];
      var smallValue = args[0];
      for(var i = 0; i < args.length; i++){
          tempArr.push(args[i]);
        if(tempArr[i] <= smallValue){
          smallValue = tempArr[i];
        }
      }
      return smallValue;
    }
  }
  