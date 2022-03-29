// Nömrəni müəyyən edilmiş onluq yerlərə qədər formatlaşdırmaq üçün JavaScript funksiyasını yazın

// let a=2.100212;
// let b=a.toFixed(3);
// console.log(b);

function decimals(n,d){
    if((typeof n !=="number")||(typeof d !=="number"))
        return true;
            n=parseFloat(n)||0;
          return n.toFixed(d);
}
console.log(decimals(2.100212,2))
console.log(decimals(2.100212,3))
console.log(decimals(2.100,2))