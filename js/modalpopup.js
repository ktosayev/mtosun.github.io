// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Open modal on load
$(window).on('load',function(){
	$('#myModal').modal('show');
	});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
	}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
		}
	}
