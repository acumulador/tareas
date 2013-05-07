$(document).on("ready",ini);

function ini()
{
	$("#elUL").on("click",detecta);
}

//esta función detecta el id del Li y lo muestra en alert
function detecta(e)
{
	//con target capturo el id y lo almaceno en variable
	var myLi = e.target.id;
	//Valido si es el padre (ul) o el hijo (li)
	if( myLi != "elUL" )
	{
		alert("Dio click en: " + myLi); //nodeName;
	}
}