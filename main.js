// bai 1
function submit() {
    var num = parseInt (document.getElementById ("txtNum").value);
    var count = 0, sum = 0 ;
    do
    {
        count++;
        sum = sum + count;
    }
    while ( sum <= num) 
    document.getElementById ("noti").innerHTML = "n = " + parseInt(count);
}
// bai 2
function submit2() {
    var x = parseInt (document.getElementById ("txtNum2").value);
    var n = parseInt (document.getElementById ("txtNum3").value);
    var count1 = 0, tongs = 0 ;
    do
    {
        count1++;
        tongs += Math.pow(x,count1);
    }
    while ( count1 < n) 
    document.getElementById ("noti2").innerHTML = "S(n) = " + tongs;
}
// bai 3
function submit1() {
    var n = parseInt (document.getElementById ("txtNum1").value);
    var count1 = 0, multi = 1 ;
    do
    {
        count1++;
        multi = multi * count1;
    }
    while ( count1 < n) 
    document.getElementById ("noti1").innerHTML = "n! = " + multi;
}

// bai 4
function submit5() {
    document.getElementById("noti5").innerHTML="";
    var n = parseInt (document.getElementById ("txtNum5").value);
    var x = document.getElementsByClassName('le');
    var y = document.getElementsByClassName('chan');
    
    for ( var i=0; i<n ; i++)
    {
        
        if ((i%2)==0)
        {
            const para = document.createElement("div");
            para.innerHTML = "đây là số lẻ";
            para.setAttribute("class", "le");
            document.getElementById("noti5").appendChild(para);
       }
       else
        {
            const para = document.createElement("div");
            para.innerHTML = "đây là số chẵn";
            para.setAttribute("class", "chan");
            document.getElementById("noti5").appendChild(para);
       }
    }
    for (var i=0;i<x.length;i++) 
    {
        x[i].classList.add('bg-primary');
        x[i].classList.remove('bg-danger');
    }
    for (var i=0;i<y.length;i++) 
    {
        y[i].classList.remove('bg-primary');
        y[i].classList.add('bg-danger');
    }
       
}


// function submit() {
// var content = "";
// var content_HTML = "";
// for ( var i = 0; i < 5 ; i++ )
// {  
//     content =  content + "*&nbsp;&nbsp;&nbsp;	" ;  
//     content_HTML += "<div>"+ content + "</div>";
//     console.log(content_HTML);
// }
// document.getElementById ("noti").style.display ="block";
// document.getElementById ("noti").innerHTML = content_HTML;
// }


// function submit1() {
//      var n = parseInt (document.getElementById ("Num1").value) ||0;
//      var x = parseInt (document.getElementById ("Num2").value) ||0;
     

//     var count1 = 0; multi = 1 ;
//     // var contentHTML = "";
//     do
//     {
//         count1++;
//         multi = multi * count1;
//     }
//     while ( count1 < n) 
//     document.getElementById ("noti1").style.display ="block";
//     document.getElementById ("noti1").innerHTML = multi;
// }