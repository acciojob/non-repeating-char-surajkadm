//your JS code here. If required.
var str=prompt("Enter a string");
let splitedArr=str.split("");
console.log(splitedArr);
var newEle="";
var i=0;
while(i<splitedArr.length ) {
	if(splitedArr[i]==splitedArr[i+1]){
		i=i+2;
	}
	if(splitedArr[i]!=splitedArr[i+1]){
		newEle=splitedArr[i];
	}
	i++;
	
	}
alert(newEle);
