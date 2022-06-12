function menuToggle() {
    let menuArea = document.getElementById("menu-area");

    if(menuArea.style.width == '200px') {
        menuArea.style.width = '0px';
    } else {
        menuArea.style.width = '200px';
    }

}
//Trabalhando com JS é possível observar que a manipulação de classes CSS deve ser corretamente feita de forma?
//R:Discreta, com os métodos do método classList.
