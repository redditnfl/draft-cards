const body = document.querySelector("body");
const $nameplate = document.querySelector(".nameplate");
const $innerNameplate = document.querySelector(".inner-nameplate");


function nameLength(){
	const width = $nameplate.offsetWidth;
	const innerWidth = $innerNameplate.offsetWidth;
	let name = $innerNameplate.innerHTML.split(" ");
	name[0] = name[0][0] + ".";
	if(innerWidth > width){
		$innerNameplate.innerHTML = name.join(" ");
	}
}

document.fonts.ready.then(nameLength)
