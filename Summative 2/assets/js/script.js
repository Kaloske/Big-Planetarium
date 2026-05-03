const img_swap = (button, new_img, img_element) => {

    let img = document.getElementById(img_element);
    // all images are in assets/images, so we do this for brevity

    if (img.getAttribute('src') !== new_img) {

        img.src = new_img;
        for (const child of button.parentElement.children) {
            if (child !== button) {
                child.classList.remove("btn-highlight")
                child.classList.add("btn-default")
            }
        }
        button.classList.toggle("btn-highlight")

    }
};

// Nav dropdown code
let visible = false
const dropdown = () => {
    let content = document.getElementById("dropdown-content")

    if (visible === false) {
        content.style.display = "block"
        visible = true
    } else {
        content.style.display = "none"
        visible = false
    }
};
