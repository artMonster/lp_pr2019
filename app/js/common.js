if ($(window).width() < 751) {
	
	/*
	$('[data-srcset], [srcset]').each( function() {
		var m_link = $(this).attr('data-srcset');
		if (m_link) {
			$(this).attr('data-srcset', 'm/' + m_link );
		} else {
			m_link = $(this).attr('srcset');
			$(this).attr('srcset', 'm/' + m_link );
		}
	});
	*/
	/*
	$('img').each( function() {
		if (!$(this).hasClass('lazyload') ){
			var m_link = $(this).attr('src');
			$(this).attr('src', 'm/' + m_link );
		} else {
			var m_link = $(this).attr('data-src');
			$(this).attr('data-src', 'm/' + m_link );	
		}
	});
	*/
}

$(window).on('load', function() {
	$('body').addClass('is-preload');
	//if ($(window).scrollTop() > 0) {
	//	$('html').addClass('scrolled');
	//}

	

	var t = 150;

	window.setTimeout(function() {
		$('body').removeClass('is-preload').addClass('load');
		$('#app').removeClass('loading');
		var loc = $('.selected-flag').attr('title');
		var s = loc.split("(")[1];
		var l = s.split(")")[0];
		var flag = $('.selected-flag').html();
		$('[name=l_loc]').val(loc);
		$('#strana').html(flag + '<span>' + l + '</span>');

		console.log( l );
	}, t);
});

$(document).ready(function() {


	

	$('iframe').each(function() {
    	var w = +$(this).width();
    	var h = w/1.5 - 30;

    	$(this).closest('.video-wrap').css('height', h);
    });


	var fiveSeconds = new Date().getTime() + 625000;
	var stop = true;

	var countCont = $('.countdown');

	if ( countCont.hasClass('two') ) {
		fiveSeconds = new Date().getTime() + 24*60*60*1000;
	}
	
	if (countCont.length) {
	countCont.countdown(fiveSeconds, {elapse: true})
	.on('update.countdown', function(event) {
	  var $this = $(this);
	  if (event.offset.totalSeconds == 0) {
	    stop = false;
	  } 

	  if (stop) {
	    $this.html(event.strftime('<div><span class="numb">%H</span> <span class="text">часов</span></div> <div><span class="numb">%M</span> <span class="text">минут</span></div> <div><span class="numb">%S</span> <span class="text">секунд</span></div>'));    
	  } else {
	    $this.html(event.strftime('<div><span class="numb">Время вышло</span></div>'));
	  }
	  
	});
	}


});

	

