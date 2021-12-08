


$("#add_user").submit(function(event){
    alert("Coin added Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `https://coinbaba.herokuapp.com/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

function cookiesEnabled() 
    {
        var cookiesEnabled = (navigator.cookieEnabled) ? true : false;

        if (typeof navigator.cookieEnabled == "undefined" && !cookiesEnabled) 
        {
            document.cookie = "mytestcookie";
            cookiesEnabled = (document.cookie.indexOf("mytestcookie") != -1) ? true : false;
        }

        return cookiesEnabled;
    }




if((window.location.pathname == "/") || (window.location.pathname=="/search")){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        var hasvoted=Cookies.get("iopl")
        if(cookiesEnabled()){
            if(hasvoted !="true"){
                var request = {
                    "url" : `https://coinbaba.herokuapp.com/api/users/${id}`,
                    "method" : "PUT"
                }

                
                    $.ajax(request).done(function(response){
                        Cookies.set("iopl","true",{expires:1})
                        popup()
                        delay(function(){
                            location.reload()
                        }, 2000 );
                    })
            }
                else{
                    popup24()
                }
            }
            else
            {
                
                popupcookie()
            }
        

    })
}

$("#coin_details").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    var id = $(this).attr("data-id")
    var hasvoted=Cookies.get("iopl")
    if(cookiesEnabled()){
    if(hasvoted !="true"){
    var request = {
        "url" : `https://coinbaba.herokuapp.com/api/users/${data.id}`,
        "method" : "PUT",

    }

    $.ajax(request).done(function(response){
        Cookies.set("iopl","true",{expires:1}) 
        popup()
        delay(function(){
            location.reload()
        }, 2000 );
          
             
    })
    
}
else
{
    popup24()

}
    }
    else
    { 
        popupcookie()
    }
})

var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();
/*
const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector("button");
acceptBtn.onclick = ()=>{
  //setting cookie for 1 month, after one month it'll be expired automatically
  document.cookie = "CookieBy=CoinBaba; max-age="+60*60*24*30;
  if(document.cookie){ //if cookie is set
    cookieBox.classList.add("hide"); //hide cookie box
  }else{ //if cookie not set then alert an error
    alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
  }
}
let checkCookie = document.cookie.indexOf("CookieBy=CoinBaba"); //checking our cookie
//if cookie is set then hide the cookie box else show it
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");

*/
function popup(){
    swal({
        title: "Voted!",
        icon: "success",
        button:"AwYeS"
      });

}
function popup24(){
    swal("", "Wait for 24 hours to Vote Again");

}
function popupcookie(){
    swal("Accept Cookies", "Please enable cookies from your browser settings to Vote");

}
