function sumTriangularNumbers(n) {
        var total = 0;
        var array = [];
    
    for(var i = 1; i <= n; i++){
      array.push(0.5 * i * (i + 1));
    }
        for(var k = 0; k < array.length; k++){
            total += array[k];
        }
    return total;
}
  sumTriangularNumbers(6);