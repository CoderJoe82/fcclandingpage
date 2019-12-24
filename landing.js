let system = "";
let color = "";

const systemSelector = function(event) {
    let systemclicked = event.currentTarget;
    if (systemclicked === document.getElementById("switchHome")) {
        system = "switch";
        document.getElementById("white").style.display = "none";
        document.getElementById("multicolor").style.display = "none";
        document.getElementById("black").style.backgroundColor = "blue";
        document.getElementById("red").style.backgroundColor = "red";
    } else if (systemclicked === document.getElementById("ps4Home")) {
        system = "ps4";
    } else if (systemclicked === document.getElementById("xboxHome")) {
        system = "xbox";
    }
    console.log(system);
}

let systemHomes = document.getElementsByClassName("systemHome");
for (image = 0; image < systemHomes.length; image++) {
    systemHomes[image].addEventListener('click', systemSelector);
}

const colorChoice = function(event) {
    let colorClicked = event.currentTarget;
    if (colorClicked === document.getElementById("white")) {
        color = "white";
    } else if (colorClicked === document.getElementById("black")) {
        color = "black";
        if (system === "switch") {
            color = "blue";
        }
    } else if (colorClicked === document.getElementById("red")) {
        color = "red";
    } else if (colorClicked === document.getElementById("multicolor")) {
        color = "multicolor";
    }
    if (system === "ps4" && color === "black") {
        document.getElementById("choiceImage").src = "http://fox.mmgn.com/mmgn/articles/normal/the-ps4-controller-is-fantastic-from-someone-who-hates-the-ps3-controller-1099668.jpg";
        document.getElementById("price").innerHTML = "$59.99";
    } else if (system === "ps4" && color === "white") {
        document.getElementById("choiceImage").src = "https://playone.com.lb/images/detailed/211/d1q9reikbwb3.jpg";
        document.getElementById("price").innerHTML = "$59.99";
    } else if (system === "ps4" && color === "red") {
        document.getElementById("choiceImage").src = "https://www.lukiegames.com/assets/images/ps4/ps4_dualshock_mr-118209.jpg";
        document.getElementById("price").innerHTML = "$59.99";
    } else if (system === "ps4" && color === "multicolor") {
        document.getElementById("choiceImage").src = "https://images-na.ssl-images-amazon.com/images/I/416wj1XovvL._SX425_.jpg";
        document.getElementById("price").innerHTML = "$59.99";
    } else if (system === "xbox" && color === "white") {
        document.getElementById("choiceImage").src = "https://free3d.com/imgd/l85/5ca714f026be8ba30c8b4567/6605-xbox-one-controller.jpg";
        document.getElementById("price").innerHTML = "$49.99";
    } else if (system === "xbox" && color === "black") {
        document.getElementById("choiceImage").src = "https://img2.cgtrader.com/items/734714/cc282c9021/xbox-one-x-controller-3d-model-max-obj-3ds-fbx-mtl-tga.jpg";
        document.getElementById("price").innerHTML = "$49.99";
    } else if (system === "xbox" && color === "red") {
        document.getElementById("choiceImage").src = "https://images-na.ssl-images-amazon.com/images/I/81ndN4WW9uL._SX355_.jpg";
        document.getElementById("price").innerHTML = "$49.99";
    } else if (system === "xbox" && color === "multicolor") {
        document.getElementById("choiceImage").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg7ZD-c4_xxKcd9sC379eSBvkTBsEZz2v4ZjWEpgdBBuOlh85I&s";
        document.getElementById("price").innerHTML = "$49.99";
    } else if (system === "switch" && color === "blue") {
        document.getElementById("choiceImage").src = "https://media.gamestop.com/i/gamestop/10143658/Nintendo-Switch-Joy-Con-L-Neon-Blue?$zoom$";
        document.getElementById("choiceImage").style.height = "200px";
        document.getElementById("choiceImage").style.width = "200px";
        document.getElementById("price").innerHTML = "$34.99";

    } else if (system === "switch" && color === "red") {
        document.getElementById("choiceImage").src = "https://cdn.dawg.io/ead092b9f61ba030e18c005daaef0cac/cmimg/item/74/33878_01.jpg";
        document.getElementById("choiceImage").style.height = "200px";
        document.getElementById("choiceImage").style.width = "200px";
        document.getElementById("price").innerHTML = "$39.99";

    }
}

let controllerColorChoice = document.getElementsByClassName("colorBox");
for (color = 0; color < controllerColorChoice.length; color++) {
    controllerColorChoice[color].addEventListener('click', colorChoice);
}

resetSelections = () => {
    setTimeout(function() {
        color = "";
        system = "";
        document.getElementById("white").style.display = "flex";
        document.getElementById("multicolor").style.display = "flex";
        document.getElementById("black").style.backgroundColor = "black";
        document.getElementById("red").style.backgroundColor = "red";
        document.getElementById("choiceImage").style.width = "400px";
        document.getElementById("choiceImage").style.height = "";
    }, 1000);
}