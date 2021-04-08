$(document).ready(function(){
	
	
	//Navigation fixer
	$('.navbar-nav li a').on('click', function(){
    	if(!$( this ).hasClass('dropdown-toggle')){
        	$('.navbar-collapse').collapse('hide');
    	}
	});


	/* Starter alerts at DevIndia*/
	/*
	alert("Website is under development.");
 
	$("body").click(function(){
  		alert("You can contact us at: hello@spinpe.com");
	});
	*/

 });