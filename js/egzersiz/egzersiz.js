// Kosullarlar Calismak Bolum Sonu Egzersizi

/*
1- prompt ile aldigin bilgiye gore asagidaki yapiyi kullanarak notun bilgisini #info'ya yazdir
AA  90-100
BA  85-89
BB  80-84
CB  75-79
CC  70-74
DC  65-69
DD  60-64
FD  50-59
FF  0-49

2- kullanicinin girdigi verinin istedigimiz aralikta olup olmadigini kontrol et
3- ff bilgisinde uzgun surat ikonu cikart, digerlerinde ise gulucuk olsun :)
4- ff class bilgisi text-danger, digerlerinin ise text-primary olsun
*/

/*
const SMILE=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`

const FROWN =`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`

let grade = prompt("Puan gir")
let textInfo;

if (grade>=0 && grade<=100) {
    if (grade >=90) {
        textInfo = "AA"
    } else if (grade >= 85) {
        textInfo = "BA"
    }else if (grade >= 80) {
        textInfo = "BB"
    }else if (grade >= 75) {
        textInfo = "CB"
    }else if (grade >= 70) {
        textInfo = "CC"
    }else if (grade >= 65) {
        textInfo = "DC"
    }else if (grade >= 60) {
        textInfo = "DD"
    }else if (grade >= 50) {
        textInfo = "FD"
    }else if (grade < 50) {
        textInfo = "FF"
    }
} else {
    textInfo = "Bilgiler Doğru Değil"
}
let info = document.querySelector("#info");
textInfo == "FF" ? info.classList.add("text-danger") : info.classList.add("text-primary");
info.innerHTML = `${textInfo == "FF" ? textInfo = FROWN + textInfo : textInfo=SMILE+textInfo} => ${grade}`
*/


/*
// ROMAN NUMERAL REDUCTION
function RomanNumeralReduction(str) { 

  // code goes here  
  let m = new Map([
    ["M",1000],
    ["CM",900],
    ["D",500],
    ["CD",400],
    ["C",100],
    ["XC",90],
    ["L",50],
    ["XL",40],
    ["X",10],
    ["IX",9],
    ["V",5],
    ["IV",4],
    ["I",1],
    [1,"I"],
    [4,"IV"],
    [5,"V"],
    [9,"IX"],
    [10,"X"],
    [40,"XL"],
    [50,"L"],
    [90,"XC"],
    [100,"C"],
    [400,"CD"],
    [500,"D"],
    [900,"CM"],
    [1000,"M"]
    ]);

  let num = 0;
  [...str].forEach(c => num+=m.get(c));

  let res = "";
  while (num>0) {
    let n = [...m.values()].find(e => e <= num)
    res += m.get(n)
    num -= n
  }

  return res; 

}
   
// keep this function call here 
console.log(RomanNumeralReduction("IIIVVXXXCDD"));
*/

/*
// iç içe elementler çağrıldı  
const selectBox = document.querySelector('#selectColor');
const button = document.querySelector('#button');
const form = document.querySelector('.inputText');  
const cerceve = document.querySelector('.container');
selectBox.addEventListener('click' ,function(){
    console.log("selectBox");    
    })
form.addEventListener('click',function(){
    console.log("form");
    })
cerceve.addEventListener('click',function(){
    console.log('cerceve');
    })   
*/

/*
let dizi = [2,5,8,11,15,17];

let x = dizi.filter(n => n>10);
let bes_x = x.map(sayi => sayi*5);

console.log(bes_x)
*/

/*
let dizi = [3,6,9,14,16];
console.log(dizi.some(sayi => sayi>5) ? "Beşten büyük bir eleman mevcut" : "%'ten büyük eleman mevcut değil.")
*/

/*
let dizi = [2,3,4];
console.log(dizi.reduce((a,b)=>a*b,1))
*/

/*
var person = {
	name: 'Rumeysa',
	surname: 'Turgut',
	age: 23,
	introduce: () => {
		return `My name is ${person.name} ${person.surname}, I'm ${person.age} yo.`;
	},
};

var person2 = {
	name: 'Rumeyasdasa',
	surname: 'Tuasdasdrgut',
	age: 23,
	introduce: () => {
		return `My name is ${person2.name} ${person2.surname}, I'm ${person2.age} yo.`;
	},
};

var person3 = {
	name: 'asdasdRumeysa',
	surname: 'asdasdTurgut',
	age: 23,
	introduce: function () {
		return `My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`;
	},
};

console.log(person.introduce())
console.log(person2.introduce())
console.log(person3.introduce())
*/

/*
var birey = {
	isim: 'Ali',
	soyisim: 'Veli',
	dogumYili: 1989,
	merhabaDe: (age) => `Merhaba, ben ${birey.isim} ${birey.soyisim}, ${age} yaşındayım`,
};
birey.yasHesapla = function () {
	return 2021 - this.dogumYili;
};
console.log(birey.merhabaDe(birey.yasHesapla()));
*/
