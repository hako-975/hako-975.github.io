let hubungan = false;
const goal = 100;

let count = 0;
let i = 0;

while (i < goal && i > -goal) {
    i -= Math.floor(Math.random() * 11);
    i += Math.floor(Math.random() * 11);
    count++;
}
if (i <= -goal) {
    hubungan = false;
}
if (i >= goal) {
    hubungan = true;
}

console.log("Jumlah percobaan: " + count); 

if (hubungan == true) {
    console.log("hubungan: jadian");
}

if (hubungan == false) {
    console.log("hubungan: kandas");
}

