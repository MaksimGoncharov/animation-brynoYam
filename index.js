// function calc(a,b) {
//    if( b==0) {
//    console.log("должно быть не ноль!")
//    }
//    if ( b != 0) {
//      console.log(a/b)
//    }
//    else{ 
//      console.log("ups")
//    }
// };

//  calc(6,2);
//  calc(10, -5);
//  calc(10,0);
 

//  console.log(Math.ceil(Math.random()*10));
 
// const btnClick = document.querySelector('#btn').addEventListener('click', () => {
//   console.log(123);
// });





// let num = prompt ("Введите число и получишь факториал!");
//  function factorial(a) {
//    for(let i = a-1; i >=1 ; i--){
//      a= a*1;
//    }
// console.log(a);
//  };
//  factorial(num);
     
 
// let age = prompt('youre age');
// let agree;
// if (age >=18) {
//   agree=confirm ('Subscription');
//   if (agree) {
//     console.log('Agree and age are OK');
//   }
//   else { console.log ('Agree is NOT OK')
// }
// }

// let message ='Message';
// function showMessage(name){ 
//   let message =`Hello ${name} !`;
//   console.log(message);
// }
// let me = prompt ('What is you name');
// showMessage(me);
// console.log(message);
//  showMessage(me);

//  function numbers(a,b) {
// return a**b;
//  }
//  let one = prompt("number first");
//  let two = prompt('number two');
//  console.log(numbers(+one,+two));


//  let a = ['a','b','c','a','b','c','a','b','c','g','j']
// a.map ( i => console.log(i*i));


// let g = ['1','000','43','15','7','6','oleg','1','2','7','6','4'];
// for( i=0; i < g.length; i++) {
//   let dabl = g[i];
//   console.log(dabl*dabl);
// };






// let object = {a:1, b:2, imy:'Max', family:'ivanov', gun: 'revolver' , id :'92346'}
// for ( Name in object) {
//   console.log(Name)
// }

// let g = ['1','000','43','15','7','6','oleg','1','2','7','6','4'];
// g.forEach( i => {
// console.log(i*i);
// });
// for (let i in g ) {
//   console.log(g[i]);
// }
// let blocks = document.querySelectorAll(".block")
// console.log(blocks);





// window.onload = function(){
//     let collection = document.querySelectorAll('div');
//     console.log(collection);

//     collection.forEach(function(item){
//         console.log(item);
//     });
// document.querySelector('#first_block').onclick = function(){
//     this.style.color = "red"
//     this.classList.add('colored');
// }

// }

// тоже самое! только на jquery!
    /* это замена window.onload = function (){} нужна для асинхронного действия на странице!*/ 

      
// 16ю05ю2021
    //     let frontend = {
    //         changeColor:  function (color){
    //             let collection = $('div'); 
    //             collection.each(function(){
    //                let el = $(this);
    //             });
            
    //             $('#first_block').on('click', function() {
    //              $(this).css('color',color);
    //              $(this).addClass('colored');
    //             });
    //         },
    //         // 
    //         changeBackground:  function(newClass) {
    //             let collection = $('.width');
    //             collection.on('click', function() {
    //                 collection.removeClass(newClass);
    //                 $(this).addClass(newClass);
    //             })
    //         },
    //         // 
    //         changeParentColor: function (newClassParent) {
    //             $('#first_block').on('click', function(){
    //                 $(this).parent().addClass(newClassParent);
    //             });
    //         },
    //         // 
    //         changeSizeFont: function (newClassFont) {
    //             let sizeFont = $('.width');
    //             sizeFont.on('mouseover', function() {
    //                 sizeFont.removeClass(newClassFont);
    //                 $(this).addClass(newClassFont);
    //             })
    //     },
     
    //    }

    //     frontend.changeSizeFont('new-size-font')
    //     frontend.changeParentColor('block-wrapper-colored');
    //     frontend.changeColor('red');
    //     frontend.changeBackground('color');
            


