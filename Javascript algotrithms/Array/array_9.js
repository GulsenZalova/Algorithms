let sentence='The Quick Brown Fox';
let Upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let Lower='abcdefghijklmnopqrstuvwxyz';
let arr=[]


for(let i=0; i<sentence.length; i++){
    if(Upper.includes(sentence[i])){
        arr.push(sentence[i].toLowerCase())
    }
    else if(Lower.includes(sentence[i])){
        arr.push(sentence[i].toUpperCase())
    }
    else{
        arr.push(sentence[i])
    }
} 
console.log(arr.join(''))





