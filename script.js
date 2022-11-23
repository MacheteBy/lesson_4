//touchstart - касание
//touchmove - движение пальца
//touchend - оторвался палец
//touchenter - ведем пальцем на элемен
//touchleave - палец ушел с пределов элемента
//touchcancel - палец вышел за пределы браузера

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('start');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
    });
    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
    //     console.log('end');
    // });
});

//touches - количество пальцев на мониторе
//targetTouches - количество пальцев взаимодействующих с элементом
//changedTouches - список пальцев участвующих в событии