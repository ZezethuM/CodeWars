function past(h, m, s){
    
    var time = h * 3600000 + m * 60000 + s * 1000;

    return time;
  }
  past(1,0,1);