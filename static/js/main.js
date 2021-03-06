$(document).ready(function() {
	/*
  Add smooth scrolling to all links, 
  while keeping cross-browser compatibility.
  https://www.w3schools.com/howto/howto_css_smooth_scroll.asp
  */
	$('a').on('click', function(event) {
		if (this.hash !== '') {
			event.preventDefault();

			let hash = this.hash;

			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top
				},
				800,
				function() {
					window.location.hash = hash;
				}
			);
		}
	});

	/*
  When the user scrolls down, hide the navbar and
  when the user scrolls up, show the navbar.
  https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
  */
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

	/*
  Finds all the inputfields of the account signup form & adds
  proper Bootstrap class styling
  code is based on the following: https://stackoverflow.com/a/41909370
  */
	$('#auth-form').find(':input').each(function(index, element) {
		$(element).addClass('form-control');
	});

	// show alerts with animation & hide them after showing.
	$('.alert').first().hide().slideDown(500).delay(4000).slideUp(500, function() {
		$(this).remove();
	});

	//DataTable settings
	let table = $('#dataTable').DataTable({
		lengthChange: false,
		dom: 'lrtip',
		info: false,
		paging: false,
		bSort: false,
		responsive: true
	});
});

/*
Changes the upload button text when a file is uploaded on the
checkout form. This will provide the user with the needed feedback
of an added file.
*/
$('#new-upload').change(function() {
	let file = $('#new-upload')[0].files[0];
	$('#filename').text(`Artwork uploaded!`);
	$('#filename').toggleClass('upload-success-text');
});
