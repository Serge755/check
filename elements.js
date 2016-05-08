var Textarea = new Array();

function newDiv(width) 
{
    var div = document.createElement('div');

    //div.appendChild(document.createTextNode('div'));
	
    document.body.appendChild(div);
	
	div.style.color ='#000';
	div.style.width = width + 'px';
	div.style.height = '75px';
	div.style.opacity ='1.0';
	div.style.textAlign ='center';
	div.style.background ='#ffa';
	div.style.transition ='0.00s';
	
	div.innerText = '1231234433453';
	
	div.style.border ='0px solid #dda';
	div.style.fontFamily ='Arial';
	
	div.style.background ='linear-gradient(90deg, rgba(250,250,150,0.993) 5px, rgba(255,255,255, 0) 10px, rgba(155,155,50,.7), rgba(255,155,0,1), rgba(155,0,50,1))';
	div.style.textShadow ='#888 0 7 4';
	
	div.style.boxShadow ='4px 4px 12px rgba(100,100,100, 0.5)';
	
	div.style.borderRadius ='12px';
	
	//div.style.transform ='scaleX(1) rotate(20deg) skewX(0deg)';
	
	div.style.position = 'absolute';
	div.style.left = 250 + Math.random()*500 +'px';
	div.style.top =  Math.random()*500 +'px';
}


//*********************************************************************
/*
function newTextArea(width) 
{
    var textarea = document.createElement('textarea');
	
    document.body.appendChild(textarea);
	
	textarea.style.color ='#000';
	textarea.style.width = width + 'px';
	textarea.style.height = '150px';
	textarea.style.opacity ='1.0';
	textarea.style.textAlign ='center';
	textarea.style.background ='#ffa';
	textarea.style.transition ='0.00s';
	
	textarea.innerText = '1231234433453';
	
	textarea.style.border ='0px solid #dda';
	textarea.style.fontFamily ='Arial';
	
	textarea.style.background ='rgba(1,0.75,1,0.5)'; //linear-gradient(90deg, rgba(250,250,150,0.993) 5px, rgba(255,255,255, 0) 10px, rgba(155,155,50,.7), rgba(255,155,0,1), rgba(155,0,50,1))';
	textarea.style.textShadow ='#888 0 7 4';
	
	textarea.style.boxShadow ='4px 4px 12px rgba(100,100,100, 0.5)';
	
	textarea.style.borderRadius ='12px';

	textarea.style.position = 'absolute';
	textarea.style.left = 250 + Math.random()*500 +'px';
	textarea.style.top =  Math.random()*500 +'px';
	
	Textarea.push(textarea);
}