$(document).ready(function () {
    $('#all').click(function () {
        $(".cake ").show();
        $(".juice").show();
        $(".chocolate ").show();
        $(".sandwich").show(); 
    }
    )

    $('#sandwich').click(function () {
        $(".cake ").hide();
        $(".juice").hide();
        $(".chocolate ").hide();
        $(".sandwich").show(); !important
    }
    )
    $('#cake').click(function () {
        $(".sandwich").hide();
        $(".juice").hide();
        $(".chocolate ").hide();
        $(".cake").show(); !important
    }
    )
    $('#juice').click(function () {
        $(".cake ").hide();
        $(".sandwich").hide();
        $(".chocolate ").hide();
        $(".juice").show(); !important
    }
    )
    $('#chocolate').click(function () {
        $(".juice ").hide();
        $(".cake ").hide();
        $(".sandwich").hide();
        $(".chocolate").show(); !important
    }
    )
});

$(document).ready(function () {
    $('#1').click(function () {
        $(".i2 ").hide();
        $(".i3").hide();
        $(".i4 ").hide();
        $(".i5 ").hide();
        $(".i1").show(); !important
    }
    )
    $('#2').click(function () {
        $(".i1").hide();
        $(".i3").hide();
        $(".i5 ").hide();
        $(".i4 ").hide();
        $(".i2").show(); !important
    }
    )
    $('#3').click(function () {
        $(".i1").hide();
        $(".i2").hide();
        $(".i5 ").hide();
        $(".i4 ").hide();
        $(".i3").show(); !important
    }
    )
    $('#4').click(function () {
        $(".i1").hide();
        $(".i2").hide();
        $(".i3 ").hide();
        $(".i5 ").hide();
        $(".i4").show(); !important
    }
    )
    $('#5').click(function () {
        $(".i1").hide();
        $(".i2").hide();
        $(".i3 ").hide();
        $(".i4 ").hide();
        $(".i5").show(); !important
    }
    )
});




