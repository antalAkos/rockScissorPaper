$(document).ready(function() {





});

function listenToChoice() {
    $(".card-img-top").on("click", function() {
        var data = this.attr("id");
        $.ajax({
            type: 'POST',
            url: '',
            data: data,
            
        });
    })
}