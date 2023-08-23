gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a")
const activeNav = document.querySelector('.active-nav')
const cards = document.querySelectorAll('.card')
links.forEach(link => {
    link.addEventListener('click', (e)=>{
        gsap.to(links, {color: '#252525'})

       if(document.activeElement === e.target){
        gsap.to(link, {color: '#385ae0'})
    } 

    const state = Flip.getState(activeNav)
    link.appendChild(activeNav)
    Flip.from(state ,{
        duration: 1.5,
        absolute: true,
        ease: 'elastic.out(1,0.5)'
    })
    }); 
});


cards.forEach ((card, index)=>{
    card.addEventListener('click', (e)=>{
        const state = Flip.getState(cards)
        const isCardActive = card.classList.contains('active');
        cards.forEach((othercard, otherIdx)=>{
            othercard.classList.remove('active')
            othercard.classList.remove('is-inactive')
            if(!isCardActive && index !== otherIdx){
            othercard.classList.add('is-inactive')
            }
        })
        if(!isCardActive) {
            card.classList.add('active')
        }

        Flip.from(state,{
            duration: 1,
            ease: 'expo.out',
            absolute: true
        })
        
    })
});