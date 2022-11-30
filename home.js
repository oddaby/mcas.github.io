(document).ready(function () {
    $("#one").click(function () {

        $(".notify").slideDown();
        setTimeout(function () {
            
            $(".notify").slideUp();

        },3000);
        
    });
});