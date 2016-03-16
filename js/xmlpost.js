function getURLParameter(sParam)
{
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    } else {
      return 0
    }
  }
}

var $displayblog = 0;
var $displaypostslist = 0;
var $blogpostno = getURLParameter('post');
loadXMLData($displayblog, $displaypostslist , $blogpostno);
