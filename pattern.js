 //sabit n degeri
const n=5;

//yukselen sayi piramidi
console.log("Yükselen Sayı Piramidi:");
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j + ' ';
    
    }
    console.log(row);
}

//azalan sayi piramidi
console.log("Azalan Sayi Piramidi:");
for (let i = n; i >= 1; i--) {
    let row = '';
    for (let j = i; j >= 1; j--) {
        row += j + ' ';
        
    }
    console.log(row);
}


console.log('\n'); 


//1den n'e kadar olan sayilarin toplami
let toplam = 0 ;
for (let i = 1; i<= n; i++) {
    toplam += i ;
}
console.log("1 den n'e kadar olan sayilarin toplami:", toplam);


//1den n'e kadar olan cift sayilarin toplami
let toplamCift = 0;
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0)
        toplamCift += i;
}
console.log("1 den n'e kadar olan cift sayilarin toplami:", toplamCift);


//1den n'e kadar olan tek sayilarin toplami
let toplamTek = 0;
for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0)
        toplamTek += i;
}
console.log("1 den n'e kadar olan tek sayilarin toplami:", toplamTek);



//kare deseni
console.log("Kare Deseni:");
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <=n; j++) {
        row += '* ';
    }
    console.log(row);
}
