$(document).ready(function() {
	// show alerts with animation & hide them after showing.
	$('.alert').first().hide().slideDown(500).delay(4000).slideUp(500, function() {
		$(this).remove();
	});

	/* When the user scrolls down, hide the navbar.
     When the user scrolls up, show the navbar.
     https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp */
	let prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
		let currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			document.getElementById('custom-navbar').style.top = '0';
		} else {
			document.getElementById('custom-navbar').style.top = '-62px';
		}
		prevScrollpos = currentScrollPos;
	};

	/* Finds all the inputfields of the account signup form
     & adds proper Bootstrap class styling
     code is based on the following: https://stackoverflow.com/a/41909370 */
	$('#auth-form').find(':input').each(function(index, element) {
		$(element).addClass('form-control');
	});

	//DataTable settings
	let table = $('#dataTable').DataTable({
		lengthChange: false,
		dom: 'lrtip',
		info: false,
		paging: false,
		bSort: false,
		responsive: true,
		columns: [ { responsivePriority: 1 }, { responsivePriority: 2 }, { responsivePriority: 3 } ]
	});
});
