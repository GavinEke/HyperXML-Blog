var $displayblog = 0;
var $displaypostslist = 0;
var $blogpostno = 0;
loadXMLData($displayblog, $displaypostslist , $blogpostno);
$displaypostslist = 1;
$blogpostno++;
loadXMLData($displayblog, $displaypostslist , $blogpostno);
$blogpostno++;
loadXMLData($displayblog, $displaypostslist , $blogpostno);
$blogpostno++;
loadXMLData($displayblog, $displaypostslist , $blogpostno);
$blogpostno++;
loadXMLData($displayblog, $displaypostslist , $blogpostno);
$blogpostno++;
loadXMLData($displayblog, $displaypostslist , $blogpostno);
$blogpostno++;
loadXMLData($displayblog, $displaypostslist , $blogpostno);
$blogpostno++;
loadXMLData($displayblog, $displaypostslist , $blogpostno);
$blogpostno++;
loadXMLData($displayblog, $displaypostslist , $blogpostno);
$blogpostno++;
loadXMLData($displayblog, $displaypostslist , $blogpostno);

$(window).scroll(function() {
	if($(window).scrollTop() == $(document).height() - $(window).height()) {
		$blogpostno++;
		loadXMLData($displayblog, $displaypostslist , $blogpostno);
		$blogpostno++;
		loadXMLData($displayblog, $displaypostslist , $blogpostno);
		$blogpostno++;
		loadXMLData($displayblog, $displaypostslist , $blogpostno);
		$blogpostno++;
		loadXMLData($displayblog, $displaypostslist , $blogpostno);
		$blogpostno++;
		loadXMLData($displayblog, $displaypostslist , $blogpostno);
		$blogpostno++;
		loadXMLData($displayblog, $displaypostslist , $blogpostno);
		$blogpostno++;
		loadXMLData($displayblog, $displaypostslist , $blogpostno);
		$blogpostno++;
		loadXMLData($displayblog, $displaypostslist , $blogpostno);
		$blogpostno++;
		loadXMLData($displayblog, $displaypostslist , $blogpostno);
		$blogpostno++;
		loadXMLData($displayblog, $displaypostslist , $blogpostno);
	}
});
