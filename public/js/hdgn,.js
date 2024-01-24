
if (element.src.includes("couverture") && controle.length < 3) {
    element.src = newlist[parseInt(element.id)]
    controle.push(element)
    
    if (controle.length == 2) {

           
                if (comp == 8) {
                    //! mettre un msg de fin 
                    let btnend = document.createElement("button")
                    btnend.innerText = "RESTART"
                    document.body.appendChild(btnend)
                    btnend.addEventListener("click", () => {
                        location.reload()
                    })
                }
            }
            controle = []
        }