class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }

}

class UI{
    addproduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = '<div class="card text-center mb-4"><div class="card-body"><strong>Name: ' + 
        product.name + '</strong><br><strong>Price: ' + 
        product.price + '</strong><br><strong>Year: ' + 
        product.year + '</strong></div></div>'
        + '<a href="#" class="btn btn-danger" name="delete">Delete</a>';
        productList.appendChild(element);
        this.clearform();
    }
    clearform(){
        document.getElementById('product-form').reset();
    }
    deleteproduct(element) {
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
        }
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
        const product = new Product(name, price, year);
        const ui = new UI();
        ui.addproduct(product);
        e.preventDefault();

    });

    document.getElementById("product-list").addEventListener('click', function(e){
        const ui = new UI();
        ui.deleteproduct(e.target);

        
    });