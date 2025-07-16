import { getAllBrands } from "./app.js";
$(document).ready(function () {
	const $slider = $('.slider');
	function getResponsiveSettings(cardCount) {
		const breakpoints = [
			{ breakpoint: 1024, slides: 3 },
			{ breakpoint: 768, slides: 2 },
			{ breakpoint: 640, slides: 1 }
		];
	
		return breakpoints
			.filter(bp => cardCount >= bp.slides)
			.map(bp => ({
				breakpoint: bp.breakpoint,
				settings: {
					slidesToShow: bp.slides
				}
			}));
	}

	function createSkeletonSlide() {
		return `
			<div class="slide">
				<div class="logo-wrapper">
					<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading" />
				</div>
			</div>
		`;
	}

	function loadSkeletons(count) {
		for (let i = 0; i < count; i++) {
			$slider.append(createSkeletonSlide());
		}
	}
	getAllBrands().then((data) => {
		const responsiveSettings = getResponsiveSettings(data.length);
		loadSkeletons(Math.max(3, data.length));
			$('.slider').slick({
				infinite: data.length > 1,
				speed: 600,
				autoplay: true,
				autoplaySpeed: 8000,
				centerMode: data.length === 1, // only center if one slide
				centerPadding: '0px',
				dots: true,
				mobileFirst: true,
				slidesToShow: 1,
				responsive: responsiveSettings, // Mobile-first baseline

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
		setTimeout(() => {
			$slider.slick('slickRemove', null, null, true); // Clear all slides (skeletons)
			data.forEach(item => {
				console.log(item)
				const slideHTML = `
					<div class="slide">
						<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="card">
							<div class="logo-wrapper">
								<img src="${item.imageUrl}" alt="${item.title}" />
							</div>
						</a>
					</div>
				`;
				$slider.slick('slickAdd', slideHTML);
			});
		}, 2000);
	})
});
