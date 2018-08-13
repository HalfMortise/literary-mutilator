function turnGreen() {
	let voyages = document.getElementById("voyages");
	voyages.style.color = "green";
}


function changeFont() {
	let voyages = document.getElementById("voyages");
	voyages.style.fontFamily = ("Courier New");
}


document.addEventListener('DOMContentLoaded', function(){
	let searchpara = document.getElementById("search_para").innerHTML;
	searchpara=searchpara.toString();
	document.getElementById("search").onclick = function ()
	{highlight_word(searchpara)};
},false);

function highlight_word(searchpara) {
	let text=document.getElementById("search_text").value;
	if(text) {
		let pattern=new RegExp("("+text+")", "gi");
		let new_text=searchpara.replace(pattern, "<span class='highlight'>"+text+"</span>");
		document.getElementById("search_para").innerHTML=new_text;
	}
}