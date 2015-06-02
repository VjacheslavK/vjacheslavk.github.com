'use strict';

(function() {
	var targetJsonUrl = 'json/info_box.json',
		contentObjectsFromServer,
		numberOfContentObjects,
		indexOfCurrentContentObject,
		indexOfFirstContentObject,
		indexOfLastContentObject;

	$.getJSON(targetJsonUrl, function(data) {
		contentObjectsFromServer = data; // JSON from server should record to 'contentObjectsFromServer' variable
		numberOfContentObjects = contentObjectsFromServer.length;
		indexOfLastContentObject = contentObjectsFromServer.length - 1;
		indexOfCurrentContentObject = 0;
		indexOfFirstContentObject = 0;

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
			// $('.product-img img').hide();
			// $('.info').hide();
			// $('.link-det').hide();
			$('.title').text(contentObjectsFromServer[indexOfCurrentContentObject].title);
			$('.description').text(contentObjectsFromServer[indexOfCurrentContentObject].description);
			$('.note').text(contentObjectsFromServer[indexOfCurrentContentObject].note);
			$('.product-img img').attr('src', 'imgs/' + contentObjectsFromServer[indexOfCurrentContentObject].img);
			$('.info').fadeIn();
			$('.link-det').fadeIn();
			$('.product-img img').fadeIn();
		}

		displayContent(indexOfFirstContentObject);

		$('.button-btn-bg-white-right').on('click', function() {
			if (indexOfCurrentContentObject === indexOfLastContentObject) {
				indexOfCurrentContentObject = indexOfFirstContentObject;
				$('.product-img img').hide();
				$('.info').hide();
				$('.link-det').hide();
				displayContent(indexOfCurrentContentObject);
			} else {
				indexOfCurrentContentObject += 1;
				$('.product-img img').hide();
				$('.info').hide();
				$('.link-det').hide();
				displayContent(indexOfCurrentContentObject);
			}
		});

		$('.button-btn-bg-white-left').on('click', function() {
			if (indexOfCurrentContentObject === indexOfFirstContentObject) {
				indexOfCurrentContentObject = indexOfLastContentObject;
				$('.product-img img').hide();
				$('.info').hide();
				$('.link-det').hide();
				displayContent(indexOfCurrentContentObject);
			} else {
				indexOfCurrentContentObject -= 1;
				$('.product-img img').hide();
				$('.info').hide();
				$('.link-det').hide();
				displayContent(indexOfCurrentContentObject);
			}
		});

		$('.show-det').on('click', function() {
			if ($('.description-note').hasClass('description-note-collapse')) {
				$('.description-note').toggleClass('description-note-collapse');
				$('.product-img img').stop().fadeToggle();
				$('.description-note').hide().fadeIn();
				$('.link-det').text('show details');
				$('.link-det').hide().fadeIn();
			} else {
				$('.product-img img').stop().fadeToggle(function() {
					$('.description-note').toggleClass('description-note-collapse');
					$('.description-note').stop().hide().slideDown();
					$('.link-det').text('hide details');
				});
			}
		});
	});

	// contentObjectsFromServer = [{
	// 	"title": "Time to Share: 6 for $3.99*",
	// 	"img": "comp_plate_promo1.png",
	// 	"description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
	// 	"note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
	// 	"productUrl": "/products/promo1.html"
	// }, {
	// 	"title": "Rise 'n shine",
	// 	"img": "comp_plate_promo2.png",
	// 	"description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
	// 	"note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
	// 	"productUrl": "/products/promo2.html"
	// }, {
	// 	"title": "PM Snackers: Brownie Bites",
	// 	"img": "comp_plate_promo3.png",
	// 	"description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
	// 	"note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
	// 	"productUrl": "/products/promo3.html"
	// }, {
	// 	"title": "PM Snackers: ICED Coffee",
	// 	"img": "comp_plate_promo4.png",
	// 	"description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
	// 	"note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga. * At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.\n* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.\n* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
	// 	"productUrl": "/products/promo4.html"
	// }];

	// numberOfContentObjects = contentObjectsFromServer.length;
	// indexOfLastContentObject = contentObjectsFromServer.length - 1;
	// indexOfCurrentContentObject = 0;
	// indexOfFirstContentObject = 0;

	// // adding hover effect for buttons

	// function inOut(node, classOutBtn, classInBtn, classOutArrow, classInArrow) {
	// 	$(node).hover(function() {
	// 		$(this).removeClass(classOutBtn);
	// 		$(this).addClass(classInBtn);
	// 		$(this).find('.control-btn').addClass('text-shadow');
	// 		if (classOutArrow && classInArrow) {
	// 			$(this).find('.arrow').removeClass(classOutArrow);
	// 			$(this).find('.arrow').addClass(classInArrow);
	// 		}
	// 	}, function() {
	// 		$(this).removeClass(classInBtn);
	// 		$(this).addClass(classOutBtn);
	// 		$(this).find('.control-btn').removeClass('text-shadow');
	// 		if (classOutArrow && classInArrow) {
	// 			$(this).find('.arrow').removeClass(classInArrow);
	// 			$(this).find('.arrow').addClass(classOutArrow);
	// 		}
	// 	});
	// }

	// inOut($('.button-btn-bg-white-right'),
	// 	'button-btn-bg-white-right',
	// 	'button-btn-bg-orange-right',
	// 	'button-btn-ic-gray-right',
	// 	'button-btn-ic-brn-right');

	// inOut($('.button-btn-bg-white-left'),
	// 	'button-btn-bg-white-left',
	// 	'button-btn-bg-orange-left',
	// 	'button-btn-ic-gray-left',
	// 	'button-btn-ic-brn-left');

	// inOut($('.button-btn-lg-bg'),
	// 	'button-btn-lg-bg',
	// 	'button-btn-lg-orange');

	// // adding events for buttons

	// function displayContent(indexOfCurrentContentObject) {
	// 	$('.description-note').removeClass('description-note-collapse');
	// 	$('.link-det').hide().fadeIn();
	// 	$('.product-img img').hide().fadeIn();
	// 	$('.product-img img').attr('src', 'imgs/' + contentObjectsFromServer[indexOfCurrentContentObject].img);
	// 	$('.title').hide().fadeIn();
	// 	$('.title').text(contentObjectsFromServer[indexOfCurrentContentObject].title);
	// 	$('.description').hide().fadeIn();
	// 	$('.description').text(contentObjectsFromServer[indexOfCurrentContentObject].description);
	// 	$('.note').hide().fadeIn();
	// 	$('.note').text(contentObjectsFromServer[indexOfCurrentContentObject].note);
	// }

	// displayContent(indexOfFirstContentObject);

	// $('.button-btn-bg-white-right').on('click', function() {
	// 	if (indexOfCurrentContentObject === indexOfLastContentObject) {
	// 		indexOfCurrentContentObject = indexOfFirstContentObject;
	// 		displayContent(indexOfCurrentContentObject);
	// 	} else {
	// 		indexOfCurrentContentObject += 1;
	// 		displayContent(indexOfCurrentContentObject);
	// 	}
	// });

	// $('.button-btn-bg-white-left').on('click', function() {
	// 	if (indexOfCurrentContentObject === indexOfFirstContentObject) {
	// 		indexOfCurrentContentObject = indexOfLastContentObject;
	// 		displayContent(indexOfCurrentContentObject);
	// 	} else {
	// 		indexOfCurrentContentObject -= 1;
	// 		displayContent(indexOfCurrentContentObject);
	// 	}
	// });

	// $('.show-det').on('click', function() {
	// 	if ($('.description-note').hasClass('description-note-collapse')) {
	// 		$('.description-note').toggleClass('description-note-collapse');
	// 		$('.product-img img').stop().fadeToggle();
	// 		$('.description-note').hide().fadeIn();
	// 		$('.link-det').text('show details');
	// 		$('.link-det').hide().fadeIn();
	// 	} else {
	// 		$('.product-img img').stop().fadeToggle(function() {
	// 			$('.description-note').toggleClass('description-note-collapse');
	// 			$('.description-note').stop().hide().slideDown();
	// 			$('.link-det').text('hide details');
	// 		});
	// 	}
	// });
})();