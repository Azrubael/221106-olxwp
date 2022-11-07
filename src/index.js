import hamster from "../assets/0fb35409-1df9-4d1b-ac84-42b23f7ff363.jpg"

document.body.innerHTML = '<div id="myMemes"></div>'
document.getElementById("myMemes").innerHTML = `<center>
	<h1>And his name is...</h1>
	<img src="${hamster}" height="250px" /><br />
	<h2><i>HAMSTER</i></h2></center>`

import { hello } from "./hello"
// export const hello = subject => console.log(`Hello ${subject}!`)

hello("OLX Dev!")
