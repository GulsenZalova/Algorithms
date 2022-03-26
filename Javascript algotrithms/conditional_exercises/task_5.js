// 0-dan 15-ə qədər təkrarlanan JavaScript for loop yazın. Hər iterasiya üçün o, cari nömrənin tək və ya cüt olduğunu yoxlayacaq və ekrana mesaj göstərəcək.

for(let i=0; i<=15; i++){
    if(i%2==0){
        alert(`${i} ədədi cüt ədəddir.`)
    }else{
        alert(`${i} ədədi tək ədəddir.`)
    }
}