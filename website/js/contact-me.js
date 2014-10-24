var requiredFields = [ "firstname", "lastname", "email", "message" ];

function checkContactForm() 
{
	var theForm = document.forms[ 0 ];

	for ( var i in requiredFields ) 
	{
		var fieldName = requiredFields[ i ];

		if ( !theForm[ fieldName ].value || theForm[ fieldName ].value == "Error" ) 
		{
			theForm[ fieldName ].style.color = "#f66";
			theForm[ fieldName ].value = "Error";

			var emptyFields = true; 
		} 
	}

	if ( !emptyFields ) 
	{
		document.getElementById("errorMessage").remove();
		theForm.submit(); 
	}
	else if (document.getElementById("errorMessage") == null)
	{
		var errorMessage = document.createElement('div');
		errorMessage.id = "errorMessage";
		errorMessage.innerHTML = "<p><i>Please fill in all fields before submitting</i></p>";
		document.body.appendChild(errorMessage);
	}	

}

function resetField( theField ) 
{
	if ( theField.value == "Error" ) 
	{
		theField.value = "";
	}
	theField.style.color = "#000";

	document.getElementById("errorMessage").remove();
}