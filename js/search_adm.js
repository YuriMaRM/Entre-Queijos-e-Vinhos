"use strict";


const search = window.location.search;
const urlParams = new URLSearchParams(search);
const searchText = urlParams.get('searchText') || "";
const gridProducts = document.getElementById("products");

const products = [
    {
        id: 0,
        name: "vinho azul",
        batch: "0005",
        type: "vinho",
        price: 150,
        estoque: 2,
        description: "",
        keyWords: ""
    },
    {
        id: 1,
        name: "vinho azul",
        batch: "0005",
        type: "vinho",
        price: 150,
        estoque: 2,
        description: "",
        keyWords: "tinto"
    },
    {
        id: 2,
        name: "vinho verde",
        batch: "0005",
        type: "vinho",
        price: 150,
        estoque: 2,
        description: "",
        keyWords: "branco"
    },
    {
        id: 3,
        name: "vinho vermelho",
        batch: "0005",
        type: "vinho",
        price: 150,
        estoque: 2,
        description: "",
        keyWords: "rose"
    },
    {
        id: 4,
        name: "vinho azul",
        batch: "0005",
        type: "vinho",
        price: 150,
        estoque: 2,
        description: "",
        keyWords: "brasil"
    },
    {
        id: 5,
        name: "vinho verde",
        batch: "0005",
        type: "vinho",
        price: 150,
        estoque: 2,
        description: "",
        keyWords: ""
    },
    {
        id: 6,
        name: "vinho vermelho",
        batch: "0005",
        type: "vinho",
        price: 150,
        estoque: 2,
        description: "",
        keyWords: ""
    },
    {
        id: 7,
        name: "vinho azul",
        batch: "0005",
        type: "vinho",
        price: 150,
        estoque: 2,
        description: "",
        keyWords: ""
    },
    {
        id: 8,
        name: "vinho verde",
        batch: "0005",
        type: "vinho",
        price: 150,
        estoque: 2,
        description: "",
        keyWords: ""
    },
    {
        id: 9,
        name: "vinho vermelho",
        batch: "0005",
        type: "vinho",
        price: 150,
        estoque: 2,
        description: "",
        keyWords: ""
    },
    {
        id: 10,
        name: "vinho azul",
        batch: "0005",
        type: "vinho",
        price: 150,
        estoque: 2,
        description: "",
        keyWords: ""
    },
    {
        id: 11,
        name: "vinho verde",
        batch: "0005",
        type: "vinho",
        price: 150,
        estoque: 2,
        description: "",
        keyWords: ""
    },
    {
        id: 12,
        name: "vinho vermelho",
        batch: "0005",
        type: "vinho",
        price: 150,
        estoque: 2,
        description: "",
        keyWords: ""
    },
    {
        id: 13,
        name: "vinho azul",
        batch: "0005",
        type: "vinho",
        price: 150,
        estoque: 2,
        description: "",
        keyWords: ""
    },
    {
        id: 14,
        name: "vinho verde",
        batch: "0005",
        type: "vinho",
        price: 150,
        estoque: 2,
        description: "",
        keyWords: ""
    },
    {
        id: 15,
        name: "vinho vermelho",
        batch: "0005",
        type: "vinho",
        price: 150,
        estoque: 2,
        description: "",
        keyWords: ""
    },
    {
        id: 16,
        name: "vinho azul",
        batch: "0005",
        type: "vinho",
        price: 150,
        estoque: 2,
        description: "",
        keyWords: ""
    },
    {
        id: 17,
        name: "vinho verde",
        batch: "0005",
        type: "vinho",
        price: 150,
        estoque: 2,
        description: "",
        keyWords: ""
    },
    {
        id: 18,
        name: "vinho vermelho",
        batch: "0005",
        type: "vinho",
        price: 150,
        estoque: 2,
        description: "",
        keyWords: ""
    }
]
var productsFormated = products;
if(searchText.length > 0) {
    const searchKeys = ["name", "description", "keyWords"]
    const wordsSearch = searchText.split(" ");
    productsFormated = products.filter( product => {
        for (const key of searchKeys) {
            for (const word of wordsSearch) {
                if(product[key].includes(word))
                    return true;
            }
        }
    });
}  

let createProducts = productElementController(productsFormated);
createProducts.next();

function createCard(product){
    gridProducts.innerHTML += `
        <div class="container_produtos">
            <img class="img_produto" src="../../img/vinho.png" alt="">
            <span>${product.name}</span>
            <div class="preco">
                <span>Por:</span>
                <span class="valor">R$${product.price}</span>
            </div>
        </div>`;
}


function* productElementController(itens) {
    for (let i = 0; i < itens.length; i++) {
        createCard(itens[i]);
        if (i % 15 === 0 && i !== 0) yield;
    }
}

window.onscroll = function (e) {    
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        createProducts.next();
    }
};

const tags = document.getElementsByClassName("tag");
console.log(tags[0].children)

for (const tag of tags) {
    for (const element of tag.children) {
        if(element.nodeName == "A"){
            let wordKey = element.innerHTML.toLocaleLowerCase();
            let idKey = element.id;
            element.addEventListener("click",e =>{
                if(!idKey)
                    filterByWordKey(wordKey);
                else
                    filterByPrice(idKey);
            }) 
        }
    }
}

const filterByWordKey = word => {
    gridProducts.innerHTML ="";
    const productsFilter = productsFormated.filter(product => product.keyWords.includes(word))
    createProducts = productElementController(productsFilter);
    createProducts.next()
}
const filterByPrice = param => {
    gridProducts.innerHTML ="";
    const price = {
        under:[0,150],
        middle: [150,300],
        over: [300,0]
    }[param]

    const productsFilter = productsFormated.filter(product => product.price > price[0] && (product.price <= price[1]   || !price[1]))
    createProducts = productElementController(productsFilter);
    createProducts.next()
}