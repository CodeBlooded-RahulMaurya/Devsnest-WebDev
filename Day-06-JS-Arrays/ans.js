// 1. Write a JavaScript function to check whether an `input` is an array or not
function is_array(test) {
  if (Array.isArray(test)) {
    return true;
  } else {
    return false;
  }
}
console.log(is_array([1, 2, 4, 0]));
console.log(is_array("w3resource"));

//2. Write a JavaScript function to clone an array
function array_Clone(test) {
  let cy = test;
  return cy;
}

console.log(array_Clone([1, 2, [4, 0]]));

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
function  first(test, n){
    if(test==[] ){
        return [];
    }
    else if( n == undefined){
        return test[0];
    }
    let ans = [];
    for (let index = 0; index < n && index<test.length; index++) {
        ans.push(test[index]);
    }
    return ans;
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// 4. Write a simple JavaScript program to join all elements of the following array into a string.
function   concatString(test){
    let myStr1 = '', myStr2 = '';
    for(let i =0; i<test.length;i++){
        myStr1 += test[i];
        myStr2 += test[i];
        if (i!=test.length-1){
            myStr1 +=',';
            myStr2 += '+';
        }
       
    }
    // myStr1 = test.join(',');
    // myStr2 = test.join('+');
    return [myStr1,myStr2];
}
let myColor = ["Red", "Green", "White", "Black"]
let ans = concatString(myColor)
console.log(ans[0])
console.log(ans[1])

//5.  Write a JavaScript program to find the most frequent item of an array
function mostFreq(test){
    let freq = Object();
    for (let el of test){
        if (el in freq){
            freq[el] += 1;
        }
        else{
            freq[el] = 1;
        }

    }
    let mxFreq = -1;
    let mxChr = '';
    // const [key, value] of myMap.entries()
    for(const  [key,value] of Object.entries(freq)){
        if (value > mxFreq){
            mxFreq =  value;
            mxChr = key;
        }
      }
      let ans =  mxChr + ' ( '+  mxFreq + ' times )';
      return ans;
}

let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFreq(arr1))