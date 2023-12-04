async function load_categories(){
    try{
        const response = await fetch('/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json()
        console.log(data)
        await createElements(data)
    } catch(err) {
        console.error(err)
    }
}
async function createElements(data){
    const category_list = document.getElementById("category-list")
    data.forEach(element => {
        let li = document.createElement("li")
        let label = document.createElement("button")
        let checkbox = document.createElement("input")
        li.appendChild(label)
        li.appendChild(checkbox)
        checkbox.setAttribute("type","checkbox")
        label.setAttribute("class","checktext")
        label.innerText = element["name"]
        category_list.appendChild(li)
    });
}