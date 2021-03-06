'use strict';

(function() {
	var targetJsonUrl = 'json/info_box.json',
		contentObjectsFromServer,
		numberOfContentObjects,
		indexOfCurrentContentObject,
		indexOfFirstContentObject,
		indexOfLastContentObject,
		imgNode,
		duration;

	$.getJSON(targetJsonUrl, function(data) {
		contentObjectsFromServer = data;
		numberOfContentObjects = contentObjectsFromServer.length;
		indexOfLastContentObject = contentObjectsFromServer.length - 1;
		indexOfCurrentContentObject = 0;
		indexOfFirstContentObject = 0;
		duration = 300;

		// adding hover effects for buttons

		function inOut(node, classOutBtn, classInBtn, classOutArrow, classInArrow) {
			$(node).hover(function() {
				$(this).removeClass(classOutBtn);
				$(this).addClass(classInBtn);
				$(this).find('.control-btn').addClass('text-shadow');
				if (classOutArrow && classInArrow) {
					$(this).find('.arrow').removeClass(classOutArrow);
					$(this).find('.arrow').addClass(classInArrow);
				}
			}, function() {
				$(this).removeClass(classInBtn);
				$(this).addClass(classOutBtn);
				$(this).find('.control-btn').removeClass('text-shadow');
				if (classOutArrow && classInArrow) {
					$(this).find('.arrow').removeClass(classInArrow);
					$(this).find('.arrow').addClass(classOutArrow);
				}
			});
		}

		inOut($('.button-btn-bg-white-right'),
			'button-btn-bg-white-right',
			'button-btn-bg-orange-right',
			'button-btn-ic-gray-right',
			'button-btn-ic-brn-right');

		inOut($('.button-btn-bg-white-left'),
			'button-btn-bg-white-left',
			'button-btn-bg-orange-left',
			'button-btn-ic-gray-left',
			'button-btn-ic-brn-left');

		inOut($('.button-btn-lg-bg'),
			'button-btn-lg-bg',
			'button-btn-lg-orange');

		// adding events for buttons

		function displayContent(indexOfCurrentContentObject) {
			$('.description-note').removeClass('description-note-collapse');
			$('.link-det').hide().fadeIn(duration);
			$('.title').text(contentObjectsFromServer[indexOfCurrentContentObject].title).hide().fadeIn(duration);
			$('.description').text(contentObjectsFromServer[indexOfCurrentContentObject].description).hide().fadeIn(duration);
			$('.note').text(contentObjectsFromServer[indexOfCurrentContentObject].note).hide().fadeIn(duration);
			imgNode = '<img src="imgs/' + contentObjectsFromServer[indexOfCurrentContentObject].img + '">';
<<<<<<< HEAD
			$('.product-img').html(imgNode).hide().fadeIn(duration);
		};

		function setDefault() {
			$('.description-note').removeClass('expand');
			$('.description-note').css('height', '29px');
			$('.description-note').addClass('collapse');
			$('.link-det').text('show details');
		}
=======
			$('.product-img').html(imgNode).hide().fadeIn();
		};
>>>>>>> origin/master

		displayContent(indexOfFirstContentObject);

		$('.button-btn-bg-white-right').on('click', function() {
			setDefault();
			if (indexOfCurrentContentObject === indexOfLastContentObject) {
				indexOfCurrentContentObject = indexOfFirstContentObject;
				displayContent(indexOfCurrentContentObject);
			} else {
				indexOfCurrentContentObject += 1;
				displayContent(indexOfCurrentContentObject);
			}
		});

		$('.button-btn-bg-white-left').on('click', function() {
			setDefault();
			if (indexOfCurrentContentObject === indexOfFirstContentObject) {
				indexOfCurrentContentObject = indexOfLastContentObject;
				displayContent(indexOfCurrentContentObject);
			} else {
				indexOfCurrentContentObject -= 1;
				displayContent(indexOfCurrentContentObject);
			}
		});

		$('.show-det').on('click', function() {
			if ($('.description-note').hasClass('expand')) {
				$('.link-det').text('show details');
				$('.description-note').animate({
					height: '29px'
				}, duration, function() {
					$('.description-note').removeClass('expand');
					$('.description-note').addClass('collapse');
					$('.product-img img').fadeToggle(duration);
				});
			} else {
				$('.product-img img').fadeToggle(duration, function() {
					$('.link-det').text('hide details');
					$('.description-note').animate({
						height: '232px'
					}, duration, function() {
						$('.description-note').removeClass('collapse');
						$('.description-note').addClass('expand');
					});
				});
			}
		});

		$('.large-btn a').on('click', function() {
			$(this).attr('href', contentObjectsFromServer[indexOfCurrentContentObject].productUrl);
		});
	});
<<<<<<< HEAD
=======
	
	// local check JSON from server

	// contentObjectsFromServer = [{
	// 	"title": "Time to Share: 6 for $3.99*",
	// 	"img": "comp_plate_promo1.png",
	// 	"description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
	// 	"note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
	// 	"productUrl": "products/promo1.html"
	// }, {
	// 	"title": "Rise 'n shine",
	// 	"img": "comp_plate_promo2.png",
	// 	"description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
	// 	"note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
	// 	"productUrl": "products/promo2.html"
	// }, {
	// 	"title": "PM Snackers: Brownie Bites",
	// 	"img": "comp_plate_promo3.png",
	// 	"description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
	// 	"note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
	// 	"productUrl": "products/promo3.html"
	// }, {
	// 	"title": "ICED Coffee",
	// 	"img": "comp_plate_promo4.png",
	// 	"description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
	// 	"note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga. * At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.\n* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.\n* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
	// 	"productUrl": "products/promo4.html"
	// }];

	// 	numberOfContentObjects = contentObjectsFromServer.length;
	// 	indexOfLastContentObject = contentObjectsFromServer.length - 1;
	// 	indexOfCurrentContentObject = 0;
	// 	indexOfFirstContentObject = 0;

	// 	// adding hover effects for buttons

	// 	function inOut(node, classOutBtn, classInBtn, classOutArrow, classInArrow) {
	// 		$(node).hover(function() {
	// 			$(this).removeClass(classOutBtn);
	// 			$(this).addClass(classInBtn);
	// 			$(this).find('.control-btn').addClass('text-shadow');
	// 			if (classOutArrow && classInArrow) {
	// 				$(this).find('.arrow').removeClass(classOutArrow);
	// 				$(this).find('.arrow').addClass(classInArrow);
	// 			}
	// 		}, function() {
	// 			$(this).removeClass(classInBtn);
	// 			$(this).addClass(classOutBtn);
	// 			$(this).find('.control-btn').removeClass('text-shadow');
	// 			if (classOutArrow && classInArrow) {
	// 				$(this).find('.arrow').removeClass(classInArrow);
	// 				$(this).find('.arrow').addClass(classOutArrow);
	// 			}
	// 		});
	// 	}

	// 	inOut($('.button-btn-bg-white-right'),
	// 		'button-btn-bg-white-right',
	// 		'button-btn-bg-orange-right',
	// 		'button-btn-ic-gray-right',
	// 		'button-btn-ic-brn-right');

	// 	inOut($('.button-btn-bg-white-left'),
	// 		'button-btn-bg-white-left',
	// 		'button-btn-bg-orange-left',
	// 		'button-btn-ic-gray-left',
	// 		'button-btn-ic-brn-left');

	// 	inOut($('.button-btn-lg-bg'),
	// 		'button-btn-lg-bg',
	// 		'button-btn-lg-orange');

	// 	// adding events for buttons

	// 	function displayContent(indexOfCurrentContentObject) {
	// 		$('.description-note').removeClass('description-note-collapse');
	// 		$('.link-det').hide().fadeIn();
	// 		$('.title').text(contentObjectsFromServer[indexOfCurrentContentObject].title).hide().fadeIn();
	// 		$('.description').text(contentObjectsFromServer[indexOfCurrentContentObject].description).hide().fadeIn();
	// 		$('.note').text(contentObjectsFromServer[indexOfCurrentContentObject].note).hide().fadeIn();
	// 		imgNode = '<img src="imgs/' + contentObjectsFromServer[indexOfCurrentContentObject].img + '">';
	// 		$('.product-img').html(imgNode).hide().fadeIn();
	// 	};

	// 	displayContent(indexOfFirstContentObject);

	// 	$('.button-btn-bg-white-right').on('click', function() {
	// 		$('.link-det').text('show details');
	// 		if (indexOfCurrentContentObject === indexOfLastContentObject) {
	// 			indexOfCurrentContentObject = indexOfFirstContentObject;
	// 			displayContent(indexOfCurrentContentObject);
	// 		} else {
	// 			indexOfCurrentContentObject += 1;
	// 			displayContent(indexOfCurrentContentObject);
	// 		}
	// 	});

	// 	$('.button-btn-bg-white-left').on('click', function() {
	// 		$('.link-det').text('show details');
	// 		if (indexOfCurrentContentObject === indexOfFirstContentObject) {
	// 			indexOfCurrentContentObject = indexOfLastContentObject;
	// 			displayContent(indexOfCurrentContentObject);
	// 		} else {
	// 			indexOfCurrentContentObject -= 1;
	// 			displayContent(indexOfCurrentContentObject);
	// 		}
	// 	});

	// 	$('.show-det').on('click', function() {
	// 		if ($('.description-note').hasClass('description-note-collapse')) {
	// 			$('.description-note').toggleClass('description-note-collapse');
	// 			$('.product-img img').fadeToggle();
	// 			$('.description-note').hide().fadeIn();
	// 			$('.link-det').text('show details');
	// 		} else {
	// 			$('.product-img img').stop().fadeToggle(function() {
	// 				$('.description-note').toggleClass('description-note-collapse');
	// 				$('.description-note').hide().slideDown();
	// 				$('.link-det').text('hide details');
	// 			});
	// 		}
	// 	});

	// 	$('.large-btn a').on('click', function() {
	// 		$(this).attr('href', contentObjectsFromServer[indexOfCurrentContentObject].productUrl);
	// 	});
>>>>>>> origin/master
})();