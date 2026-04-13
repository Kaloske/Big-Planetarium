const img_swap = (button, new_img, img_element) => {

    img = document.getElementById(img_element);
    // all images are in assets/images, so we do this for brevity
    new_img = "/assets/images/" + new_img;


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