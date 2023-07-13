

async function fetchRecipe(){
    try{
        const response = await fetch('/recipe/pizza', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json()
        const name = document.getElementById("recipe-name")
        const instructions = document.getElementById("instructions")
        const ingredients = document.getElementById("ingredients")
        name.innerText = data["name"]
        data["instructions"].forEach(element => {
            let li = document.createElement("li")
            li.innerText = element
            instructions.appendChild(li)
        });
        data["ingredients"].forEach(element => {
            let li = document.createElement("li")
            li.innerText = element
            ingredients.appendChild(li)
        });
    } catch(e){
        console.error(e)
    }
}
async function postRecipe(recipeJSON){
    try{
        const response = await fetch("/recipe/",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipeJSON)
        })
    } catch(e){
        console.error(e)
    }
}

async function postImage(images){
    try{
        const data = new FormData()
        for (let i = 0; i < images.length; i++) {
            data.append("images", images[i]);
        }
        const response = await fetch("/images",{
            method: "POST",
            body: data
        })
    } catch(e){
        console.error(e)
    }
}

let ingredient_list_for_post = []
let instruction_list_for_post = []

window.onload = function(){
    fetchRecipe()
    const confirm_button = document.getElementById("submit")
    const add_ingredient_button = document.getElementById("add-ingredient")
    const add_instruction_button = document.getElementById("add-instruction")
    add_ingredient_button.addEventListener("click", function(){
        /*const name = document.getElementById("name-text")
        const ingredients = document.getElementById("ingredients-text")*/
        const ingredient_list = document.getElementById("waiting-ingredients")
        const textarea = document.getElementById("ingredients-text")
        const li = document.createElement("li")
        li.innerText = textarea.value
        ingredient_list.appendChild(li)
        ingredient_list_for_post.push(textarea.value)
    })
    add_instruction_button.addEventListener("click", function(){
        const instruction_list = document.getElementById("waiting-instructions")
        const textarea = document.getElementById("instructions-text")
        const li = document.createElement("li")
        li.innerText = textarea.value
        instruction_list.appendChild(li)
        instruction_list_for_post.push(textarea.value)
    })
    confirm_button.addEventListener("click", async function(){
        const images = document.getElementById("image-input").files
        let JSON_to_send = {
            name: document.getElementById("name-text").value,
            ingredients: ingredient_list_for_post,
            instructions: instruction_list_for_post
        }
        postImage(images)
        postRecipe(JSON_to_send)
    })

}
