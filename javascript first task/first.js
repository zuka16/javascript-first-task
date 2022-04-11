var numJewelsInStones = function(jewels, stones) {
    var result = "";
   for(var i = 0; i < stones.length; i++){
       for(var z = 0; z < jewels.length; z++){
         if(stones[i] === jewels[z]) {
           result += stones[i];
           break;
         }
       }
   }
   if(result.length > 0) {
     return result.length;
   }else{
     return 0;
   }
  };
  console.log(numJewelsInStones("areqwdf","db3rRacdwdFfaf"));