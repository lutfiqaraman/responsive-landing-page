// Function - Jquery document ready

$(document).ready(function () {

    swap_content();
    transparent_menu();

});

// Function - Swap content by click on the icons of aside menu
function swap_content() {

    $(".testimonials_list").each(function () {

        var $this = $(this),
            $tab = $this.find("li.active_panel"),
            $link = $tab.find("a"),
            $panel = $($link.attr("href"));

        $this.on("click", ".panel_controller", function (e) {

            e.preventDefault();

            var $link = $(this),
                id = this.hash;

            if (id && !$link.is(".active_panel")) {

                $panel.removeClass("active_panel");
                $tab.removeClass("active_panel");

                $panel = $(id).addClass("active_panel");
                $tab = $link.parent().addClass("active_panel");
                
            }
            
        });

    });

    var $image = $(".testimonials_list a img");

    $image.each(function () {

        $(this).on("click", function () {

            $image.removeClass("shadow");
            $(this).addClass("shadow");

        });

    });
    
}

function transparent_menu() {

    var scroll_start = 0;
    var startchange = $('#start_normal_navbar');
    var offset = startchange.offset().top;

    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();

        if(scroll_start > offset) {

            $('#transparent_navbar').css({
                "background" : "#0e0e0e"
            })

        } else {

            $('#transparent_navbar').css({
                "background" : "transparent",
                "box-shadow" : "none"
            });

        }
    });


}