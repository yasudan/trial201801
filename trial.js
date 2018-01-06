'use strict';
const anime = require('animejs');
const ball = document.getElementById('ball-area');
ball.addEventListener('click', function() {
    anime({
        targets: ball,
        translateX: 250
    })
});
console.log("テストだよ");