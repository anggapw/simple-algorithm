const gambar = ["Sekop", "Wajik", "Keriting", "Hati"];
const urutan = [
  "As",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

let meja = [];

for (let a = 0; a < gambar.length; a++) {
    for (let x = 0; x < urutan.length; x++) {
        let kartu = { Urutan: urutan[x], Gambar: gambar[a] };
        meja.push(kartu);
    }
}

for (let a = meja.length - 1; a > 0; a--) {
    let b = Math.floor(Math.random() * a);
    let temp = meja[a];
    meja[a] = meja[b];
    meja[b] = temp;
}

console.log(meja)

console.log('Anda mendapatkan kartu:');

for (let a = 0; a < 5; a++) {
    console.log(`${meja[a].Urutan} ${meja[a].Gambar}`)
}