let str = "hghyyydddddddd".split("");

let rs = str
// .sort((a, b) => a.localeCompare(b));
let max = 0;
let maxChar = "";
let st = "";
let ob = {};
for (i = 0; i < rs.length; i++) {
  if (!ob[rs[i]]) {
    ob[rs[i]] = 0;
  }

  ob[rs[i]]++;
}

for (let key in ob) {
  if (ob[key] > max) {
    max = ob[key];
    maxChar = key;
  }
}
console.log(maxChar.repeat(max));
