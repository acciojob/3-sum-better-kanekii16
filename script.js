function threeSum(arr, target) {
// write your code here

	   arr.sort();

     

       let closestSum = arr[0]+arr[1]+arr[2];

       for(let i = 0 ; i < arr.length - 2 ; i++){
            let j = i+1;
            let k = arr.length-1;
        while(j < k){
            let sum = arr[i] + arr[j] + arr[k];

        if(sum == target){
            return target;
        }
        if(Math.abs(target-sum) < Math.abs(target-closestSum)){
            closestSum = sum;
        }

        if(sum < target){
            j++;
        }else{
            k--;
        }

        }
       }

       return closestSum;
  
}

module.exports = threeSum;
