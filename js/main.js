
$(document).ready(function (){
	$('.skillset').hide();
	$('.skillset').fadeIn(1000);
	$('.projects').hide();
	$('.projects-button').on('click', function(){
		//when button is clicked, it should change background and button text color to .active css
		//$('.projects-button').toggleClass('active');
		// only the button clicked should toggle
		$(this).toggleClass('active');
		// only the button clicked should toggle
		//$(this).next().toggle();
		$(this).next().slideToggle(400);
		$(this).text('Project Viewed');

	})
});

