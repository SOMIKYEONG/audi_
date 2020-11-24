window.addEventListener('DOMContentLoaded', function () {

    $(".click").click(function () {
        $(".sub").addClass('active');
    });
    $("#line-closer").click(function () {
        $(".sub").removeClass('active');
    });

    $("#click1").click(function () {
        $("#click2").removeClass('active');
        $("#click1").addClass('active');
    });
    $("#click2").click(function () {
        $("#click1").removeClass('active');
        $("#click2").addClass('active');
    });

    $(document).ready(function () {
        $(".sec2_2").show();
        $(".sec2_3").hide();
        /*  $(".sec2_1 ul li").click(function (e) {
              var a = $(this).index();
              $(".Btn2 div").hide();
              $(".Btn2 div").eq(a).show();
          });*/
        $("#click1").click(function () {
            $(".sec2_2").show('smooth');
            $(".sec2_3").hide();
        });
        $("#click2").click(function () {
            $(".sec2_3").show('smooth');
            $(".sec2_2").hide();
        });
    });
    $(document).ready(function () {
        $(".border2").hide();

        $(".border").click(function () {
            $(".border").hide();
            $(".border2").show();
            $("#right").animate({
                "margin-left": "-=1600px"
            }, "slow");
        });
        $(".border2").click(function () {
            $(".border2").hide();
            $(".border").show();
            $("#right").animate({
                "margin-left": "+=1600px"
            }, "slow");
        });
    });




});
