function Rythm(m,k){
  this.n = m+k;
  this.m = m;
  this.k = k;
  this.rythm = [];
  this.string = [];
  this.index = 0;
  
  this.bjork = function(){
    var a = this.k;
    var b = this.m;
    
    var p1 = [1];
    var p2 = [0];
    
    while(a+b>2){
      var r = this.remainder(b,a);
      a = b;
      b = r;
      var tmp = p1;
      p1 = p1.concat(p2);
      if(a>b){
        p2 = tmp;
      }
      
      console.log(b + " = " + a + " r");
    }
    
  };
  
  this.euclid = function(m,k){
    if(k===0){
      return m;
    }
    else{
      return this.euclid(k,m%k);
    }
  };
  
  this.remainder = function(m,k){
    return k-(m%k);
  };
    
  this.music = function(){
    var str = "";
    
    for(var i=0;i<this.rythm.length;i++){
        if(this.rythm[i]==0){
          str+=".";
        }
        else{
          str+="x";
        }
    }
    
    return str;
  };
    
  this.polygon = function(){
    var verts = [];
    var theta = Math.PI/2;
    for(var i=0;i<this.n;i++){
      verts.push([Math.sin(theta),Math.cos(theta)]);
      theta -= (2*Math.PI)/this.n;
    }
    
    return verts;
  };
  
  this.euclidean_string = function(){
    var c = 1;
    var arr = [];
    for(var i=1;i<this.rythm.length;i++){
      if(this.rythm[i]===0){
        c++;
      }
      else{
        this.rythm.push(c);
        c = 1;
      }
    }
    
    //Check if string exists
    var sum = 0;
    for(var i=0;i<arr.length;i++){
      sum += arr[i];
    }
    
    if(this.euclidean(sum,arr.length)==1){
      return;
    }
    this.string = arr;
    return arr;
  };
  
  this.rho = function(x){
      this.index += x;
  };
  
  this.tau = function(){
    this.rythm[0] -= 1;
    this.rythm[this.n-1] += 1;
  };
  
  this.sum = function(){
    var sum = 0;
    for(var i=0;i<this.string.length;i++){
      sum += this.string[i];
    }
  };
  
  this.isNecklace = function(rythm){
    if(this.rythm.length!=rythm.length){
      return false;
    }
    var concat = rythm.concat(rythm);
    
    return this.rythm.every(function(val){return concat.indexOf(val) >= 0;});
  };
}