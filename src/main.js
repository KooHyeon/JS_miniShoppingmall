'use strict';

const homeBtn = document.querySelector(".shoppingmall__logo")
const btns = document.querySelectorAll(".btn")
const itemList = document.querySelector(".shoppingmall__list")

const colors = ["blue", "pink", "yellow"];
const kinds = ["p", "t", "s"];

window.addEventListener("load", showAll(colors, kinds));

function showAll(colors, kinds) {
    for (let i = 0; i < colors.length; i++) {
        for (let j = 0; j < kinds.length; j++) {
            createItem(colors[i], kinds[j])
        }
    }
}

function createItem(color, kind) {
    const item = document.createElement("li");
    item.classList = `shoppingmall__item ${color} ${kind}`
    const itemImg = document.createElement("img");
    itemImg.src = "./img/" + color + "_" + kind+".png"
    const itemInfo = document.createElement("span");
    itemInfo.innerText = "female, large size"
    item.appendChild(itemImg);
    item.appendChild(itemInfo);
    itemList.appendChild(item)
}

function deleteAllItem() {
    const items = document.querySelectorAll("li")
    items.forEach((item) => item.remove());
}


for (const btn of btns) {
    btn.addEventListener("click", () => {
        selectMenu(btn)
    })
}

function selectMenu(btn) {
    if (btn.className == "shoppingmall__top btn" ||
        btn.className == "shoppingmall__pants btn" ||
        btn.className == "shoppingmall__skirt btn") {
        showClothes(btn);
    } else {
        showColors(btn);
    }
}

function showClothes(e) {
    deleteAllItem();
    for (let i = 0; i < colors.length; i++) {
        if (e.className === "shoppingmall__top btn") {
            createItem(colors[i], "t");
        } else if (e.className === "shoppingmall__pants btn") {
            createItem(colors[i], "p");
        } else {
            createItem(colors[i], "s");
        }
    }
}

function showColors(e) {
    deleteAllItem();
    for (let i = 0; i < colors.length; i++) {
        if (e.className === "shoppingmall__blue btn") {
            createItem("blue", kinds[i]);
        } else if (e.className === "shoppingmall__yellow btn") {
            createItem("yellow", kinds[i]);
        } else {
            createItem("pink", kinds[i]);
        }
    }
}