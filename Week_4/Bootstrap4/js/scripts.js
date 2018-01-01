$("#carousel-button").click(function(){
			$("#mycarousel").carousel( { interval: 2000 } );
                if ($("#carousel-button").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carousel-button").children("span").removeClass('fa-pause');
                    $("#carousel-button").children("span").addClass('fa-play');
                }
		
                else if ($("#carousel-button").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carousel-button").children("span").removeClass('fa-play');
                    $("#carousel-button").children("span").addClass('fa-pause');                       
                }
			
        });

$(document).ready(function(){
		$("#reserveBtn").click(function(){
        	$("#reserveModal").modal();
    	});
    	$("#loginBtn").click(function(){
        	$("#loginModal").modal();
    	});
})
		 

//
//$(document).ready(function (){
//    $('#mycarousel').carousel({interval : 2000});
//
//    $("#carousel-button").click(function(){
//        if ($("#carousel-button").children("span").hasClass('fa-pause')) {
//            $("#mycarousel").carousel('pause');
//            $("#carousel-button").children("span").removeClass('fa-pause');
//            $("#carousel-button").children("span").addClass('fa-play');
//        }
//        else if ($("#carousel-button").children("span").hasClass('fa-play')){
//            $("#mycarousel").carousel('cycle');
//            $("#carousel-button").children("span").removeClass('fa-play');
//            $("#carousel-button").children("span").addClass('fa-pause');                    
//        }
//    });
//
//    // Show Login Modal 
//    $('#btnLoginModal').click(function(){
//        $('#loginModal').modal('show');
//    });
//
//    // Hide Login Modal 
//    $('.btnCancelLogin').click(function(){
//        $('#loginModal').modal('hide');
//    });
//
//    // Show Reserve Table Modal
//    $('#btnReserveModal').click(function(){
//        $('#reserveModel').modal('show');
//    });
//
//    // Hide Reserve Table Modal 
//    $('.btnCancelReseve').click(function(){
//        $('#reserveModel').modal('hide');
//    });
//
//
//
//});

