
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('element_show')
        } else {
            entry.target.classList.remove('element_show')
        }
        add_delay()
        const shownElements = document.querySelectorAll('.element_show')
        shownElements.forEach((el) => animate_sElements(el));
    })
});

const hiddenElements = document.querySelectorAll('.element-hidden');
hiddenElements.forEach((el) => observer.observe(el));

function animate_sElements(el){
    if (el.classList.contains('water_effect') && el.style.animation == ''){
        
        el.style.animation = 'water_effect 2s infinite ease-in-out alternate';
    }
    if (el.classList.contains('right_moviment') && el.style.animation == ''){
        
        el.style.animation = 'right_moviment 30s infinite ease-in-out';
    }
    if (el.classList.contains('left_moviment') && el.style.animation == ''){
        el.style.animation = 'left_moviment 40s infinite ease-in-out';
    }
    if (el.classList.contains('bubble') && el.style.animation == ''){
        el.style.animation = 'bubbles 10s infinite ease-in-out';
    }
}

function add_delay(){
    var right_mo = document.getElementsByClassName('right_moviment');
    for (var c = 0; c<right_mo.length; c++){
        if (c==0){
            right_mo[c].style.animationDelay = '3s';
        } else if(c==1){
            right_mo[c].style.animationDelay = '4s';
        }else if(c==2){
            right_mo[c].style.animationDelay = '1s';
        }else if(c==3){
            right_mo[c].style.animationDelay = '4s';
        }else if(c==4){
            right_mo[c].style.animationDelay = '7s';
        }
        
    }
    var left_mo = document.getElementsByClassName('left_moviment');
    for (var c = 0; c<left_mo.length; c++){
        if (c==0){
            left_mo[c].style.animationDelay = '3s';
        } else if(c==1){
            left_mo[c].style.animationDelay = '10s';
        }else if(c==2){
            left_mo[c].style.animationDelay = '8s';
        }else if(c==3){
            left_mo[c].style.animationDelay = '4s';
        }else if(c==4){
            left_mo[c].style.animationDelay = '16s';
        }
        
    }
    var bubble_mo = document.getElementsByClassName('bubble');
    for (var c = 0; c<bubble_mo.length; c++){
        if (c==0){
            bubble_mo[c].style.animationDelay = '0s';
        } else if(c==1){
            bubble_mo[c].style.animationDelay = '2s';
        }else if(c==2){
            bubble_mo[c].style.animationDelay = '1s';
        }else if(c==3){
            bubble_mo[c].style.animationDelay = '3s';
        }else if(c==4){
            bubble_mo[c].style.animationDelay = '4s';
        } else if(c==5){
            bubble_mo[c].style.animationDelay = '2s';
        } 
        
    }
}

