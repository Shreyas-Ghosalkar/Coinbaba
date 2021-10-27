


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



if((window.location.pathname == "/") || (window.location.pathname == "/search")){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        var hasvoted=Cookies.get("Voted")
		if(cookiesEnabled()){
			if(hasvoted !="true"){
				var request = {
					"url" : `https://coinbaba.herokuapp.com/api/users/${id}`,
					"method" : "PUT"
				}

				
					$.ajax(request).done(function(response){
						Cookies.set("Voted","true",{expires:1})
						location.reload();
					})
			   }
				else{
					alert("Wait for 24 Hours to vote again");
				}
				
		}else
		{
			alert("Enable Cookies!");
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
    var hasvoted=Cookies.get("Voted")
	 if(cookiesEnabled()){
			if(hasvoted !="true"){
			var request = {
				"url" : `https://coinbaba.herokuapp.com/api/users/${data.id}`,
				"method" : "PUT",

			}

			$.ajax(request).done(function(response){
				Cookies.set("Voted","true",{expires:1})
				location.reload()
			})
		}
		else
		{
			alert("Wait for 24 Hours to vote again");
		}
	 }
	 else
	 {
		 alert("Enable Cookies!");
	 }

})
