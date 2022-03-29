// Array elementlerinden en böyüyyünün tapılması
let sira=[15,-100,125, 300,45,0,35];
let maxi;
let maxj;
    for(let i=0; i<sira.length; i++){
      for(let j=i+1; j<sira.length-1; j++){
         if (sira[i]>sira[j]){
            console.log(`maksimum ${sira[i]}`)
            maxi=sira[i];
            break
         }else{
            console.log(`maksimum ${sira[j]}`)
            maxj=sira[j] 
            break
         }
      }
  }
if(maxi>maxj){
    alert(`en böyük eded ${maxi}`)
}else{
    alert(`en böyük eded ${maxj}`)
}


