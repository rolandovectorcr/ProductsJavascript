class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }

}

class UI {
    addproduct() {

    }
    deleteproduct() {

    }
    ShowMessage() {

    }
}

//DOM Events    
document.getElementById("product-form")
    .addEventListener('submit', function (e) {
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;

        console.log(name, year, price);
        e.preventDefault();
        new product(name, price, year);
    });