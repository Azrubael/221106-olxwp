import hamster from "../assets/0fb35409-1df9-4d1b-ac84-42b23f7ff363.jpg"
import Sail from "../assets/and-his-name-is.mp3"
import "./style.scss"

// Инпортирование функции, как промиса
import("./module-1.js").then(mod => {
	const nothing = mod.default()
	const nothingToo = mod.useless()
	// logs "This function does nothing ...and neither this one!"
	console.log(`${nothing} ...and ${nothingToo}`)
})

import { hello } from "./hello"
hello("OLX Dev!")


const audio = new Audio(Sail)
const pic = document.querySelector("body")

document.body.innerHTML = '<div id="myMemes"></div>'
document.getElementById("myMemes").innerHTML = `<h1>And his name is...</h1>
	<img id="pic" src="${hamster}" /><br />
	<h2><i>HAMSTER</i></h2>`
	
pic.addEventListener('click', () => {
	console.log('Клик!')
	audio.play()
})