'use strict';

		(function() {
			var targetJsonUrl = 'json/info_box.json',
				// targetNode = $('.content'),
				contentObjectsFromServer,
				numberOfContentObjects,
				indexOfCurrentContentObject,
				indexOfFirstContentObject,
				indexOfLastContentObject;

			$.getJSON(targetJsonUrl, function(data) {
					// console.log(data);
					// $.each(data, function(index, value) {
					// 	console.log(data[index].title);
					// });
				contentObjectsFromServer = data;
				console.log(contentObjectsFromServer); // JSON from server should record to 'contentObjectsFromServer' variable
				}
			);

			// contentObjectsFromServer = [
			//     {
			//         "title": "Time to Share: 6 for $3.99*",
			//         "img": "comp_plate_promo1.png",
			//         "description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
			//         "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
			//         "productUrl": "/products/promo1.html"
			//     },
			//     {
			//         "title": "Rise 'n shine",
			//         "img": "comp_plate_promo2.png",
			//         "description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
			//         "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
			//         "productUrl": "/products/promo2.html"
			//     },
			//     {
			//         "title": "PM Snackers: Brownie Bites",
			//         "img": "comp_plate_promo3.png",
			//         "description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
			//         "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
			//         "productUrl": "/products/promo3.html"
			//     },
			//     {
			//         "title": "PM Snackers: ICED Coffee",
			//         "img": "comp_plate_promo4.png",
			//         "description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
			//         "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga. * At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.\n* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.\n* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
			//         "productUrl": "/products/promo4.html"
			//     }
			// ];

		// $('.content').find('.product-img').css('background', 'url(../imgs/' + contentObjectsFromServer[0].img + ') no-repeat');

			numberOfContentObjects = contentObjectsFromServer.length,
			indexOfCurrentContentObject = 0, // will be changed on closure
			indexOfFirstContentObject = 0,
			indexOfLastContentObject = contentObjectsFromServer.length-1;

			function displayContent(indexOfCurrentContentObject) {
				$($.find('img')).stop().hide();
				$($.find('img')).attr('src', 'imgs/' + contentObjectsFromServer[indexOfCurrentContentObject].img);
				$($.find('img')).fadeIn(400);
				$($.find('.title')).text(contentObjectsFromServer[indexOfCurrentContentObject].title);
				$($.find('.description')).text(contentObjectsFromServer[indexOfCurrentContentObject].description);
			}

			displayContent(indexOfFirstContentObject);

			$('.button-btn-bg-white-right').on('click', function() {
				if (indexOfCurrentContentObject === indexOfLastContentObject) {
					indexOfCurrentContentObject = indexOfFirstContentObject;
					displayContent(indexOfCurrentContentObject);
				} else {
					indexOfCurrentContentObject += 1;
					displayContent(indexOfCurrentContentObject);
				}
			});

			$('.button-btn-bg-white-left').on('click', function() {
				if (indexOfCurrentContentObject === indexOfFirstContentObject) {
					indexOfCurrentContentObject = indexOfLastContentObject;
					displayContent(indexOfCurrentContentObject);
				} else {
					indexOfCurrentContentObject -= 1;
					displayContent(indexOfCurrentContentObject);
				}
			});

			$('.show-det').on('click', function() {
				$($.find('img')).stop().fadeToggle(400);
			});

			//another one method

			// $.ajax({
			// 	type: 'GET',
			// 	url: url,
			// 	data: 'string',
			// 	dataType: 'json',
			// 	mimeType: 'application/json',
			// 	cache: true
			// });
		})();