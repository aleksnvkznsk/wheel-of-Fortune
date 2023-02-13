let wheel = document.querySelector('.wheel');
let btn = document.getElementById('button');
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function () {
    wheel.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 1000);
}