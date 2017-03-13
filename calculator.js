$(document).ready(function(){
	var a="";
	var decimal=false;
	var operators=["+","/","-","*","%"];
	var total=$("#display");
	//check number length
	var numberLength=function(number){
    	if(number.length>13){
     	 a="";
      	total.text("Err");
    	}
  	};
	$("#keys a").click(function(){
		switch($(this).attr("class")){
			case "number":
				a+=$(this).text();
				total.text(a);
				numberLength(a);
				break;
			case "operator":
			//allow to add - in empty cell
				if (a =="" && ($(this).text())=="-"){
					a+=$(this).text();
				}
				//Don't allow to add two operator one after another
				 else if(a !="" && operators.includes(a.substring(a.length-1))===false){
					a+=$(this).text();
				} else if (operators.indexOf(a.substring(a.length-1)) > -1 && a.length > 1){
					a=a.replace(/.$/, $(this).text());

				}				
  				total.text(a);
  				decimal=false;
  				break;
  			case "clear":
  				//take one last char from a string
  				a=a.substring(0,a.length-1);
  				total.text(a);
  				decimal=false;
  				break;
  			case "allclear":
  				a="";
   				total.text(a);
   				decimal=false;
   				break;
  			case "decimal":
  				if(!decimal) {
					a+=$(this).text();
					total.text(a);
					decimal = true;
				}  					
  				break;
  			case "eval":
  				//check last char is operator or . and replace with empty string.
  				if(operators.indexOf(a.substring(a.length-1))>-1 || a.substring(a.length-1)==".")
  				{
  					a=a.replace(/.$/, '');
  				}  				
  				total.text(eval(a));
  				numberLength(a);
  				a="";
  				decimal=false;
  				break;
		}

		
		
		
	});


	
});