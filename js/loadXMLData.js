function loadXMLData(blog, posts, i) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			if (blog == 0) {
				displayBlog(xmlhttp, i);
			}
			if (posts == 0) {
				displayPostsList(xmlhttp);
			}
		}
	}
	xmlhttp.open("GET", "/xml/blog.xml", true);
	xmlhttp.send();
}

function displayBlog(xml, i) {
	var xmlDoc = xml.responseXML; 
	x = xmlDoc.getElementsByTagName("POST");
	if (i < x.length) {
		var $content = "<div class=\"blog-post\"><h3><a href=\"/posts/" +
		x[i].getElementsByTagName("CONTENT")[0].childNodes[0].nodeValue +
		"\">" +
		x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
		"</a></h3><p class=\"blog-post-meta\">" + 
		x[i].getElementsByTagName("DATE")[0].childNodes[0].nodeValue +
		" by <a href=\"/about.html\">" + 
		x[i].getElementsByTagName("AUTHOR")[0].childNodes[0].nodeValue +
		"</a></p></div><!-- /.blog-post -->";
		$('#blog-main').append($content);
	}
}

function displayPostsList(xml) {
	var i;
	var xmlDoc = xml.responseXML;
	var postslist="";
	var x = xmlDoc.getElementsByTagName("POST");
	var postscount = 5
	if (x.length < postscount) {
		postscount = x.length;
	}
	for (i = 0; i < postscount; i++) { 
		postslist += "<li><a href=\"/posts/" +
		x[i].getElementsByTagName("CONTENT")[0].childNodes[0].nodeValue +
		"\">" +
		x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
		"</a></li><li><hr />";
	}
	document.getElementById("posts-list").innerHTML = postslist;
}
