function list(productsCart) {
    let mainLista = document.querySelector(".the-list")

    let ulProduct = document.createElement("ul")
    ulProduct.classList.add("products-list")
    mainLista.appendChild(ulProduct)

    let divInput = document.createElement("div")
    divInput.classList.add("input-background")
    mainLista.appendChild(divInput)
    divInput.innerHTML = '<input type="search" class="search" name="pesquisar" id="search-product" placeholder="Digite aqui sua pesquisa">'
    

    let divCartbackground = document.createElement("div")
    divCartbackground.classList.add("cart-background")
    mainLista.appendChild(divCartbackground)

    let divCart = document.createElement("div")
    divCart.classList.add("cart")
    divCartbackground.appendChild(divCart)


    for (i = 0; i < productsCart.length; i++){
        let item = productsCart[i]

        
        let liProduct = document.createElement("li")
        liProduct.classList.add("list-item-products")
        ulProduct.appendChild(liProduct)
        liProduct.id = "product-list"

        let imgProduct = document.createElement("img")
        imgProduct.src = item.image
        imgProduct.classList.add("img-product")
        liProduct.appendChild(imgProduct)

        let aProduct = document.createElement("a")
        aProduct.classList.add("product-tag")
        aProduct.innerText = item.tag
        liProduct.appendChild(aProduct)

        let p1Product = document.createElement("p")
        p1Product.classList.add("product-name")
        p1Product.innerText = item.name
        liProduct.appendChild(p1Product)

        let pProduct = document.createElement("p")
        pProduct.classList.add("product-price")
        pProduct.innerText = item.price
        liProduct.appendChild(pProduct)

        let btnProduct = document.createElement("button")
        btnProduct.classList.add("btn-add")
        btnProduct.innerText = "Adicionar ao carrinho"
        liProduct.appendChild(btnProduct)

        

    }
}
list(productsCart)