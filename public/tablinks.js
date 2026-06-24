function openBoss(event, bossName) {
  //variables
  var i, tabcontent, tablinks;

  //hiding content of each tab
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  //removing 'active' class from each tablink element
  tablinks = document.getElementsByClassName("tablinks");
  for (i=0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  //
  document.getElementById(bossName).style.display = "block";
  event.currentTarget.className += " active";
}

