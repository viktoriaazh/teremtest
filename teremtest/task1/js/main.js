
$(document).ready(function() {
   $('.btn-warning').click(function() {
      $('.one-block').slideToggle(300);
      return false;
   });
   $('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
   });
   $('.button-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});        
 
	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});

document.querySelector('.btn-success').onclick = function() {
   let changeDiv = document.querySelectorAll('.change-block');
   changeDiv[0].parentNode.insertBefore(changeDiv[1], changeDiv[0]);
}
