let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  let h = day.getHours() * 30;
  let m = day.getMinutes() * 6;
  let s = day.getSeconds() * 6;
  
  hr.style.transform = `rotateZ(${h + (m / 12)}deg)`;
  mn.style.transform = `rotateZ(${m}deg)`;
  sc.style.transform = `rotateZ(${s}deg)`;
})