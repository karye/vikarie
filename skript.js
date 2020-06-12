const allaBilder = document.querySelectorAll("img");

allaBilder.forEach(nyModal);
function nyModal(bild, index) {
    bild.setAttribute("id", "modal" + index);
    var nyDiv = document.createElement("div");
    bild.insertAdjacentElement("afterend", nyDiv);

    nyDiv.classList.add("reveal");
    nyDiv.id = "modal" + index;
    nyDiv.innerHTML =
        '<img src="https://picsum.photos/200" alt="placeholder" data-reveal>';
}
