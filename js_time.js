var ddls="2023/3/5 20:00:00";
function time() {
    var date = new Date();
    var now= date.getTime();
    //settime();
    var ddl=ddls;
    var endDate = new Date(ddl);
    var end = endDate.getTime();

    var leftTime = end-now;
    var d,h,m,s;
    if(leftTime>=0){
        d = Math.floor(leftTime/1000/60/60/24);
        h = Math.floor(leftTime/1000/60/60%24);
        m = Math.floor(leftTime/1000/60%60);
        s = Math.floor(leftTime/1000%60);
    }
     document.getElementById("_d").innerHTML = d+"天";  
     document.getElementById("_h").innerHTML = h+"时";  
     document.getElementById("_m").innerHTML = m+"分";  
     document.getElementById("_s").innerHTML = s+"秒"; 
     setInterval("time()", 1000);
};
