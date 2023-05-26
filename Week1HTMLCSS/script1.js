// document.getElementById("heading").innerHTML="E-store";

function checkValidation(){
    var fname=document.getElementById("fname").value;
    if(fname==""){
        document.getElementById("spanfname").innerHTML="Enter First name**";
        document.getElementById("spanfname").style.color="red";
        document.getElementById("spanfname").style.textAlign="left";
        return false;
    }
}

function checkfname(){
    //
    var fname=document.getElementById("fname").value;
    var patt1=/[A-Z][a-z]/;
    var resfname=patt1.test(fname);
    if(!resfname||fname.length<=3){
        document.getElementById("fname").style.borderColor="Red";
        document.getElementById("fname").style.borderWidth="2px";
    }
}

function checklname(){
    //
    var lname=document.getElementById("lname").value;
    var patt1=/[A-Z][a-z]/;
    var reslname=patt1.test(lname);
    if(!reslname||lname.length<=3){
        document.getElementById("lname").style.borderColor="Red";
        document.getElementById("lname").style.borderWidth="2px";
        return false;
    }
}

function checkuname(){
    //
    var uname=document.getElementById("uname").value;
    var patt1=/[A-Z][a-z][0-9]/;
    var reslname=patt1.test(lname);
    if(!reslname||lname.length<=5){
        document.getElementById("uname").style.borderColor="Red";
        document.getElementById("uname").style.borderWidth="2px";
        return false;
    }
}

function checkEmail(){
    //
    var email=document.getElementById("email").value;
    // var patt1=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/;
    var patt1=/^[A-Za-z0-9]+@[a-zA-Z0-9]+(:\.[a-zA-Z0-9-]+)*$/;
    var resEmail=patt1.test(email);
    if(resEmail==false){
        //
        document.getElementById("email").style.borderColor="Red";
        document.getElementById("email").style.borderWidth="2px";
        return false;
    }
}


function checkPhoneNumber(){
    var phone=document.getElementById("phone").value;
    var patt1=/[0-9]/;
    var resphonenumber=patt1.test(phone);
    if(!resphonenumber||phone.length>10||phone.length<10){
        document.getElementById("phone").style.borderColor="Red";
        document.getElementById("phone").style.borderWidth="2px";
        return false;
    }
}

var citcountriesObj = { Mumbai:"India" , Delhi:"India" , London:"UK" , Boston:"USA" , Sanghai:"China" };

function cityInput(){
    var city=document.getElementsByName("cityvalue")[0],val;
    city.addEventListener('input',function(){
        val=this.value;
    })
    document.getElementById("spanfname").innerHTML=val;
    // var coun,x=Object.keys(citcountriesObj);
    // for(const temp in x){
    //     var t=temp.localeCompare(city);
    //     if(t=="0"){
    //         //
            // document.getElementById("countryvalue").innerHTML=city;
            // document.getElementById("cityvalue").innerHTML=citcountriesObj["city"];
            // console.log(city);
    //         return;
    //     }
    // }
}