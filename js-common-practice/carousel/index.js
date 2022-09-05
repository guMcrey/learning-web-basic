window.onload = function () {
    let list = document.querySelector(".image-list");
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");
    function animate(offset) {
        // 获取的 style.left，是相对左边获取距离，所以第一张图后 style.left 都为负值
        const newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + "px";
        list.style.transition = '300ms ease';
        /*从最后一张偏移值到第一张*/
        if (newLeft <= -1600) {
            list.style.left = 0 + 'px';
        }
        /*从第一张偏移值到最后第一张*/
        if (newLeft > 0) {
            list.style.left = -1200 + 'px';
        }
    }
    prev.onclick = function () {
        animate(400);
    }
    next.onclick = function () {
        animate(-400);
    }


    // 定时自动轮播
    let timer;
    function autoplay() {
        timer = setInterval(function () {
            next.onclick()
        }, 2000);
    }
    autoplay();


    // 鼠标悬浮停止, 清楚定时器
    const container = document.querySelector('.container');
    function stopplay() {
        clearInterval(timer);
    }
    container.onmouseover = stopplay;
    container.onmouseout = autoplay;


    // 改变分页样式
    const buttons = document.querySelector('.pagination').getElementsByTagName('span');
    let index = 1;
    function showButton() {
        // 清除之前的样式
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
            }
        }
        buttons[index - 1].className = 'on';
    }
    prev.onclick = function () {
        index -= 1;
        if (index < 1) {
            index = 4;
        }
        showButton();
        animate(400);
    }
    next.onclick = function () {
        index += 1;
        if (index > 4) {
            index = 1;
        }
        showButton();
        animate(-400);
    }

    // 点击 arrow
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            const clickIndex = parseInt(this.getAttribute('index'));
            const offset = 400 * (index - clickIndex);
            animate(offset);
            index = clickIndex;
            showButton();
        }
    }
}