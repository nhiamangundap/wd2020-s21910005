//Array

let nilai=[90, 80, 75, 100, 85];

for(let i=0; i<nilai.length; i++ ){
    console.log("nilai =", nilai[1] + 5);
} //menampilkan array dan modifikasi
console.log(nilai);

nilai[2] = 105; 
console.log(nilai[nilai.length-1]); //menampilkan indeks terakhir

let john = ["John", "Doe", 33, true];
console.log(john);

//toString
console.log(john.toString());

//join
console.log(john.join(" - "));

//pop
john.pop();
console.log(john.join(" - "));

//push
john.push(true);
john.push("Hello");
console.log(john.join(" - "));

//shift
john.shift();
console.log(john.join(" - "));

//unshift
john.unshift("john");
john.unshift("prof");
console.log(john.join(" - "));

//exercise: latihan dengan melanjutkan yang dari docs

//array splice
let buah = ["Pisang", "Jeruk", "Apel", "Mangga"];

buah.splice(2, 0, "Lemon", "Kiwi");

console.log(buah);

//concat method

let minuman = ["susu", "air", "jus"];
let kue = ["tar", "cake", "donat"];
let permen = ["kopiko", "relaxa", "kiss"];

let makanan = minuman.concat(kue, permen);

console.log(makanan);

//slice method

let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
let cemilanGurih = cemilan.slice(0, 3);
let cemilanManis = cemilan.slice(3);
console.log(cemilanGurih);
console.log(cemilanManis);

//sort method
// Contoh array dengan tipe data string
let pakaian = ["topi", "tas", "celana", "baju"];

pakaian.sort();

console.log(pakaian); 

// pengurutan dari terkecil - terbesar dan terbesar - terkecil
let bilangan = [30, 1, 2, 3.5, 10, 100];


let urutDariTerkecil = function(a, b) {
  return a - b;
};

let urutDariTerbesar = function(a, b) {
  return b - a;
};

console.log(bilangan.sort(urutDariTerkecil)); 
console.log(bilangan.sort(urutDariTerbesar)); 

//reverse method
let dosen = ["sir Andi", "Mem Laoh", "sir Sahulata", "Sir Juan"];
dosen.reverse();
console.log(dosen); 

// mengurutkan nilai element pada array dari yang terbesar hingga yang terkecil

let matkul = ["WD", "Idb", "Compro", "Aljabar"];
matkul.sort().reverse();
console.log(matkul); 