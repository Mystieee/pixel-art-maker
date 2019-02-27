const HEIGHT=5;
const WIDTH = 5;

let container = document.createElement("div");
container.className = "container"
let currentColor;

for(let i=0 ; i<HEIGHT ; i++){
    let rowDiv = document.createElement("div")
    rowDiv.className = "rowDiv"
    for(let j =0 ; j< WIDTH ;j++){

        let pixel = document.createElement("div")
        pixel.className = "pixel";

        pixel.onclick= () =>{
            pixel.style.backgroundColor = currentColor;
        }


        rowDiv.appendChild(pixel)
    }
    container.appendChild(rowDiv)
}
document.body.appendChild(container)



let yellowPicker = document.createElement("div")
yellowPicker.className ="yellow"
let bluePicker = document.createElement("div")
bluePicker.className ="blue"
let greenPicker = document.createElement("div")
greenPicker.className ="green"

// curentColor = pTag.style.backgroundColor;


console.log("color--"+currentColor)

let colors= ['yellow', 'green', 'blue','red']

for(color of colors){
    let picker = document.createElement("div")
    picker.className =color



    picker.onclick = (event) => {
        console.log(event.target);
        currentColor = event.target.className
        console.log(currentColor)
    }
    container.appendChild(picker)
}

// yellowPicker.onclick = (event) => {
//     console.log(event.target);
//     currentColor = event.target.className
//     console.log(currentColor)
// }
// container.appendChild(yellowPicker)


// bluePicker.onclick = (event) => {
//     console.log(event.target);
//     currentColor = event.target.className
//     console.log(currentColor)
// }
// container.appendChild(bluePicker)


