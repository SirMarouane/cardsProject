alert("Bienvenue ! N'hésitez pas à lancer l'audio en bas à gauche.")

// $$$$$$$$$$$ function random $$$$$$$$$$$$$$$$$$$$$$$$$$

let melangeTab = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }
}
// $$$$$$$$$$$ creation  cards $$$$$$$$$$$$$$$$$$$$$$$$$$

let container = document.querySelector(".container")

let content = ["./public/src/1.jpeg", "./public/src/2.jpeg", "./public/src/3.jpeg", "./public/src/4.jpeg" ]
let newContent = content.concat(content)
 
let image

melangeTab(newContent)

newContent.forEach((i) => {
    
    
    image = document.createElement("img")
    
    container.appendChild(image)

    image.id = i.toString() 

});

function cardsBack() {
    document.querySelectorAll("img").forEach(carte => {
        carte.src = "./public/src/back.jpg"

    });
}

cardsBack()

let peers = []
let comp = 0

document.querySelectorAll("img").forEach(carte => {
  
    carte.addEventListener('click', () => {
        
        if (carte.src.includes("back") && peers.length < 3) {
            
            carte.src = carte.id
        
            peers.push(carte)

            

      
                if (peers.length == 2) {
                    setTimeout(() => {
                    if (peers[0].src != peers[1].src) {
                        peers[0].src = "./public/src/back.jpg"
                        peers[1].src = "./public/src/back.jpg"
                    } 
                    
                    else {
                        
                        peers[0].className = "done"
                        peers[1].className = "done"
                                   
                        document.querySelectorAll("img").forEach(carte => {

                        if (carte.classList.contains("done")) {
                            comp++
                            carte.classList.remove("done")
                    } 
                    });
                    
                    }

                    peers = []
            }, 500); 
        }
    } 
   
     
    
    })
});

