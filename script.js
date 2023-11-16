$(document).ready(function () {
	$('#courseForm').on('submit', function (e) {
	  e.preventDefault();

	  const courseId = $('#courseId').val();
	  const title = $('#title').val();
	  let grade = $('#grade').val();

	  // Input validation for grade
	  
	  grade = parseInt(grade);
	  if (isNaN(grade) || grade < 0 || grade > 100) {
		alert('Grade must be an integer between 0 and 100.');
		return;
	  }

	  const row = `
		<tr>
		  <td>${courseId}</td>
		  <td>${title}</td>
		  <td>${grade}</td>
		  <td><button class="btn btn-danger removeBtn">Remove</button></td>
		</tr>
	  `;

	  $('#courseTableBody').append(row);

	  // Clear input fields

	  $('#courseId').val('');
	  $('#title').val('');
	  $('#grade').val('');
	});

	$('#courseTableBody').on('click', '.removeBtn', function () {
	  $(this).closest('tr').remove();
	});

	// Sort grades function

	function sortGrades() {
	  const rows = $('#courseTableBody tr').get();

	  rows.sort(function (a, b) {
		const gradeA = parseInt($(a).children('td').eq(2).text());
		const gradeB = parseInt($(b).children('td').eq(2).text());

		return gradeB - gradeA;
	  });

	  $.each(rows, function (index, row) {
		$('#courseTableBody').append(row);
	  });
	}

	// Sort button click event

	$('#sortButton').on('click', function () {
	  sortGrades();
	});
  });


// Sticky Header

window.onscroll = function() { makeSticky(); };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function makeSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
