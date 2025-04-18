const main = document.querySelector('.main')
const sections = document.querySelectorAll('.glow-group');
const intro = document.querySelector('.intro');
intro.classList.add('glow')

main.onscroll = ()=>{
    const scroller_height = main.scrollHeight/2;
    const current_height = main.scrollTop;
    const percent = Math.floor( (current_height*100)/scroller_height ) ;

    if( percent < 25){
        removeClass()
        intro.classList.add('glow')
    }

    if( percent > 25 && percent < 75){
        removeClass()
        document.querySelector('.contact').classList.add('glow')
    }

    if( percent > 75){
        removeClass()
        document.querySelector('.projects').classList.add('glow')
    }
   
}

function removeClass(){
    sections.forEach(section => {
        if( section.classList.contains('glow')){
            section.classList.remove('glow')
        }
    })
}
