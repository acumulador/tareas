$(document).on("ready",ini);

function ini()
{
	$("#elUL").on("click",detecta);
}

function detecta(e)
{
	var myLi = e.target.id;
	if( myLi != "elUL" )
	{
		alert("Dio click en: " + myLi); //nodeName;
	}
	// alert("Bien!!");
}