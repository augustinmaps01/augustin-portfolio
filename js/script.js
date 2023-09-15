// tab links

var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

function opentab (tabname) {
    for(tablink of tabLinks) {
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabContents) {
        tabcontent.classList.remove("active-tabs")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add('active-tabs');
}
var d = new Date();
document.getElementById('dy').innerHTML =  d.getFullYear();

// responsive 
var sideMenu = document.getElementById('sidemenu');

function openmenu() {
    sideMenu.style.right = "0";
}

function closemenu() {
    sideMenu.style.right = "-200px"
}


//form 

const scriptURL = 'https://script.google.com/macros/s/AKfycbyTx6DcLn4ITWbc5Y8b_i5vNA7fqGQm1Nsvwrzuuy59gBHXGMsgpmhnJ8o3PGtU4nJ6/exec'
const form = document.forms['submit-to-google-sheet']
//   const message = document.getElementById('message');

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
   // message.innerHTML = "Message Sent!"
    setTimeout(function() {
        form.reset()
    }, 5000)
    
})
.catch(error => console.error('Error!', error.message))
})