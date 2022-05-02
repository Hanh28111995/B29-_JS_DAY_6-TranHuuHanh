// bai 1
function submit() {
    var num = parseInt (document.getElementById ("txtNum").value);
    var count = 0, sum = 0 ;
    console.log(num);
    if ( isNaN(num) ) {document.getElementById ("noti").innerHTML = "Nhập số n";}
    else
    {
    do
    {
        count++;
        sum = sum + count;
    }
    while ( sum <= num) 
    document.getElementById ("noti").innerHTML = "n = " + parseInt(count);
}
}
// bai 2
function submit2() {
    var x = parseInt (document.getElementById ("txtNum2").value);
    var n = parseInt (document.getElementById ("txtNum3").value);
    if((isNaN(x))||(isNaN(n))) {document.getElementById ("noti2").innerHTML = "Nhập x và n" ;}
    else{
    var count1 = 0, tongs = 0 ;
    do
    {
        count1++;
        tongs += Math.pow(x,count1);
    }
    while ( count1 < n) 
    document.getElementById ("noti2").innerHTML = "S(n) = " + tongs;
    }}
// bai 3
function submit1() {
    var n = parseInt (document.getElementById ("txtNum1").value);
    if ( isNaN(n) ) {document.getElementById ("noti1").innerHTML = "Nhập số n";}
    else 
    {
    var count1 = 0, multi = 1 ;
    do
    {
        count1++;
        multi = multi * count1;
    }
    while ( count1 < n) 
    document.getElementById ("noti1").innerHTML = "n! = " + multi;
}
}

// bai 4
function submit5() {
    document.getElementById("noti5").innerHTML="";
    var n = parseInt (document.getElementById ("txtNum5").value);
    for ( var i=0; i<n ; i++)
    {
        if ((i%2)==0)
        {
            const para = document.createElement("div");
            para.innerHTML = "đây là số lẻ";
            para.style.background =  'blue'; 
            document.getElementById("noti5").appendChild(para);
       }
       else
        {s
            const para = document.createElement("div");
            para.innerHTML = "đây là số chẵn";
            para.style.background =  'red';
            document.getElementById("noti5").appendChild(para);
       }
    }   
}

// bai 5 ////////////////////bai tap them /////////////////////
function submit6() {
    var count = 0 ;
    var iii = "";
    var n = parseInt (document.getElementById ("txtNum6").value)||0;
    document.getElementById ("noti6").innerHTML = "";
    if (n<=0) {document.getElementById ("noti6").innerHTML = "Nhập lại số n";}
    else
    {
        // document.getElementById ("noti6").innerHTML = "n = ";
        for(var i =1; i<=n; i++)
        {
            for(var y =1; y<=n; y++)
            {
                if( (i%y)==0 ) { count++;} 
            }
            if (count == 2) 
            { 
                 iii = iii + i + " ";
                count = 0;
                console.log(iii);
            }
            else
            {
                count = 0; 
            }
        }
        document.getElementById ("noti6").innerHTML = "n = "+ iii;
    }
  
}

