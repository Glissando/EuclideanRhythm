function Rythm(m,k){
  if(Array.isArray(m)){
    this.parseBinary(m);
  }

  this.n = m+k;
  this.m = m;
  this.k = k;
  this.rythm = [];
  this.string = [];
  this.index = 0;
  this.euclideanString = false;

  this.bjork();
  this.euclidean_string();
}

Rythm.prototype = {
  bjork: function(){
    var pattern = [];
    var counts = [];
    var remainders = [];
    var divisor = this.n-this.k;
    remainders.push(this.k);
    var level = 0;

    while(true){
      counts.push(Math.floor(divisor/remainders[level]));
      remainders.push(divisor%remainders[level]);
      divisor = remainders[level];
      level++;
      if(remainders[level]<=1)
        break;
    }

    counts.push(divisor);
    this.build(level,counts,pattern);
    var i = pattern.indexOf(1);
    pattern = pattern.slice(i).concat(pattern.slice(0,i));
    this.rythm = pattern;
    return pattern;
  },

  build: function(level, counts, pattern, remainders){
    if(level==-1){
      pattern.push(0);
    }
    else if(level==-2){
      pattern.push(1);
    }
    else{
      for(var i=0;i<counts[level];i++){
        this.build(level-1,counts,pattern,remainders);
      }
      if(remainders[level]!=0){
        this.build(level-2,counts,pattern,remainders);
      }
    }
  },
  // m > k
  euclid: function(m,k){
    if(k===0){
      return m;
    }
    else{
      return this.euclid(k,m%k);
    }
  },

  euclidSingle: function(m,k){
    if(k===0){
      return [m,0];
    }
    else{
      return [k,m%k];
    }
  },

  remainder: function(m,k){
    return k-(m%k);
  },

  //Returns the rythm in musicology syntax e.g.
  //[10010010] = [x..x..x.]
  music: function(){
    var str = "[";

    for(var i=0;i<this.rythm.length;i++){
        if(this.rythm[i]==0){
          str+=".";
        }
        else{
          str+="x";
        }
    }

    return str+"]";
  },

  //Returns the coordinates for the rythms polygon representation as described in chapter 3
  polygon: function(){
    var verts = [];
    var theta = Math.PI/2;
    for(var i=0;i<this.n;i++){
      verts.push([Math.sin(theta),Math.cos(theta)]);
      theta -= (2*Math.PI)/this.n;
    }

    return verts;
  },

  //Creates the euclidean string form of the rythm e.g.
  //[10010010] = (3,3,2)
  euclidean_string: function(){
    var c = 1;
    var arr = [];
    for(var i=1;i<this.rythm.length;i++){
      if(this.rythm[i]===0){
        c++;
      }
      else{
        arr.push(c);
        c = 1;
      }
      if(i+1==this.rythm.length){
        arr.push(c);
      }
    }

    //Check if string exists
    var sum = 0;
    for(var i=0;i<arr.length;i++){
      sum += arr[i];
    }

    if(this.euclid(sum,arr.length)==1){
      this.euclideanString = false;
    }
    else{
      this.euclideanString = true;
    }

    this.string = arr;
    return arr;
  },

  //Rotates the string by x, this is described in Chapter 5 of the paper
  rho: function(x){
      this.index = (this.index+x)%this.rythm.length;
  },

  //Increments p_0 by 1 and decrements p_n-1 by 1, this is described in Chapter 5 of the paper
  tau: function(){
    this.rythm[0] -= 1;
    this.rythm[this.n-1] += 1;
  },

  sum: function(){
    var sum = 0;
    for(var i=0;i<this.string.length;i++){
      sum += this.string[i];
    }
  },

  //Returns the string representation of the Euclidean String
  interval: function(){
      var str = "(";
      for(var i=0;i<this.string.length;i++){
        str += this.string[i];
      }

      return str+")";
  },

  text: function(){
    var str = "[";
    for(var i=0;i<this.rythm.length;i++){
      str += this.rythm[i];
    }

    return str+"]";
  },

  //Checks if two rythms belong to the same, which means there acyclic permutations
  //e.g. [100110] = [101001]
  isNecklace: function(rythm){
    if(this.rythm.length!=rythm.length){
      return false;
    }
    var concat = rythm.concat(rythm);

    return this.rythm.every(function(val){return concat.indexOf(val) >= 0;});
  },
  //iterates over a binary sequence and sets m and k equal to the number of 0s and 1s
  parseBinary: function(arr){
    var m = 0;
    var k = 0;

    for(var i=0;i<arr.length;i++){
      if(arr[i]==1){
        k++;
      }
      else{
        m++;
      }
    }
    this.m = m;
    this.k = k;
  }
};
