new WOW({
    animateClass: 'animate__animated',
}).init();

$(document).ready(function () {
    let productInput = $('#product-input');

    productInput.attr('placeholder', "Имя");
    $('.rights span').text((new Date()).getFullYear());

    $('#choose-pizza').click(function () {
        $('.products')[0].scrollIntoView({behavior: "smooth"});
    })


    $('.add-to-cart').click((e) => {
        productInput.val($(e.target).parents('.product').find('.product-title').text())
        $('.order')[0].scrollIntoView({behavior: "smooth"});
    })

    let phoneInput = $('#phone-input');
    phoneInput.inputmask({"mask": "(999) 999-9999"});


    $('#create-order').click(function () {
        let addressInput = $('#address-input');

        if (!productInput.val()) {
            alert('Заполните пиццу');
            return;
        }
        if (!addressInput.val()) {
            alert('Заполните адрес');
            return;
        }
        if (!phoneInput.val()) {
            alert('Заполните номер телефона');
            return;
        }

        alert('Спасибо за заказ!');
    });

})


// window.onload = function () {
//
//     document.getElementsByTagName('h1').innerHTML = 'Самая крутая пицца ждет <span>только в нашем ресторане<span/>';
// //
// //     document.getElementById('products-title').style.color = '#000000';
// //
// //     let buttonElements = document.querySelectorAll('.btn');
// //     buttonElements.forEach((item) => {
// //         if (item.id === 'no-touch') {
// //             return;
// //         }
// //         item.style.backgroundColor = 'transparent';
// //         item.style.border = '1px solid rgb(255, 175, 24)';
// //         item.style.color = 'rgb(255, 175, 24)';
// //     })
// //
// // // let buttonElements = document.getElementsByClassName('btn');
// // // for (let i = 0; i < buttonElements.length; i++) {
// // //     if (buttonElements[i].id === 'no-touch'){
// // //         continue;
// // //     }
// // //     buttonElements[i].style.backgroundColor = 'transparent';
// // //     buttonElements[i].style.border = '1px solid rgb(255, 175, 24)';
// // //     buttonElements[i].style.color = 'rgb(255, 175, 24)';
// // // }
// //
// //     document.getElementById('product-input').placeholder = "Имя";
// //
// //     document.querySelector('.rights span').innerText = (new Date()).getFullYear();
// //
// //     let products = document.getElementsByClassName('product');
// //     for (let i = 0; i < products.length; i++) {
// //         if (i % 2 === 1) {
// //             products[i].children[1].innerText += '*';
// //         }
// //
// //     }
//
//     document.getElementById('choose-pizza').onclick = function () {
//         document.getElementsByClassName('products')[0].scrollIntoView({behavior: "smooth"});
//     }
//
//     let productInput = document.getElementById('product-input');
//     let addToCartButtons = document.getElementsByClassName('add-to-cart');
//     for (let i = 0; i < addToCartButtons.length; i++) {
//         addToCartButtons[i].onclick = function (e) {
//             productInput.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
//             document.getElementsByClassName('order')[0].scrollIntoView({behavior: "smooth"});
//         }
//     }
//
//     document.getElementById('create-order').onclick = function () {
//         let addressInput = document.getElementById('address-input');
//         let phoneInput = document.getElementById('phone-input');
//         if (!productInput.value) {
//             alert('Заполните пиццу');
//             return;
//         }
//         if (!addressInput.value) {
//             alert('Заполните адрес');
//             return;
//         }
//         if (!phoneInput.value) {
//             alert('Заполните номер телефона');
//             return;
//         }
//
//         alert('Спасибо за заказ!');
//     }
//
// }

