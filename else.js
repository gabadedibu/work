var n,g,a;
function gain(){
	// 3. attach gain to an event=> html
	n = me.value;
	g = er.value;
	a = ge.value;

console.log(n,g,a,);

	if (a == "" || g == "" || n == "") {
		alert("pls input your details");
		}
		 else if (g.toLowerCase() == "female" && a >=18) {
		 	alert("welcome miss " +n+ "! you can proceed to the bar");

		}else if (g.toLowerCase() == "female" && a < 18) {
			alert("sorry miss " +n+ "! you cannot proceed to the bar.");
		}
			 else if (g.toLowerCase() == "male" && a >=18) {
		 	alert("welcome mr " +n+ "! you can proceed to the bar");

		}else if (g.toLowerCase() == "male" && a < 18) {
			alert("sorry mr " +n+ "! you cannot proceed to the bar.");
		}
		else if (g !== "male" && g !=="female" && g !=="gay" && g !=="lesbian"){
			alert("mr/miss " +n+ " enter a proper gender please!!!!");
		}

	
switch(n.toLowerCase() ){

	case "a" : alert("excellent!");
		break;
		case "b" : alert("very good!");
		break;
		case "c" : alert("good!");
		break;
		case "d" : alert("fair!");
		break;
		case "e" : alert("poor!");
		break;
		case "f" : alert("fail!");
		break;
		default: alert("please input a valid grade");

	}

}
	// 	seconds = sec.value;
 //         seconds--;
 //         sec.value=seconds;
 //         setTimeout(timer,1000)
 //         if (seconds <= 0) {
 //         	sec.value = 59;
 //         }
 //         if (seconds==0) {
 //         	minutes=min.value;
 //         	minutes--;
 //         	min.value=minutes;
 //         }
 // if (seconds==-1) {
 //         	minutes=min.value;
 //         	minutes--;
 //         	min.value=minutes;
 //         }
 //         if (minutes==0) {
 //         	hour=hou.value;
 //         	hour--;
 //         	hou.value=hour;
 //         }
 //           if (minutes==-1) {
 //         	hour=hou.value;
 //         	hour--;
 //         	hou.value=hour;
 //         }
 //          if (hour <= 0) {
 //         	min.value = 59;
 //         }
