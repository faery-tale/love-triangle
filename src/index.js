/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var total=0;  
  var countTriangles=0;
     for(var i=0;i<preferences.length;i++){ 
      var firstOnes=preferences[i];
      var secondOnes=preferences[firstOnes-1];
      var thirdOnes=preferences[secondOnes-1];
      if(thirdOnes===i+1){
        countTriangles++;
      }
      if (countTriangles==3){
        total++;
        countTriangles=0;

      }

      }
    
  return total;
};