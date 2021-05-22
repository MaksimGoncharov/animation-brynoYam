


let start = document.querySelector('#goFly');
start.addEventListener('click',  () =>{
    let flyDiv = document.querySelector('.fly')
    console.log(1234);
    flyDiv.classList.add('iii');
});


let stop = document.querySelector('#stopFly');
stop.addEventListener('click', ()=> {
    let i = document.querySelector('.fly')
    i.classList.remove('iii');
});
