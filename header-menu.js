function menu(){
    $(".menu").toggle();

    if($(".menu").is(":visible")){
        $(document).mouseup(function(e){
            var container = $("#header");
            
            if(!container.is(e.target) && container.has(e.target).length === 0){
                $(".menu").hide();
            }
        });
    }
}