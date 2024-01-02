function calculateDuplicates(str){
    let count = {};
    for (let i=0; i<str.length; i++) {
        let s = str[i];
      if (s in count) {
        count[s] = count[s] + 1
      } else {
        count[s] = 1
      }
      
    }
     
    return count
  }
  
  // console.log(calculateDuplicates('madhan'));

let string = 'ancnvnhjrenhrejnjjermklnjklp';
let letters =  new Map();
console.log(letters);
for (let i=0; i<string.length; i++) {
    let letter = string[i];
//      console.log(letter)
  if (!letters.has(letter)) {
      letters.set(letter,1)
  } else {
    console.log(letter,",",letters.get(letter),"<-letter")
      letters.set(letter,letters.get(letter)+1)
  }
}

console.log(letters)
   
  function removeDuplicates(str) {
   let removeDuplicate = ''; 
    for (let i = 0; i<str.length; i++) {
       if(str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
          removeDuplicate += str[i]
       }
    }
    return removeDuplicate
  }
  // console.log(removeDuplicates('madhan'))
  
  function Armstrong(num) {
     let factorialSum = 0;
     let temp = num;
     while (temp > 0) {
       let r = temp % 10;
       if(num.toString().length === 4) {
         factorialSum += r*r*r*r
       } else {
         factorialSum += r*r*r
         
       }
       temp = parseInt(temp / 10)
     }
    if (factorialSum === num) {
      console.log("Armstrong")
    } else {
      console.log("not ")
    }
  }
  // Armstrong(153)
  
  
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          details: {
            name: "Revanth",
            age: 26,
            school: "Geethanjali"
          }
        }
      }
    }
  };
  
  function Recursion(obj) {
   for (let key in obj) {
  //    console.log(key,"key")
  //    console.log(obj[key],"<-key")
  //    console.log(typeof(obj[key]),"<- typeof")
     if (typeof(obj[key]) === "object") {
       Recursion(obj[key])
     } else {
       console.log( key + " " + obj[key])
     }
     
   }
  }
   
  // Recursion(list)

function countValues(str) {
//   console.log(str)
 
  let combineStr = '';
  let overallLen = str.length;
  let sliceVal = 0
   for (let i = 0; i< str.length; i++) {
     let index = str.length - overallLen;
   
     combineStr += str[index];
     
      sliceVal = str.slice(index = index + 1)
    console.log(combineStr)
   }
  
//    console.log(sliceVal)
   if (sliceVal.length != 0) {
     countValues(sliceVal)
   }
 
}

countValues('abcdefgh');
  
  
  const array = [
    ["key1", "value1"],
   
    
    ["key5", "value5"]
  ];
  
  function arrayToNestedObj(arr){
    console.log(arr,"arr")
    
    
  }
  arrayToNestedObj(array)
  
  
  
  
  
  
