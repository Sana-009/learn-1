console.log("hello");

var bl=0;
document.getElementById("icon-nav").addEventListener("click",function(){
	if(bl==0){
    document.getElementById("nav-bar").style.display="inline-block";
	bl=1;
	}
	else if(bl==1){
		document.getElementById("nav-bar").style.display="none";
		bl=0;
	}
});