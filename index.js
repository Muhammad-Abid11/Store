// https://fakestoreapi.com/products 

var count = 0
async function getData() {
    var data = await fetch("https://fakestoreapi.com/products");
    var products = await data.json()
    // console.log(products[count])
    // down render products
    // ------hide loader and display content
    setTimeout(() => {
        var loader = document.getElementById("loader");
        loader.className = "hide"
        var content = document.getElementById("content");
        content.className = " "
    }, 4000)

    for (let i = 0; i < products.length; i++) {

        var main = document.getElementById("main")
        //upper main ko target krliya
        var divCard = document.createElement("div")
        divCard.className = "card"
        //upper ab card k liye div bana hai or ishi me sb ab hongy

        // ab image/description bana kr k divCard k sath connect krna hai
        // ---------------down image
        var imgElement = document.createElement("img")
        imgElement.setAttribute("id", "cardImage")
        imgElement.style = "width:100%"
        imgElement.src = products[i].image
        // console.log(imgElement)
        divCard.append(imgElement)
        // ---------------

        // ab div banao jhn details hongi
        var divContainer = document.createElement("div")
        divContainer.className = "container"
        var h4 = document.createElement("h4");
        h4.setAttribute("id", "title");
        h4.innerHTML = products[i].title.slice(0, 10)
        // console.log(h4)

        var descriptionElement = document.createElement("p");
        descriptionElement.setAttribute("id", "description");
        descriptionElement.innerHTML = products[i].description.slice(0, 20);
        // console.log(descriptionElement)

        var priceElement = document.createElement("p");
        priceElement.setAttribute("id", "price");
        priceElement.innerHTML = products[i].price;
        // console.log(priceElement)

        // divContainer me heading price or description add kro
        divContainer.append(h4)
        divContainer.append(descriptionElement)
        divContainer.append(priceElement)
        // console.log(divContainer)

        // ab image(upper connect hai)/description bana kr k divCard k sath connect krna hai
        divCard.append(divContainer);
        // console.log(divCard)

        main.append(divCard) //now connect with main div
    }

    // ---------------
    /*     var cardImage = document.getElementById("cardImage");
        cardImage.src = products[count].image
        var title = document.getElementById("title");
        title.innerHTML = products[count].title.slice(0, 10)//slice use for short name
        var description = document.getElementById("description");
        description.innerHTML = products[count].description
        var price = document.getElementById("price");
        price.innerHTML = products[count].price */

}
getData()