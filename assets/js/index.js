


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

    var id = $(this).attr("data-id")
    var request = {
        "url" : `http://coinbaba.herokuapp.com/api/users/${data.id}`,
        "method" : "PUT",

    }

    $.ajax(request).done(function(response){
        location.reload()
    })

})


if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        var hasvoted=Cookies.get("Voted")
        if(hasvoted !="true"){
            var request = {
                "url" : `http://coinbaba.herokuapp.com/api/users/${id}`,
                "method" : "PUT"
            }

            
                $.ajax(request).done(function(response){
                    Cookies.set("Voted","true",{expires:2})
                    location.reload();
                })}
            else{
                alert("Already Voted");
            }
        

    })
}