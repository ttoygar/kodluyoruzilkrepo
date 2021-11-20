
function oldElements () {
    //liste elemanlarının sonuna X eklendi
    var elemanlar = document.getElementsByTagName("LI");
    for (let i=0; i<elemanlar.length; i++) {
        let span = document.createElement("span");
        let text = document.createTextNode("X");
        span.className = "close";
        span.appendChild(text);
        elemanlar[i].appendChild(span); 
    }

    // X'e tiklanan elemanin silinmesi
    let close = document.getElementsByClassName("close");
    for (let i=0; i<close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.remove();
        }
    }
};

// yeni liste elemanlarinin olusturulmasi
function newElement() {
    let task = document.getElementById("task");
    let value = task.value.replace(/^\s+|\s+$/g, '');
    
    if (value.length == 0) {
        $('.error').toast("show");
    } else {
    let list = document.getElementById("list");
    let elem = document.createElement("li");
    list.appendChild(elem);
    elem.innerHTML = task.value;

    let span = document.createElement("span");
    let text = document.createTextNode("X");
    span.className = "close";
    span.onclick = function() {
        this.parentElement.remove()};
    span.appendChild(text);
    elem.appendChild(span);
    $('.success').toast("show");

    for (let i=0; i<close.length; i++) {
        close[i].onclick = function() {
        let div = this.parentElement;
        div.remove();
        }}
    };
};

function checkItem() {
// list item'e tiklandiginda checked classi ekleniyor
    let list = document.getElementById("list");
    list.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('checked');
        }
    }, false);
};


oldElements();
checkItem();
