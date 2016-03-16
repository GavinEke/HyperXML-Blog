var $displayblog = 1;
var $displaypostslist = 0;
var $blogpostno = 0;
loadXMLData($displayblog, $displaypostslist , $blogpostno);

function jsnoverQuote() {
	var $quotes = ["Running a GUI on a server is like heroin, at first click it's great but the before you know it you're full of viruses dying in an alley.", "DSC and Group Policy will not work together, They will fight like two raccoons in a bag.", "PSRemoting v2 and v3 can talk to each other there's this process where they talk to each other, like two dogs sniffing each others' butts, and figure out each other's capabilities."];
	var $randomQuote = Math.floor(Math.random() * $quotes.length);
	document.getElementById("jsnover-quote").innerHTML = $quotes[$randomQuote];
}
jsnoverQuote()
