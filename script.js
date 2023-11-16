// Wait for the DOM to be ready before running any jQuery code

$(document).ready(function() {

	// Event listener for form submission

	$('#courseForm').on('submit', function(e) {

		// Prevents the default form submission action

		e.preventDefault();

		// Retrieves values entered by the user in the form
		
		const courseId = $('#courseId').val();
		const title = $('#title').val();
		let grade = $('#grade').val();

		// Validates the grade input

		grade = parseInt(grade);
		if (isNaN(grade) || grade < 0 || grade > 100) {
			alert('Grade must be an integer between 0 and 100.');
			return;
		}

		// Creates a new table row with the course information

		const row = `
		<tr>
		  <td>${courseId}</td>
		  <td>${title}</td>
		  <td>${grade}</td>
		  <td><button class="btn btn-danger removeBtn">Remove</button></td>
		</tr>
	  `;

		// Appends the new row to the course table

		$('#courseTableBody').append(row);

		// Clears the form fields

		$('#courseId').val('');
		$('#title').val('');
		$('#grade').val('');
	});

	// Event listener for the Remove button in each course row

	$('#courseTableBody').on('click', '.removeBtn', function() {
		
		// Removes the closest table row (the course row) when the Remove button is clicked
		
		$(this).closest('tr').remove();
	});

	// Function to sort the grades

	function sortGrades() {

		// Retrieves all table rows
		
		const rows = $('#courseTableBody tr').get();

		// Sorts rows based on the grade values in descending order

		rows.sort(function(a, b) {
			const gradeA = parseInt($(a).children('td').eq(2).text());
			const gradeB = parseInt($(b).children('td').eq(2).text());
			return gradeB - gradeA;
		});

		// Re-adds the sorted rows to the table

		$.each(rows, function(index, row) {
			$('#courseTableBody').append(row);
		});
	}

	// Event listener for the Sort button

	$('#sortButton').on('click', function() {
		sortGrades();
	});
});


// Sticky Header

// Attach makeSticky function to the window's scroll event

window.onscroll = function() {
	makeSticky();
};

// Get a reference to the HTML element with the ID "myHeader"

var header = document.getElementById("myHeader");

// Get the offset position of the header element

var sticky = header.offsetTop;

// Function to make the header sticky when scrolling

function makeSticky() {

    // Check if the vertical scroll position (window.pageYOffset) is greater than the header's offset position (sticky)
	
	if (window.pageYOffset > sticky) {

        // If it is, add the "sticky" class to the header element, making it sticky

		header.classList.add("sticky");
	} else {

        // If it's not, remove the "sticky" class from the header element, making it non-sticky

		header.classList.remove("sticky");
	}
}
