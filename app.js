 var x=0;
 var y=0;
 var i=1;
 var sdwig=10;
 function start(){
	var a=document.querySelectorAll('.edit');
	if(a.length>0)
		var q=parseInt(a[a.length-1].className.replace('edit ',''))+1;
	else if(a.length==0)
		q=1;
	return q;
 }
function file_name(){
	var file=document.querySelector('#qwer').files[0];
	console.log(file.name);
}
function moove(m,cl){
	var a=document.querySelectorAll('.edit');
	for(let q=0;q<a.length;q++)
	{
		if(-a[q].className.replace('edit ','')==i&&a[q].style.opacity=='100')
		{
			if(cl==1)
			{
				elem.style.display='block';
				elem.innerHTML='<button style="width:100%;display:block;" onclick="moove(1)">up</button>'+
				'<button style="width:50%; float:left;display:block;;" onclick="moove(4)">left</button>'+
				'<button style="width:50%; float:right;display:block;" onclick="moove(2)">right</button>'+
				'<button style="width:100%;display:block;" onclick="moove(3)">down</button>'+
				'<input type="text" style=" width:11vw;display:block;" placeholder="шаг сдвига" id="sdw" onchange="moove(13)">'+
				'<input type="text" style=" width:11vw;display:block;" placeholder="длина в %" id="wid" onchange="moove(5)">'+
				'<input type="text" style=" width:11vw;display:block;" placeholder="ширина в px" id="heig" onchange="moove(6)">'+
				'<input type="text" style=" width:11vw;display:block;" placeholder="текст" id="tex" onchange="moove(7)">'+
				'<input type="text" style=" width:11vw;display:block;" placeholder="цвет" id="col" onchange="moove(11)">'+
				'<input type="number" style=" width:11vw;display:block;" placeholder="слой" id="ind" onchange="moove(12)" min="0" max="99">'+
				'<button style="width:11vw;display:block;" onclick="moove(9)">отмена</button>'+
				'<button style="width:11vw;display:block;" onclick="moove(14)">удалить блок</button>';
			}
			else if(cl==2)
			{
				elem.style.display='block';
				elem.innerHTML='<button style="width:100%;display:block;" onclick="moove(1)">up</button>'+
				'<button style="width:50%; float:left;display:block;" onclick="moove(4)">left</button>'+
				'<button style="width:50%; float:right;display:block;" onclick="moove(2)">right</button>'+
				'<button style="width:100%;display:block;" onclick="moove(3)">down</button>'+
				'<input type="text" style=" width:11vw;display:block;" placeholder="шаг сдвига" id="sdw" onchange="moove(13)">'+
				'<input type="text" style=" width:11vw;display:block;" placeholder="длина в %" id="wid" onchange="moove(5)">'+
				'<input type="text" style=" width:11vw;display:block;" placeholder="ширина в px" id="heig" onchange="moove(6)">'+
				'<input type="text" style=" width:11vw;display:block;" placeholder="текст" id="tex" onchange="moove(7)">'+
				'<input type="text" style=" width:11vw;display:block;" placeholder="цвет" id="col" onchange="moove(11)">'+
				'<input type="text" style=" width:11vw;display:block;" placeholder="ссылка" id="link" onchange="moove(8)">'+
				'<input type="number" style=" width:11vw;display:block;" placeholder="слой" id="ind" onchange="moove(12)" min="0" max="99">'+
				'<button style="width:11vw;display:block;" onclick="moove(9)">отмена</button>'+
				'<button style="width:11vw;display:block;" onclick="moove(14)">удалить блок</button>';
			}
			else if(cl==3)
			{
				elem.style.display='block';
				elem.innerHTML='<button style="width:100%;display:block;" onclick="moove(1)">up</button>'+
				'<button style="width:50%; float:left;display:block;" onclick="moove(4)">left</button>'+
				'<button style="width:50%; float:right;display:block;" onclick="moove(2)">right</button>'+
				'<button style="width:100%;display:block;" onclick="moove(3)">down</button>'+
				'<input type="text" style=" width:11vw;display:block;" placeholder="шаг сдвига" id="sdw" onchange="moove(13)">'+
				'<input type="text" style=" width:11vw;display:block;" placeholder="длина в %" id="wid" onchange="moove(5)">'+
				'<input type="text" style=" width:11vw;display:block;" placeholder="ширина в px" id="heig" onchange="moove(6)">'+
				'<input type="text" style=" width:11vw;display:block;" placeholder="название картинки" id="sr" onchange="moove(10)">'+
				'<input type="number" style=" width:11vw;display:block;" placeholder="слой" id="ind" onchange="moove(12)" min="0" max="99">'+
				'<button style="width:11vw;display:block;" onclick="moove(9)">отмена</button>'+
				'<button style="width:11vw;display:block;" onclick="moove(14)">удалить блок</button>';
			}
			 x=parseInt(a[q].style.right);
			 y=parseInt(a[q].style.top);
			 a[q].style['border']='5px solid black';
			 if(m==0)
			 {
				 wid.value=parseInt(a[q].style.width);
				 heig.value=parseInt(a[q].style.height);
				 ind.value=parseInt(a[q].style['z-index']);
				 sdw.value=sdwig;
				 if(cl==1)
				 {
				 tex.value=a[q].innerHTML;
				 col.value=a[q].style['background-color'];//rgb(0,0,0)							#000000
				 }
				 else if(cl==2)
				 {
				 tex.value=a[q].innerHTML;
				 col.value=a[q].style['background-color'];
				 link.value=a[q].href;
				 }
				 else if(cl==3)
				 sr.value=a[q].src;
			 }
			 else if(m==1)
			 y=y-sdwig;
			 else if(m==2)
			 x=x-sdwig;
			 else if(m==3)
			 y=y+parseInt(sdwig);
			 else if(m==4)
			 x=x+parseInt(sdwig);
			 else if(m==5)
				a[q].style.width=wid.value+'%';
			else if(m==6)
				a[q].style.height=heig.value+'px';
			else if(m==7)
				a[q].innerHTML=tex.value;
			else if(m==8)
				a[q].href='/'+link.value;
			else if(m==9)
			{
				a[q].style['border']='0';
				wid.value='';
				heig.value='';
				if(cl==1)
				 tex.value='';
				 else if(cl==2)
				 {
				 tex.value='';
				 link.value='';
				 }
				 else if(cl==3)
				 sr.value='';
				elem.style.display='none';
			}
			else if(m==10)
			{
				a[q].src=sr.value;
			}
			else if(m==11)
			 a[q].style['background-color']=col.value;
			else if(m==12)
			{
				console.log('12');
		 if(ind.value<0)
			 ind.value=0;
		 else if(ind.value>100)
			 ind.value=100;
		 a[q].style['z-index']=ind.value;
			}
			else if(m==13)
			 sdwig=sdw.value;
			else if(m==14)
			{
				moove(9);
				a[q].style.opacity='0';
				if(q==a.length-1)
				{
					deletee(1);
				}
				if(q==0)
				{
					deletee(0);
				}
				a[q].style['z-index']='-1';
				return;
			}
			 a[q].style.right=x+'px';
			 a[q].style.top=y+'px';
		}
	}
}
 function create(){
	 i=start();
	 blockk.innerHTML+='<div class=\'edit '+i+'\' style=\'width:100%; height:100px;position:relative;right:0;top:0;background-color:#ff8d4f; z-index:0; opacity:100;\' onclick=\'javascript:moove(9);i='+(-i)+'; moove(0,1);\'>это блок</div\>';
 }
 function create_a(){
	 i=start();
	 blockk.innerHTML+='<a class=\'edit '+i+'\' style=\'width:100%; height:100px;position:relative;right:0;top:0;display:block;background-color:#ff8d4f; z-index:0; opacity:100;\' onclick=\'javascript:moove(9);i='+(-i)+'; moove(0,2);\'>это ссылка</a\>';
 }
  function create_img(){
	 i=start();
	 blockk.innerHTML+='<img class=\'edit '+i+'\' style=\'width:100%; height:100px;position:relative;right:0;top:0;display:block;background-color:#ff8d4f; z-index:0; opacity:100;\' onclick=\'javascript:moove(9);i='+(-i)+'; moove(0,3);\'>';
 }
 function create_file(a){
	 if(a==0)
	 {
	 load=new Blob([html.innerHTML],{type:'text/html'}); 
	 loadd1.href=URL.createObjectURL(load);
	 if(namee.value!='')
		loadd1.download=namee.value;
	 else
		loadd1.download='index.html';
	 }
	 else if(a==1)
	 {
	 dob.style.display='none';
	 dob1.style.display='none';
	 load=new Blob([html.innerHTML],{type:'text/html'}); 
	 loadd2.href=URL.createObjectURL(load);
	 if(namee.value!='')
		loadd2.download=namee.value;
	 else
		loadd2.download='index.html';
	 dob.style.display='block';
	 dob1.style.display='block';
	 }
 }
 function deletee(r){
	var a=document.querySelectorAll('.edit');
	if(r==0)
		for(let j=0;j<a.length;j++)
	{
		if(a[j].style.opacity==0)
		{
			a[j].outerHTML='';
		}
		else
		{
			start();
			return;
		}
	}
	if(r==1)
	for(let j=a.length-1;j>=0;j--)
	{
		if(a[j].style.opacity==0)
		{
			a[j].outerHTML='';
			start();
			i=(-i+2);
		}
		else
			return;
	}
 }
