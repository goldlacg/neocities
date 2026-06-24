function openModal() {
    //grabbing image info
    var source = event.target.src;
    var desc = event.target.alt;

    //showing the modal style formal
    document.getElementById("myModal").style.display = "block";

    //testing w logs
    console.log(document.getElementById("artpic").src);
    console.log(source);
    console.log(document.getElementById("picfocus"));
    console.log(desc);

    //grabbing the html elements and setting them as the image info we retrieved
    document.getElementById("picfocus").src = source;

    document.getElementById("caption").innerHTML = desc;
}

var span = document.getElementsByClassName("close")[0];

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}