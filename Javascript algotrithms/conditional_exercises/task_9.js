// 3 və 5-in qatlarını 1000-dən aşağı toplamaq üçün JavaScript proqramı yazın.

 let sum=0
for(let i=0;i<1000; i++){
    if(i%3==0 || i%5==0){
        sum+=i
    }
}
console.log(sum)