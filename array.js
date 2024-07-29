// let arr= [1,2,'a',null,[1,2,3]]
// // arr.push(100)
// // arr.pop(100)
// arr.shift()
// console.log(arr.length)
// console.log(arr.length -1)
//  let [lastitem]=arr.slice(arr.length-1,4)
// //  console.log(lastitem[lastitem.length-1]);
//  console.log(lastitem);
// // console.log(arr[arr.length-1])

// for (i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }


// const array = [...Array(100).keys()].map(i=> i+1)
// console.log(array)
const array = Array.from({ length: 100 }, (_,i) => i + 1);
console.log(array);