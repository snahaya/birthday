document.getElementById('balloon').addEventListener('click', function() {
    const balloon = document.getElementById('balloon');
    balloon.style.display = 'none';

    const message = document.getElementById('message');
    message.style.display = 'block';

    message.style.animation = 'fadeIn 2s ease-in-out';
});

const balloon = document.getElementById('balloon');
let dx = 2, dy = 2;

function moveBalloon() {
    const rect = balloon.getBoundingClientRect();
    const maxWidth = window.innerWidth - rect.width;
    const maxHeight = window.innerHeight - rect.height;

    let newLeft = rect.left + dx;
    let newTop = rect.top + dy;

    if (newLeft <= 0 || newLeft >= maxWidth) dx *= -1;
    if (newTop <= 0 || newTop >= maxHeight) dy *= -1;

    balloon.style.left = newLeft + 'px';
    balloon.style.top = newTop + 'px';

    requestAnimationFrame(moveBalloon);
}

balloon.style.position = 'absolute';
balloon.style.left = '0px';
balloon.style.top = '0px';

moveBalloon();
