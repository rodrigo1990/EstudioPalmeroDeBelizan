	
var i = 0;
	function mostrarMenu(){

			if(i==0){
				$(".mobile-nav").addClass("animated bounceInRight");
				$(".overlap").addClass("animated fadeInDown");
				$(".overlap").show();
				$(".mobile-nav").show();
				$('body').css('overflow-y','hidden');
			}else if(i==2){

				$(".mobile-nav").removeClass("animated bounceOutRight");
				$(".overlap").removeClass("animated fadeOutDown");

				$(".mobile-nav").addClass("animated bounceInRight");
				$(".overlap").addClass("animated fadeInDown");

				$(".overlap").show();
				$(".mobile-nav").show();

				$('body').css('overflow-y','hidden');

			}


	}

	function cerrarMenu(){

			i=2;
			$(".mobile-nav").removeClass("animated bounceInRight");
			$(".overlap").removeClass("animated fadeInDown");

			$(".mobile-nav").addClass("animated bounceOutRight");
			$(".overlap").addClass("animated fadeOutDown");

			setTimeout(function(){ $(".overlap").hide(); }, 1000);

			$('body').css('overflow-y','scroll');



	}

	





