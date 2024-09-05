//6-vazifa
let name1 = prompt("Foydalanuvchi ismini kiriting");
let password = +prompt("Foydalanuvchi parolini kiriting");

if (name1 ==='admin'|| password===12345) {
     alert("Xush kelibsiz, Admin");
}else{
     alert("Foydalanuvchi yoki parol hato");
}
//7-vazifa
let year = +prompt("Yilni kiriting:");

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`${year} - kabisa yili`);
} else {
  console.log(`${year} - kabisa yili emas`);
}
//8-vazifa
let num1 = +prompt("Birinchi sonni kiriting:");
let num2 = +prompt("Ikkinchi sonni kiriting:");

if (num1 > 0 && num2 > 0) {
  alert("Ikkalasi ham musbat");
} else {
  alert("Manfiy sonlar bor");
}
//9-vazifa
let num = +prompt("Son kiriting:");

if (num % 2 === 0) {
  alert("Juft son");
} else {
  alert("Toq son");
}
//10-vazifa

let number = +prompt("Musbat son kiriting:");

if (number % 3 === 0 && number % 7 === 0) {
  alert("3 ga ham, 7 ga ham qoldiqsiz bo'linadi");
} else if (number % 3 === 0) {
  alert("3 ga qoldiqsiz bo'linadi");
} else if (number % 7 === 0) {
  alert("7 ga qoldiqsiz bo'linadi");
} else {
  alert("Hech biriga bo'linmaydi");
}
//11-vazifa
let jamshidScore = 63;
let shuxratScore = 71;
let anvarScore = 92;

function getGrade(score) {
  if (score >= 88 && score <= 100) {
    return 5;
  } else if (score >= 70 && score < 88) {
    return 4;
  } else if (score >= 55 && score < 70) {
    return 3;
  } else {
    return 2;
  }
}

console.log("Jamshidning bahosi: " + getGrade(jamshidScore));
console.log("Shuxratning bahosi: " + getGrade(shuxratScore));
console.log("Anvarning bahosi: " + getGrade(anvarScore));


