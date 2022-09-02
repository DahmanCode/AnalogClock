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
  
  // Digital clock

  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');
  let ampm = document.getElementById('ampm');

  let H = new Date().getHours();
  let M = new Date().getMinutes();
  let S = new Date().getSeconds();

  let am = H >= 12 ? "PM" : "AM";

  // convert 24hr clock to 12hr clock

  if (H > 12) {
    H = H - 12;
  }

  // add zero before single digit number

  H = (H < 10) ? "0" + H : H
  M = (M < 10) ? "0" + M : M
  S = (S < 10) ? "0" + S : S

  hours.innerHTML = H;
  minutes.innerHTML = M;
  seconds.innerHTML = S;
  ampm.innerHTML = am;
})



