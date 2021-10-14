


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
        "url" : `https://coinbaba.herokuapp.com/api/users/${data.id}`,
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

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "PUT"
        }

        
            $.ajax(request).done(function(response){
                location.reload();
            })
        

    })
}