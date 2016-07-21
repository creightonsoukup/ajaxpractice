$(document).ready(function() {
    $.ajax({
        url: 'http://pokeapi.co/api/v2/pokemon/',
        error: function(err) {
            console.error(err)
        },
        method: 'GET',
        success: function(data) {

            for (var i = 0; i < data.results.length; i++) {
                $("#pokemon").append("<li>" + data.results[i].name + "</li>")
            }

        }
    })
})
