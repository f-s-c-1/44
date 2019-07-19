 // 存入cookie
 function setCookie(name,value,iDay){
    var oDate=new Date()
    oDate.setDate(oDate.getDate()+iDay);
    document.cookie=name+'='+value+';expires='+oDate;
}

// function setCookie(name, value, iDay) {
// 	var oDate = new Date()
// 	oDate.setDate(oDate.getDate() + iDay);
// 	//path=/  设置cookie的访问权限，"/"表示全网络
// 	//escape与unescape是一对编码解码函数 
// 	//一般用于url中非ASCII字符的编码和解码
// 	// &  escape('&')  =  %26
// 	//unescape('%26')  =   &

// 	/*
// 	 编码函数：escape()  encodeURI()  encodeURIComponent()
// 	 相对应的解码函数：unescape()  decodeURI() decodeURIComponent()
// 	*/
// 	// return document.cookie = name + '=' + escape(value) + ';path=/;expires=' + oDate;
	
// 	return document.cookie = name + '=' + (value) + ';path=/;expires=' + oDate;

// }

// 获取cookie
function getCookie(name){
    var arr=document.cookie.split('; ')
    // console.log(arr)
		for(var i=0;i<arr.length;i++){
			arr2=arr[i].split('=')
			// console.log(arr2)
		if(name==arr2[0]){
		   return arr2[1]
		}
    }
    return '';   //第一次进入没有value值
}
// alert(getCookie('user'))

//cookie的删除
function removeCookie(name){
    setCookie(name,1,-1)
}