$(function() {

	$('body').mouseleave(function(event) {
		if (event.pageY - window.pageYOffset < 0 && !localStorage.popmodal) {
			if (!$(this).hasClass('m-open')) {
				localStorage.popmodal = 1;
				$.magnificPopup.open({
					items: {
						src: '#popup-live', // can be a HTML string, jQuery object, or CSS selector
						type: 'inline'
					},
					tClose: 'Закрыть',
					fixedContentPos: false,
					fixedBgPos: false,
					overflowY: 'auto',
					closeBtnInside: true,
					preloader: true,
					mainClass: 'mfp-zoom',
					removalDelay: 300,
				});
			}
		}
	});

	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	function hide_names(){
     if ($('#plusOne').hasClass('visible')){
          $('#plusOne').removeClass('visible');
       } 
    };


  function update_names(){
     var arr = ["Татьяна",
"Юлия ",
"Елена",
"Ольга",
"Наталья",
"Гульмира",
"Алия",
"Вита",
"Инна Иванченко",
"Елена",
"Виталий",
"Мери",
"Дмитрий",
"Мария ",
"Лада",
"Татьяна",
"natalia",
"Вероника",
"Татьяна",
"Галина",
"Ирина",
"Ника",
"Лия",
"Галя",
"Алена",
"Galina",
"Ольга ",
"Ирина",
"Sveta",
"Aigerim",
"Андрей",
"Елена",
"Nika",
"Вика",
"софья",
"Азиза",
"Светлана",
"Дания",
"Азиза",
"Helen",
"Елизавета ",
"Fira",
"Айнур",
"Динора",
"Гульфайруз ",
"Наталья",
"Elena Kerdivar",
"Гульназ",
"Айнур",
"Tamara",
"Yana",
"Оксана ",
"Beck",
"Анна",
"Айя",
"Елена",
"Ann",
"Дилара",
"Айя",
"Feride",
"Ainura",
"Исаханова",
"Гузэль",
"Dana",
"Алтынай",
"Наргиза",
"Шынаргуль ",
"Айзада ",
"Валерия",
"Янина",
"Айгерим",
"Валерия",
"Сауле",
"Наталья ",
"DEA",
"Ляззат",
"Надежда",
"Ольга",
"Таня",
"Анар",
"Таня",
"Юлия",
"Динара",
"Kamila",
"Anna",
"Бахыт",
"Надія",
"Даша",
"Татьяна",
"Евгения ",
"Айгерим",
"Наталья",
"Анна",
"Екатерина ",
"Ирина",
"Оксана ",
"Дарья",
"Ксeния",
"Анна",
"Наталья",
"Умида",
"Айсулу ",
"Constance",
"Ирина ",
"Рита",
"Светлана",
"Goharik",
"Марина",
"Александра",
"Анна ",
"Ольга",
"Наталья",
"Ася",
"Олеся",
"Наталья ",
"Лилия",
"Марина ",
"Лилия",
"Анастасия",
"Елена Кердивар",
"Ольга",
"Ольга",
"Гульнара",
"Vika",
"Чолпона",
"Нина",
"Мархабба ",
"Ксения",
"Нина",
"елена",
"Аліна",
"Нина",
"юлия",
"Наталия",
"Нина",
"Айгерим",
"Анна",
"Батма Кошбакова",
"Виктория",
"Татьяна ",
"Наталия",
"Alla",
"Елена",
"Екатерина",
"Саламат",
"Алма",
"Елена Максименко",
"Алена",
"Виктория",
"Inna",
"Runika",
"Виола ",
"Елена",
"Бахыт ",
"Вера",
"Ala",
"Наталья",
"Марта",
"Вера",
"Наталья",
"Елена",
"Нозима",
"Ирина",
"Olga",
"Ирина",
"Айгуль",
"Liudmyla",
"Dinara",
"Aidana ",
"Екатерина ",
"Dana",
"Фаина",
"Жанна",
"Людмила",
"Rimma",
"Жадыра ",
"Натали",
"Виктория",
"оксана",
"Юлия",
"Татьяна",
"Юлия",
"Татьяна ",
"Юлия",
"Elena",
"Юлия",
"Шолпан ",
"тамара",
"Виктория",
"Кристина",
"Ольга",
"Ирина",
"Надина Омурзаковна ",
"Елена",
"Elena",
"Юлия ",
"Ольга",
"Светлана ",
"Кулян",
"Юлия",
"Гуля",
"Инна",
"Мария",
"Лихарьова Ніна",
"Елена",
"Таня",
"Ирина",
"Шахло",
"Юлия",
"Ольга",
"Наргиза",
"Юлия",
"Наталья ",
"Narine",
"Юлия",
"Альбина",
"Narine",
"Светлана",
"Дарья",
"Юлия",
"Айдана",
"Светлана",
"Хилола",
"Екатерина",
"Ольга",
"Олеся",
"Виктория",
"Алена",
"Зарина",
"Розалия ",
"Татьяна",
"Анна",
"Светлана",
"Алена Игоревна",
"Татьяна",
"Jul",
"Евгения",
"Таня",
"Вера",
"Евгения",
"Ирина",
"Наталья",
"Рукавицина Дарья",
"Василина",
"Lina",
"Таня ",
"Оксана",
"Ирина",
"anna",
"Анна",
"tatyana",
"Ангелина",
"Дарья",
"Юлия",
"ангелига",
"Ирина",
"Юлия",
"Liubovi",
"Мариям",
"Ольга",
"Анна",
"Ирина",
"Людмила",
"ангелига",
"Юлия",
"Анна",
"Нина",
"Катя",
"Анастасия",
"Вера ",
"эльвира",
"Алина Джоис",
"Вася",
"Tanya",
"Ольга",
"Ulyana",
"Вика",
"Исаханова",
"Maria",
"Александра",
"Natali",
"Асель",
"ЛЕСЯ"];
     var rand = Math.floor(Math.random() * arr.length);
     $('#somename').html(arr[rand]);
     $('#plusOne').addClass('visible');
     setTimeout(hide_names, 5000);
  };

  setInterval(update_names, (Math.floor(Math.random() * 30) + 6)*6000);


	$('[type=tel]').intlTelInput({
		allowExtensions: false,
		autoFormat: true,
		autoHideDialCode: false,
		autoPlaceholder: false,
		defaultCountry: "auto",
		geoIpLookup: function(callback) {
			$.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
				var countryCode = (resp && resp.country) ? resp.country : "";
				callback(countryCode);

				//var selected-flag
			});
		},
		nationalMode: false,
		numberType: 'MOBILE',
		preferredCountries: ['ua', 'ru', 'by', 'us'],
		utilsScript: 'js/utils.js'
	});

	$('.bt-more').click(function() {
		//=$('.it').removeClass('open');
		$(this).closest('.it').addClass('open');
	});

	
	/*
	$('.player').click(function() {

		$(this).find('.thumb').css('opacity', '0');
		var videoId = $(this).data('player');

		var options = {
			id: 287993463,
			width: 640,
			loop: true
		};

		var player = new Vimeo.Player(videoId, options);

		player.setVolume(.5);
		player.play();

		player.on('play', function() {
			var pl = $("#ytplayer").closest('.sec');
			pl.css('height', pl.height() + 120).addClass('play');
		});

		$('.play-off').click(function() {
			$(this).closest('.sec').removeClass('play');
			player.pause();
		});
	});
	*/

	$(window).scroll(function() {
		var scr =  $(window).scrollTop() + 60;
		
		if ( scr > $('#two').offset().top + $('#two').height() + 60 ) {
			$('#two').addClass('fix');
			$('.header').addClass('fix');
		} else {
			$('#two').removeClass('fix');
			$('.header').removeClass('fix');
		}
		if (!$('html').hasClass('scrolled')) {
			$('html').addClass('scrolled');
		}

		/*
		if ($(window).width() > 751) {

			if ( scr > $('.sec8').offset().top) {
				if (scr < $('.sec8').offset().top + $('.sec8').height() - $(window).height() * .5) {
					$('.sec8').addClass('fix').removeClass('fixer');
				} else {
					$('.sec8').addClass('fixer').removeClass('fix');
				}
			} else {
				if ( $('.sec8').hasClass('fix') ) {
					$('.sec8').removeClass('fix');
				}
				if ($('.sec8').hasClass('fixer')){
					$('.sec8').removeClass('fixer');
				}
			}
		}
		*/
		
	});

	$('.anchor').click(function() {
		var btn = $(this).data('href');

		var target = $(btn);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

		$('html,body').animate({
			scrollTop: target.offset().top + 5
		}, 1500);

		return false;
	});

	$('.popup-terms').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		midClick: true,
		mainClass: 'mfp-zoom',
	});
	
	$('.popup').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: false,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: true,
		midClick: true,
		removalDelay: 300,
		mainClass: 'mfp-zoom-in',
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
				$('[name=l_btn]').val(this.st.el.attr('data-btn'));
			}
		}
	});

	$('.popup-youtube, .popup-gmaps').magnificPopup({
		type: 'iframe',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: true,
		midClick: true,
		closeBtnInside: true,
	});

	var $slick = $('.slider');


	$slick.slick({
		speed: 600,
		centerMode: true,
		variableWidth: true,
		slidesToShow: 4,
		arrows: true,
		infinite: true,
		dots: false,
		autoplay: true,
		autoplaySpeed: 2000,
		nextArrow: '<button type="button" class="slick-next"> ► </button>',
		prevArrow: '<button type="button" class="slick-prev"> ◄ </button>',
		responsive: [
			{
				breakpoint: 992,
				draggable: true,
				settings: {
					slidesToShow: 1,
					variableWidth: false,
					centerMode: true,
				}
			},
			{
				breakpoint: 768,
				draggable: true,
				settings: {
					slidesToShow: 1,
					variableWidth: false,
					centerMode: false,
				}
			}
		]
	});

	$slick.slick('slickGoTo', 1);

	$slick.on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        var i = (nextSlide ? nextSlide : 0);
        var nav_w = +(100 / slick.slideCount);
       

        if (i == 0) {
			$('.target').attr('style', 'left: 0; width: ' + nav_w + '%;');
        } else {
        	var nav_t = nav_w * i;
        	//console.log(nav_t);
			$('.target').attr('style', 'left: '+ nav_t +'%; width: ' + nav_w + '%;');
        }
    });

	if (browser.mobile) {
		$('html').addClass('touch');
	}

	

	$('.nn-prev').click(function() {
		if (!$(this).hasClass('hid')) {
			$slick.slick('slickPrev');
		}
	});

	$('.nn-next').click(function() {
		if (!$(this).hasClass('hid')) {
			$slick.slick('slickNext');
		}
	});
	

}); // end