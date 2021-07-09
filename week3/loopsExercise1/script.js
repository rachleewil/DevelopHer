for (let a = 1; a < 11; a++) {
    console.log(a)
}

for (let b = 10; b > 0; b--) {
    console.log(b)
}

let c = 1;
while (c < 11) {
   console.log(c);
    c++;
}

let d = 10;
while (d > 0) {
    console.log(d);
    d--;
}

let e = 1;
do {
    console.log(e);
    e++;
} while (e < 11);

let f = 10;
do {
    console.log(f);
    f--;
} while (f > 0);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of numbers) {
    console.log(number);
}
