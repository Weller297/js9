let allItems = document.querySelector('.item')
let item_1 = document.querySelector('.item_1')
let item_2 = document.querySelector('.item_2')
let item_3 = document.querySelector('.item_3')
let item_4 = document.querySelector('.item_4')
let item_5 = document.querySelector('.item_5')
let item_6 = document.querySelector('.item_6')
let item_7 = document.querySelector('.item_7')
let item_8 = document.querySelector('.item_8')
let item_9 = document.querySelector('.item_9')
let item_10 = document.querySelector('.item_10')
let body = document.querySelector('body')

item_1.addEventListener('click', function() {
    body.style.background = 'red'
})
item_2.addEventListener('click', function() {
    body.style.background = 'blue'
})
item_3.addEventListener('click', function() {
    body.style.background = 'yellow'
})
item_4.addEventListener('click', function() {
    body.style.background = 'linear-gradient(45deg, red, blue, yellow, green, black, darkviolet)'
})
item_5.addEventListener('click', function() {
    body.style.background = 'none'
})
item_6.addEventListener('click', function() {
    allItems.style.background = 'red'
})
item_7.addEventListener('click', function() {
    allItems.style.background = 'blue'
})
item_8.addEventListener('click', function() {
    allItems.style.background = 'yellow'
})
item_9.addEventListener('click', function() {
    allItems.style.background = 'linear-gradient(45deg, red, blue, yellow, green, black, darkviolet)'
})
item_10.addEventListener('click', function() {
    allItems.style.background = 'none'
})