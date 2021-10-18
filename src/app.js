console.log("Merhaba Kodlama.io");


let dolarBugun=9.30;
let dolarDun=9.20;

{
    let dolarDun=9.10;
    console.log(dolarDun)
}

console.log(dolarDun)

const euroDun=11.2;

//euroDun=11;
console.log(euroDun);

//Array

let konutKredileri=["Emlak Kredisi","Taşıt Kredisi","İhtiyaç Kredisi"];

console.log("<ul>");
for(let i=0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"<li>")
}
console.log("</ul>");
