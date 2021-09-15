// $(document).ready(function(){
//     console.log("mazo")

//     // jQuery methods go here...
  
//   });


$(document).ready(function(){
    //toggle between image and showing//
    $("#agenda__image").click(function(){
        $("#agenda__image").toggle();
        $("#design-showing").show();
        
    })

    $("#development").click(function(){
        $("#Dev_image").toggle();
        $("#development-showing").show();
    })

    $("#product").click(function(){
        $("#product_image").toggle();
        $("#product-management-showing").show();
    })

})