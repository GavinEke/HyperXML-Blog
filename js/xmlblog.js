var $displayblog = 0;
var $displaypostslist = 0;
var $blogpostno = 0;
loadXMLData($displayblog, $displaypostslist , $blogpostno);

$(window).scroll(function() {
	if($(window).scrollTop() == $(document).height() - $(window).height()) {
		$blogpostno++;
		$displaypostslist = 1;
		loadXMLData($displayblog, $displaypostslist , $blogpostno);
	}
});
