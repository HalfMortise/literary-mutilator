function turnGreen() {
	let voyages = document.getElementById("voyages");
	voyages.style.color = "green";
}


function changeFont() {
	let voyages = document.getElementById("voyages");
	voyages.style.fontFamily = ("Courier New");
}

//this anticipates the user's search for a word to be highlighted...
document.addEventListener('DOMContentLoaded', function(){
	let searchpara = document.getElementById("search_para").innerHTML;
	searchpara=searchpara.toString();
	document.getElementById("search").onclick = function ()
	{highlight_word(searchpara)};
},false);

//... and then the function highlights the word searched/found
function highlight_word(searchpara) {
	let text=document.getElementById("search_text").value;
	if (text) {
		let pattern = new RegExp("("+text+")", "gi");
		let new_text = searchpara.replace(pattern, "<span class='highlight'>"+text+"</span>");
		document.getElementById("search_para").innerHTML=new_text;
	}
}

//this function allows user's input to include only certain characters (phone number and associated characters)
function checkPhoneKey(key) {
	return (key >= '0' && key <= '9') || (key == '+') || (key == '(') || (key == ')') || (key == '-') ||
		(key == 'ArrowLeft') || (key == 'ArrowRight') || (key == 'Delete') || (key == 'Backspace');
}

//ROT13 Encryption

function rot13(str){

	str = str.toUpperCase();
	let letters = str.split("");

	return letters.map(function(char){
		char = char.charCodeAt();
		if(char>= 65 && char<=77){
			char += 13;
		} else if(char>=78 && char<=90){
			char -= 13;
		}
		return String.fromCharCode(char);
	}).join('').toLowerCase();
}

document.getElementById("rot13").addEventListener("click", function(){
	let val = document.getElementById("communication").value;
	document.getElementById("communication").value = rot13(val);
});