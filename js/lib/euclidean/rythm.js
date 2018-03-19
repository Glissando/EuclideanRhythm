function Rythm(m,k){
  this.n = m+k;
  this.m = m;
  this.k = k;
  this.rythm = [];
  this.string = [];
  this.index = 0;

  this.bjork = function(){
    /*var largest = 0;
    var smallest = 0;
    var p1 = [];
    var p2 = [];

    if(this.k>this.m){
      largest = this.k;
      smallest = this.m;
      p1.push(1);
      p2.push(0);
    }
    else{
      largest = this.m;
      smallest  = this.k;
      p1.push(0);
      p2.push(1);
    }

    while(smallest!=0){
      var E = this.euclidSingle(largest,smallest);
      largest = E[0];
      smallest = E[1];

      var tmp = p1;
      p1 = p1.concat(p2);
      if(smallest>largest){
        p2 = tmp;
      }

      console.log(b + " = " + a + " r");
    }*/

    var pattern = [];
    var counts = [];
    var remainders = [];
    var divisor = this.n-this.k;
    remainders.push(this.k);
    var level = 0;

    while(true){
      counts.push(Math.floor(divisor/remainders[level]));
      remainders.push(divisor%reminaders[level]);
      divisor = remainders[level];
      level++;
      if(remainders[level]<=1)
        break;
    }

    counts.push(divisor);
    this.build(level);
    var i = pattern.indexOf(1);
    pattern = pattern.slice(i).concat(pattern.slice(0,i));
    return pattern;
  };

  this.build = function(level){
    if(level==-1){
      this.rythm.push(0);
    }
    else if(level==-2){
      this.rythm.push(1);
    }
    else{
      for(var i=0;i<counts[level]){
        this.build(level-1);
      }
      if(remainders[level]!=0){
        this.build(level-2);
      }
    }
  };
  // m > k
  this.euclid = function(m,k){
    if(k===0){
      return m;
    }
    else{
      return this.euclid(k,m%k);
    }
  };

  this.euclidSingle = function(m,k){
    if(k==0){
      return [m,0];
    }
    else{
      return [k,m%k];
    }
  }

  this.remainder = function(m,k){
    return k-(m%k);
  };

  //Returns the rythm in musicology syntax e.g.
  //[10010010] = [x..x..x.]
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

  //Returns the coordinates for the rythms polygon representation as described in chapter 3
  this.polygon = function(){
    var verts = [];
    var theta = Math.PI/2;
    for(var i=0;i<this.n;i++){
      verts.push([Math.sin(theta),Math.cos(theta)]);
      theta -= (2*Math.PI)/this.n;
    }

    return verts;
  };

  //Creates the euclidean string form of the rythm e.g.
  //[10010010] = (3,3,2)
  this.euclidean_string = function(){
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

  //Rotates the string by x, this is described in Chapter 5 of the paper
  this.rho = function(x){
      this.index += x;
  };

  //Increments p_0 by 1 and decrements p_n-1 by 1, this is described in Chapter 5 of the paper
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

  //Returns the string representation of the Euclidean String
  this.interval = function(){
      var str = "";
      for(var i=0;i<this.string.length;i++){
        str += this.string[i];
      }

      return str;
  };

  this.text = function(){
    var str = "";
    for(var i=0;i<this.string.length;i++){
      str += this.rythm[i];
    }

    return str;
  };

  //Checks if two rythms belong to the same, which means there acyclic permutations
  //e.g. [100110] = [101001]
  this.isNecklace = function(rythm){
    if(this.rythm.length!=rythm.length){
      return false;
    }
    var concat = rythm.concat(rythm);

    return this.rythm.every(function(val){return concat.indexOf(val) >= 0;});
  };
}
