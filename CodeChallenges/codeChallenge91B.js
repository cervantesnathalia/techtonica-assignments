// Given an unsorted array, and a number k, return the kth largest number in the array. 

// (source: https://leetcode.com/problems/kth-largest-element-in-an-array/description/)

//Find the kth largest element in an unsorted array. 
//Note that it is the kth largest element in the sorted order, 
//not the kth distinct element.
// Ex1: 
// Input: [3, 1, 4], 2 
// Output: 2 
// Ex2: 
// Input: [5, 1, 8, 9, 6, 18, 16, 4], 4 
// Output: 8 

function find_k_largest(int_array, k){
    // Add functionality here! 
    int_array.sort( (a,b) => a-b); //ascending
    console.log(int_array) 
    
    
    return 
  }
find_k_largest([5, 1, 8, 9, 6, 18, 16, 4],4)
 



//   1.  orderkey -sort()ascending 
//   2.  get position of the key - [].length -k

