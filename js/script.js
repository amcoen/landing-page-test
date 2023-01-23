  $(document).ready(function() {
    $('.awards .bi-star').each(function() {
      $(this).hover(function() {
        $(this).prevAll().addBack().addClass( "yellow" );
      }, function() {
        if (!$(this).parent().attr("data-rating")) {
          $(this).prevAll().addBack().removeClass( "yellow" );
        } else {
          $(this).siblings().addBack().each(function(index) {
            index + 1 <= $(this).parent().attr("data-rating") ? 
              $(this).addClass( "yellow" ) : $(this).removeClass( "yellow" );
          });
        }
      }).click(function () {
        $(this).parent().attr("data-rating", $(this).prevAll().length + 1);
      });
    });
  });