$(document).ready(function () {
	$('.slider').slick({
		infinite: true,
		speed: 600,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 8000,
		centerMode: true,
		mobileFirst: true,
		arrows: true,
		dots:true,
		slidesToShow: 1, // Mobile-first baseline

		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 5,
				}
			}
		],
		
		prevArrow: `
			<button type="button" class="slick-prev custom-arrow">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24">
					<path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
				</svg>
			</button>
		`,
		nextArrow: `
			<button type="button" class="slick-next custom-arrow">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24">
					<path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/>
				</svg>
			</button>
		`
	});
});
