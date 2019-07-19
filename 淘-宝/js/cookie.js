function setCookie (name,value,iDay) {
	var oDate=new Date()
	oDate.setDate(oDate.getDate()+iDay);
	//path=/  设置cookie的访问权限，"/"表示全网络
	//escape与unescape是一对编码解码函数 
	//一般用于url中非ASCII字符的编码和解码
	// &  escape('&')  =  %26
	//unescape('%26')  =   &
	
	/*
	 编码函数：escape()  encodeURI()  encodeURIComponent()
	 相对应的解码函数：unescape()  decodeURI() dencodeURIComponent()
	 * */
	return document.cookie=name+'='+escape(value)+';path=/;expires='+oDate;
}	

function getCookie (name) {
	var arr=document.cookie.split('; ')
	// alert(arr)
	for(var i=0;i<arr.length;i++){
		var arr2=arr[i].split('=');
		// alert(arr2)
		if(arr2[0]==name){
			return unescape(arr2[1]);
		}
		
	}
	return '';
}
function removeCookie (name) {
	setCookie(name,1,-1);
}