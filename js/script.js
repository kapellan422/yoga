window.addEventListener('DOMContentLoaded', function(){

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b){
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i); 
                    break; 
                }
            }
        }
    });

    // Timer

    let deadline = '2023-12-01';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime){
        let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            if(t.hours <= 9) {
                hours.textContent = '0' + t.hours;
            } 
            else {
                hours.textContent = t.hours;
            }

            if(t.minutes <= 9) {
                minutes.textContent = '0' + t.minutes;
            } 
            else {
                minutes.textContent = t.minutes;
            }

            if(t.seconds <= 9) {
                seconds.textContent = '0' + t.seconds;
            } 
            else {
                seconds.textContent = t.seconds;
            }

            if(t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = ('00');
                minutes.textContent = ('00');
                seconds.textContent = ('00');
            }
        }
    }

    setClock('timer', deadline);

    //Modal

    let more = document.querySelector('.more'),
        overlay = document. querySelector('.overlay'),
        close = this.document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let tabsMore = document.querySelectorAll('.description-btn');

    for (let i = 0; i < tabsMore.length; i++) {
        tabsMore[i].addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    }

    
    //Class Options

    class Options {
        constructor(height = "50", width = "100", bg = "red", fontSize = "12", textAlign = "center") {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }

        createDiv(text = "default") {
            let elem = document.createElement('div');
            document.body.appendChild(elem);
            this.div.textContent = text;
            let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
            elem.style.cssText = param;
        }
    }

    const item = new Options(50, 100, red, 12, center);
    item.createDiv();
});