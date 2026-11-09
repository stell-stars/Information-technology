const secretText = document.getElementById('secretText');
const btn = document.getElementById('btn');

function display_none_block() {
    if (secretText.style.display == "none") {
        secretText.style.display = "block";
    } else {
        secretText.style.display = "none";
    }
}


btn.addEventListener('click', display_none_block);