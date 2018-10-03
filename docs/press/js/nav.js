$(window).load( function() {
	checkVis("factsheet");
	checkVis("description");
	checkVis("Leaderboards");
	checkVis("Achivements");
	checkVis("features");
	checkVis("trailers");
	checkVis("play");
	checkVis("screenshots");
	checkVis("concepts");
	checkVis("images");
	checkVis("logo");
	checkVis("awards");
	checkVis("quotes");	
	checkVis("links");
	checkVis("about");
	checkVis("contact");
	checkVis("preview");
} );

$(window).scroll( function() {
	checkVis("factsheet");
	checkVis("description");
	checkVis("Leaderboards");
	checkVis("Achivements");
	checkVis("play");
	checkVis("features");
	checkVis("trailers");
	checkVis("screenshots");
	checkVis("concepts");
	checkVis("images");
	checkVis("logo");
	checkVis("awards");
	checkVis("quotes");	
	checkVis("links");
	checkVis("about");
	checkVis("contact");
	checkVis("preview");
} );

function checkVis(elem)
{
if( $("#"+elem).length > 0 ) {
	if( isVis( "#"+elem ) ) $("#m-"+elem).css("color","#000"); else $("#m-"+elem).css("color","#9B9B9B");
	}
}

function isVis(elem)
{
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return ( (elemBottom >= docViewTop && elemBottom <= docViewBottom) || (elemTop <= docViewBottom && elemTop >= docViewTop) || (elemTop <= docViewTop && elemBottom >= docViewBottom) );
}