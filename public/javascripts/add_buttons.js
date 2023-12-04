async function add_buttons(){
    const checktext = document.getElementsByClassName("checktext")
    console.log(checktext.length)
    for(var i = 0; i<checktext.length; i++){
        checktext[i].addEventListener("click", function(){
            console.log("lmao")
        })
    }
}


