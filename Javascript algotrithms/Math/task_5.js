// İki ədədin ƏKOB-nun tapılması
let a;
let b;

function ekob(a,b){
    if(a>b){
        for(let i=b;i<=a*b; i++){
            if((i%a==0)&&(i%b==0)){
                return i
            }
        }
    }else{
        for(let i=a; i<=a*b; i++){
            if((i%a==0)&&(i%b==0)){
                return i
            }
        }
    }
}
ekob(35,48)
console.log(ekob(35,48))




