let starbucks = {
    coffee: {
        latte: {
            price: 200,
            description: 'sweetener',
        },
        cappuchino: {
            price: 150,
            description: 'sweetener',
        },
        espresso: {
            price: 190,
            description: 'bitter',
        },
    },
    tea: {
        greenTea: {
            price: 100,
        },
        blackTea: {
            price: 120,
            description: 'sweetener',
        },
    },
};
console.log(starbucks);
console.log(starbucks.coffee);
console.log(starbucks.tea);
var userDrink = prompt('Введите название напитка');
if (userDrink === 'latte' || userDrink === 'cappuchino' || userDrink === 'espresso'){
    console.log('Заказ принят');
}else if(userDrink === 'greenTea' || userDrink === 'blackTea'){
    console.log('Заказ принят');
}else{
    console.log('ОШИБКА!');
}




