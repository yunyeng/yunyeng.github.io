var xmlhttp = new XMLHttpRequest();
var url = "article.json";
xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var arr = JSON.parse(xmlhttp.responseText);
		toHtml(arr);
	}
}
xmlhttp.open("GET", url, true);
xmlhttp.send();
function toHtml(arr) {
	var input = arr.articles;
	var output = "";
	for(var i = 0; i < input.length; i++) {
		output += '<article><h4>'+input[i].title+', on <time>'+input[i].time+'</time></h4><hr><p>'+input[i].content+'</p></article>';
	}
	var articleDiv = document.querySelector("#articles");
	articleDiv.innerHTML = output;
}