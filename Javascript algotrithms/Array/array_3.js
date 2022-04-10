// Massivin ilk elementini əldə etmək üçün JavaScript funksiyasını yazın.
function showSlice(arr,n){
    if(arr==null){
        return void 0
    }else if(n==null){
        return arr[0]
    }else if(n<0){
        return []   
    }
    return arr.slice(0,n)
}
console.log(showSlice([],3))