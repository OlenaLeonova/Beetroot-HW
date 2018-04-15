$(function() {
	$('.slider1').slick({
		slidesToShow: 1 /*сколько изначально показывается слайдов*/,
		slidesToScroll: 1 /*количество прокручиваемых слайдов за один проход*/,
		autoplay: true /*автопрокрутка*/,
		speed: 2000 /*плавность слайдера*/,
		autoplaySpeed: 4000 /*периодичность прокрутки*/,
		dots: true /*наличие точек*/,
		/*dotsClass: "my-dots",/*свой класс для настройки точек*/

		fade: true /*проявление слайдеров вместо выезжания*/,
		pauseOnDotsHover: true /*при наведении на точки слайдер останавливается*/,
		prevArrow: '<img id = "prev" src="images/resentWorks/arrowR.png" alt="">',
		nextArrow: '<img id = "next" src="images/resentWorks/arrowL.png" alt="">'
		/*arrows: false   - отключить стрелки*/
		/*infinite:false  - слайдер не будет листаться безконечно*/
		/*vertical:true;  - вертикальная прокрутка слайдера*/
		/*rows:2          - количество строк в слайдере(по умолчанию одна)*/
		/*slidesPerRow:2  - количество слайдеров в строке*/

		/*настройки для адаптации слайдера под разные разрешения
			responsive: [
	{
		breakpoint: 1024,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		}
	},
	{
		breakpoint: 600,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	},
	{
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}
	// You can unslick at a given breakpoint now by adding:
	// settings: "unslick"
	// instead of a settings object
]
			*/
	});

	$('.slider2').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		dots: false,
		speed: 2000,
		prevArrow: '<img id = "prev" src="../../images/meetOurTeam/arrowR.png" alt="">',
		nextArrow: '<img id = "next" src="../../images/meetOurTeam/arrowL.png" alt="">',
		/*adaptability*/

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
});
