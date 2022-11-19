import React, {useState} from "react"
import { render } from "react-dom"

import hamster from "../assets/0fb35409-1df9-4d1b-ac84-42b23f7ff363.jpg"
import Sail from "../assets/and-his-name-is.mp3"
import "./style.scss"

const audio = new Audio(Sail)

const App = () => {
	const [personState, setPersonState] = useState("^.-")
	const wakeUp = () =>
		import(/* webPackChunkName: "myAwesomeLazyModule",
		webpackPreload: true*/ "./lazy-one").then(
			mod => setPersonState(mod.default)
		)
	const lazyBtnStyle = {
		margin: "10px auto",
		display: "flex",
		fontSize: "4rem"
	}

	return (
		<div id="myMemes">
			<h1>You can't expect...</h1>
			<img src={hamster} role="button" onClick={() => audio.play()} />
			<button style={lazyBtnStyle} onClick={() => wakeUp()}>
				{personState}
			</button>
		</div>
	)
}

const wrapper = document.createElement("div")
wrapper.setAttribute("id", "app")
document.body.appendChild(wrapper)

render(<App />, wrapper)

/*************************************************************
 							старый ненужный код
 *************************************************************
import hamster from "../assets/0fb35409-1df9-4d1b-ac84-42b23f7ff363.jpg"
import Sail from "../assets/and-his-name-is.mp3"
import "./style.scss"

// Импортирование функции, как промиса
import("./module-1.js").then(mod => {
	const nothing = mod.default()
	const nothingToo = mod.useless()
	// logs "This function does nothing ...and neither this one!"
	console.log(`${nothing} ...and ${nothingToo}`)
})

// Импортирование двух функций и возврат их как промиса
const outputs = [1, 2].map(modNum =>
	import( `./module-${modNum}`).then(mod => mod.default())
)
Promise.all(outputs).then(outs => console.log(outs.join(" and ")))


const audio = new Audio(Sail)
const pic = document.querySelector("body")

document.body.innerHTML = '<div id="myMemes"></div>'
document.getElementById("myMemes").innerHTML = `
	<h1>And his name is...</h1>
	<img id="pic" src="${hamster}" /><br />
	<h2><i>HAMSTER</i></h2>`
	
pic.addEventListener('click', () => {
	console.log('Клик!')
	audio.play()
})

const lazyButton = document.createElement("button")
lazyButton.innerText = "^.-"
lazyButton.style = "margin: 10px auto; display: flex; font-size: 4rem"
lazyButton.onclick = () =>
	import("./lazy-one").then(mod => (lazyButton.innerText = mod.default))
document.body.appendChild(lazyButton)

import { hello } from "./hello"
hello("OLX Dev!")
*/