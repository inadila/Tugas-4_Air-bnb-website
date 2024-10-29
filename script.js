function openTab(evt, tabName) {
   
    const tabcontent = document.querySelectorAll(".tabcontent");
    tabcontent.forEach(content => content.style.display = "none");

    
    const tablinks = document.querySelectorAll(".tablinks");
    tablinks.forEach(link => link.classList.remove("active"));

   
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}
