
const title = document.querySelector('.title');

title.innerHTML = title.innerText.split('').map((letter, index) => {
    return `<span class="letter" style="--delay: ${index * 250}ms">${letter}</span>`

  
}).join(' ');


const letters = document.querySelectorAll('.title .letter');

letters.forEach(l => {
    l.addEventListener('animationend', () => {
        l.classList.add('active');

    })
})

const titleTwo = document.querySelector('.title-two');

titleTwo.innerHTML = titleTwo.innerText.split('').map((le, ind) => {
    return `<span class="lett" style="--delay: ${ind * 250}ms">${le}</span>`

  
}).join(' ');


const lett = document.querySelectorAll('.title-two .lett');

lett.forEach(l => {
    l.addEventListener('animationend', () => {
        l.classList.add('actived');

    })
})


// let button = document.querySelector('.down a');

// button.addEventListener('click', () => {
//     const span = document.querySelector(' a > span');
//     button.style.paddingRight = '15px';
//    span.style.visibility = 'visible';
  
//    setTimeout(() => {
//     span.style.visibility = "hidden";
//     button.style.transition = '1s easy-in-out';
//     button.style.paddingRight = '0em';
//    }, 3000)

   
// })

