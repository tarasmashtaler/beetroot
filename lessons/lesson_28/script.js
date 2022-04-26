// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
// Створення списку (не) придбаних продуктів.
let shoppingList = [
  { 
    name: 'apple',
    quantity: 5, 
    bought: true,
    price: 10,
    amount: 50
  },
  { 
    name: 'pear',
    quantity: 15, 
    bought: true,
    price: 20,
    amount: 300
  },
  { 
    name: 'orange',
    quantity: 0, 
    bought: false,
    price: 40,
    amount: 0
  },
  { 
    name: 'mango',
    quantity: 0, 
    bought: false,
    price: 75,
    amount: 0
  },
  { 
    name: 'cherry',
    quantity: 0, 
    bought: false,
    price: 55,
    amount: 0
  }
]
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
shoppingList.sort(function (a, b) {
  return a.bought > b.bought ? 1 : -1;
});
console.log(shoppingList);

// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
function setBought(productName){
  let productIndex = shoppingList.findIndex(element => element.name == productName);
  // console.log(productIndex);
  if(productIndex == -1){
    return false;
  }
  shoppingList[productIndex].bought = true;
}
setBought('mango');
// setBought('orange');

// Створення списку (не) придбаних продуктів.
let notBoughtProducts = [];   
shoppingList.forEach((element) => {
  if(!element.bought){
  notBoughtProducts.push(element);
  }
})
console.log(notBoughtProducts);

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)


function deleteProductFromList(productName){
  let newProductsList = [];

  shoppingList.forEach((element) => {
    if(element.name != productName){
      newProductsList.push(element);
    }
  });
  return newProductsList;
}
console.log('Old products list', shoppingList);
console.log('New products list', deleteProductFromList('orange'));

// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
function amountCalculate(product){
  return  product.quantity * product.price;
}
function addProductToList(product){
  let productIndex = shoppingList.findIndex(element => element.name == product.name);
  console.log(productIndex);
  if(productIndex == -1){
    product['bought'] = true;
    product['amount'] = amountCalculate(product); 
    shoppingList.push(product);
  } else{
    shoppingList[productIndex].quantity += product.quantity;
    shoppingList[productIndex].amount += amountCalculate(product);
    shoppingList[productIndex].bought = true;
  }
  console.log(shoppingList);
}
addProductToList({name: 'pineapple', quantity: 5, price: 90});
addProductToList({name: 'cherry', quantity: 5, price: 55});

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
function totalProductaAmount(){
  let totalAmount = 0;
  shoppingList.forEach((element) => {
    totalAmount = totalAmount + element.quantity * element.price; 
    console.log(element);
  })
  return totalAmount;
}
console.log(totalProductaAmount());