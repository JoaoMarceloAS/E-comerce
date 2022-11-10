function list(productsCart) {
    let mainLista = document.querySelector(".the-list")
    for (i = 0; i < productsCart.length; i++){
        let item = productsCart[i]

        let ulProduct = document.createElement("ul")
        ulProduct.classList.add("products-list")

        
        let liProduct = document.createElement("li")
        liProduct.classList.add("list-item-products")
        ulProduct.appendChild(liProduct)
        liProduct.id = "product-list"

        let imgProduct = document.createElement("img")
        imgProduct.src = item.image
        imgProduct.classList.add("img-product")
        liProduct.appendChild(imgProduct)

        let p1Product = document.createElement("p")
        p1Product.classList.add("product-name")
        p1Product.innerText = item.name
        liProduct.appendChild(p1Product)

        let pProduct = document.createElement("p")
        pProduct.classList.add("product-price")
        pProduct.innerText = item.price
        liProduct.appendChild(pProduct)

        mainLista.appendChild(ulProduct)

    }
}
list(productsCart)