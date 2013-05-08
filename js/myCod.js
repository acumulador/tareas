$(document).on("ready",ini);
var myLi;
function ini()
{
	$("#elUL").on("click",detecta);
	// $("#fondo-pop").on("click",quitarPop)
	$("#elimina").on("click",clicDel);
	$("#update").on("click",clicUpdate);
	$("#maspag").on("click",clicMaspag);
}

//esta función detecta el id del Li y lo muestra en alert
function detecta(e)
{
	$("#fondo-pop,#pop").fadeIn("slow");

	//con target capturo el id y lo almaceno en variable
	myLi = e.target.id;
	//Valido si es el padre (ul) o el hijo (li)
}

function clicDel()
{
	if( myLi != "elUL" )
	{
		// $("#pop").text("El clic se dio en: " + myLi);
		alert("Clic en Eliminar del registro " + myLi);
		$("#fondo-pop").fadeOut("slow");
	}
}

function clicUpdate()
{
	if( myLi != "elUL" )
	{
		// $("#pop").text("El clic se dio en: " + myLi);
		alert("Clic en Actualizar del registro " + myLi);
		$("#fondo-pop").fadeOut("slow");
	}
}

function clicMaspag()
{
	if( myLi != "elUL" )
	{
		// $("#pop").text("El clic se dio en: " + myLi);
		alert("Clic en Mas paginas del registro " + myLi);
		$("#fondo-pop").fadeOut("slow");
	}
}