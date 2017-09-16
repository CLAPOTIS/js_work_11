var minus_btn=document.getElementsByClassName("minus_btn");
var plus_btn=document.getElementsByClassName("plus_btn");
var num=document.getElementsByClassName("num");
var unit_price=document.getElementsByClassName("unit_price");
var total_price=document.getElementsByClassName("total_price");
var T_num=document.getElementsByClassName("T_num")[0];
var T_price=document.getElementsByClassName("T_price")[0];
var M_expensive=document.getElementsByClassName("M_expensive")[0];
for(var i=0;i<minus_btn.length;i++){
	minus_btn[i].setAttribute("index",i);
	plus_btn[i].setAttribute("index",i);
	plus_btn[i].onclick=function(){
		var index=this.getAttribute("index");
		var count=Number(num[index].firstChild.nodeValue);
		num[index].firstChild.nodeValue=++count;
		Subtotal(index,count);
		T_count();
		T_money();
		M_expen();
	}
	minus_btn[i].onclick=function(){
		var index=this.getAttribute("index");
		var count=Number(num[index].firstChild.nodeValue);
		if(count!=0){
			num[index].firstChild.nodeValue=--count;
		}
		Subtotal(index,count);
		T_count();
		T_money();	
		M_expen();
	}
}

//小计
function Subtotal(index,count){
	var unit_money=unit_price[index].firstChild.nodeValue;
	total_price[index].firstChild.nodeValue=unit_money*count;
}
//总件数
function T_count(){
	var sum=0;
	for(var j=0;j<num.length;j++){		
		sum=sum+Number(num[j].firstChild.nodeValue);
		T_num.firstChild.nodeValue=sum;
	}
}
//总价格
function T_money(){
	var sum=0;
	for(var j=0;j<total_price.length;j++){		
		sum=sum+Number(total_price[j].firstChild.nodeValue);
		T_price.firstChild.nodeValue=sum;
	}
}
//求最贵的商品单价
function M_expen(){
	var arr=Array();
	for(var j=0;j<unit_price.length;j++){	
		//alert(num[j].firstChild.nodeValue);
		if(num[j].firstChild.nodeValue>0){
			arr[j]=Number(unit_price[j].firstChild.nodeValue);			
		}
	}
	if(arr.length==0){
		M_expensive.firstChild.nodeValue=0;
		alert('ss');
	}else{
		arr.sort(function(a,b){return b-a;});
		M_expensive.firstChild.nodeValue=arr[0];
	}				
}