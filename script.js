
// ..............SEARCH-PRODUCTS..................
let input = document.querySelector('input');
let products = document.querySelectorAll('.product');
let removeText = document.getElementById('removeText')
input.addEventListener('input', function () {
    let item = input.value.trim().toLowerCase();
    products.forEach(product => {
        let pro = product.querySelector('h2').textContent.toLowerCase();

        if (pro.includes(item) && pro.length !== '') {
            product.style.display = 'block'
        } else {
            product.style.display = 'none'
        }
    }) 
    removeText.addEventListener('click', function () {
        input.value = ''
        products.forEach(product => {
            product.style.display = 'block'
        })
    })
})

///////////////відкриття кошика////////////////////////////// 
let num = document.getElementById('num')
let items = []
let backgroundKoshyk = document.querySelector('.backgroundKoshyk');
let btnKoshyk = document.getElementById('btnKoshyk');
btnKoshyk.addEventListener('click', function () {
    backgroundKoshyk.style.display = 'block'
    document.body.style.overflow = 'hidden'

})
// ////////////////////закриття кошика/////////////////////////////////////
document.getElementById('closedKoshyk').addEventListener('click', function () {
    backgroundKoshyk.style.display = 'none'
    document.body.style.overflow = 'auto'
})
backgroundKoshyk.addEventListener('click', function (ev)  {
    if (ev.target === backgroundKoshyk ) {
        backgroundKoshyk.style.display = 'none'
        document.body.style.overflow = 'auto'
    }
})

// .....................додавання продуктів в кошик............................

let productsBtn = document.querySelectorAll('.products button');
let apppenProducts = document.getElementById('apppenProducts');
let numberProducts = document.getElementById('num')
let productToStore = JSON.parse(localStorage.getItem('products')) || []
numberProducts.textContent = productToStore.length
productToStore.forEach(pro => {
    let li = document.createElement('li');
    li.textContent = pro;
    apppenProducts.appendChild(li)
})
productsBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        let product = btn.closest('.product');
        let nameProduct = product.querySelector('h2').textContent;
        let li = document.createElement('li');
        li.textContent = nameProduct;
        productToStore.push(nameProduct);
        localStorage.setItem('products', JSON.stringify(productToStore))
        apppenProducts.appendChild(li)
        numberProducts.textContent = productToStore.length
       
    })
    document.querySelector('.btnRemoveProducts').addEventListener('click', function () {
        localStorage.removeItem('products')
        apppenProducts.textContent = ''
        document.getElementById('num').textContent = 0
    })
})
// ////////відкриття навігаційноого меню///////////////////////////////
let navBtn = document.querySelector('.navBtn button');
let backgroundNav = document.querySelector('.background-nav');
let navigation = document.querySelector('.navigation');
navBtn.addEventListener('click', function () {
    navigation.classList.add('opn')
    backgroundNav.style.display = 'block'
    document.body.style.overflow = 'hidden'
})
document.getElementById('closed').addEventListener('click', function () {
    navigation.classList.remove('opn')
    backgroundNav.style.display = 'none'
    document.body.style.overflow = 'auto'
})
// ///////////відкриття поля реєстрації////////////////
let logIN = document.querySelector('.logIN');
let log = document.getElementById('log');
log.addEventListener('click', function () {
    logIN.style.display = 'block'
    document.body.style.overflow = 'auto'
    navigation.classList.remove('opn')
    backgroundNav.style.display = 'none'
})
 

let form = document.querySelector('form');
form.addEventListener('click', function (e) {
    e.preventDefault()
})
document.querySelector('.closed-reest').addEventListener('click', function () {
    document.querySelector('.logIN').style.display = 'none'
})

// ////реєстрація//////////////////

document.getElementById('btn-reest').addEventListener('click', function () {
    let nameInp = document.getElementById('textName')
    let textEmail = document.getElementById('textEmail');
    let textPass = document.getElementById('textPass')

    let appendName = nameInp.value.trim();
    let appendEmail = textEmail.value.trim();
    let appendPassword = textPass.value.trim();


    if (appendName === '' || appendEmail ==='' || appendPassword === '' ) {
        document.getElementById('textName').style.border = '2px solid red'
        document.getElementById('textEmail').style.border = '2px solid red'
        document.getElementById('textPass').style.border = '2px solid red'
        
    } else {
        document.querySelector('.logIN').style.display = 'none'
        setTimeout(() => {
            let nameUser = appendName.charAt(0).toUpperCase() + appendName.slice(1).toLowerCase();
            alert(`Доброго дня ${nameUser}`)
            document.getElementById('textName').style.border = '1x solid #000'
            document.getElementById('textEmail').style.border = '1x solid #000'
            document.getElementById('textPass').style.border = '1x solid #000'
            nameInp.value = ''
            textEmail.value = ''
            textPass.value = ''
            nameInp.style.border = '1px solid #000'
            textEmail.style.border = '1px solid #000'
            textPass.style.border = '1px solid #000'
        },1500)
    }
   
})





// ////////////images/////////////////
let images = ['images/12019784 – копія.webp', 'images/324981627 – копія.webp', 'images/364935667 – копія.webp', 'images/518835442.webp', 'images/496960003 – копія.webp', 'images/481915730.webp'];
let numImg = 0;
let image = document.getElementById('images');
setInterval(() => {
    image.style.opacity = 0;
    setTimeout(() => {
        
        image.style.opacity = 1
        numImg = (numImg + 1) % images.length;
        image.src = images[numImg]
    }, 1000);
}, 3000)