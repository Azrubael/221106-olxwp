import hamster from "../assets/0fb35409-1df9-4d1b-ac84-42b23f7ff363.jpg"
import Sail from "../assets/sailingTheme.mp3"
import { hello } from "./hello"
hello("OLX Dev!")


const audio = new Audio(Sail)
const pic = document.querySelector("body")

document.body.innerHTML = '<div id="myMemes"></div>'
document.getElementById("myMemes").innerHTML = `<center>
	<h1>And his name is...</h1>
	<img id="pic" src="${hamster}" height="250px" /><br />
	<h2><i>HAMSTER</i></h2></center>`
	
pic.addEventListener('click', () => {
	console.log('Клик!')
	audio.play()
})