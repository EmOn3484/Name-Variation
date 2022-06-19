const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");
const f = document.querySelector(".f");
const g = document.querySelector(".g");
const text = document.querySelector("input");


function NumOfCharacter(value) {
			return 	value.length;				
}
function firstChar(value) {
				return value.slice(0,1);
}
function lastChar(value) {
				return value.slice(value.length-1);
}
function toLower(value) {
				return value.toLowerCase();
}
function toUpper(value) {
				return value.toUpperCase();
}
function capitalized(value) {
				return value.slice(0,1).toUpperCase() + value.slice(1).toLowerCase();
}

text.addEventListener("keyup", (e) => {
				e.preventDefault();
				var value = e.target.value;			
			a.innerText =	NumOfCharacter(value);		
			b.innerText =	firstChar(value);		
		c.innerText =	lastChar(value);
			f.innerText =	toUpper(value);
				d.innerText =	toLower(value);
            });
