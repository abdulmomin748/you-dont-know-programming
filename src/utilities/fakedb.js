// use local storage to manage card data
const addToDb = id => {
    let shoppingCart = {};
   
    // get the shopping cart from local storage
        const storedCard = localStorage.getItem('shopping-cart');
        if(storedCard) {
            shoppingCart = JSON.parse(storedCard);
        }

    // add quantity
    const quantity = shoppingCart[id];
    
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }else{
        shoppingCart[id] = 1;
    }   
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))   
}


export {
    addToDb,
};