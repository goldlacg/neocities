//var modal = document.getElementById("myModal");
var img = document.getElementById("artpic");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("img01").src = this.src;

}

/*
img.onclick = function(){
    modal.style.display = "block";
    modalImg = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}
*/