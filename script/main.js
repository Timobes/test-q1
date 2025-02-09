const project__container = document.getElementsByClassName("project__container");
const exit = document.getElementById('close')

for (let i = 0; i < project__container.length; i++) {
    project__container[i].addEventListener('click', function (event) {
        const img = event.target.closest('.project-img');

        if (img) { 
            if (img.requestFullscreen) {
                img.requestFullscreen();
            } else if (img.mozRequestFullScreen) { 
                img.mozRequestFullScreen();
            } else if (img.webkitRequestFullscreen) { 
                img.webkitRequestFullscreen();
            } else if (img.msRequestFullscreen) { 
                img.msRequestFullscreen();
            }

        } 
    });
}

exit.addEventListener('click', function () {
    if (document.fullscreenElement) {
        document.exitFullscreen();
        exit.style.display = 'none'; // Скрываем кнопку выхода
    }
})