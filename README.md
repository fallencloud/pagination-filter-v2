# Pagination & Content Filter
The second project from TreeHouse's Fullstack JavaScript TechDegree

## Project Instructions

In this project, you'll enhance the usability of a web page that has too much information. To make it easier to find information and read the page, you'll use progressive enhancement to add pagination.

The page includes a list of 54 students. You need to add programming to display 10 students per page, and add buttons to jump between the lists of 10 students.

Your solution should work for any number of student listings, whether there were 5, 25, 55 or 100 student listings.

* Show just the students you want displayed on the page and hide all the rest
  * When the page loads, your program should hide all but what will show on the first page, which will be the first 10 students in the list.
* Create and append the pagination links
  * Look at the HTML in the example-meets.html file on lines 119-137 -- this is an example of the markup you'll need to add dynamically to the index.html page to create pagination links.
  * Since only 10 students should be shown at a time, your programming needs to calculate the number of pages needed and add the appropriate number of links to the bottom of the page.
  * Your program should work for any number of students. There are 54 students in index.html, but you can test your code by adding your JavaScript file to the other lists of students we’ve provided in the student-list-examples folder.
* Add functionality to pagination links with an event listener.
  * When a user clicks on “2” in the pagination, students 11 through 20 are shown. When a user clicks “3”, students 21 through 30 are shown. And so on. When “6” is clicked on the index.html file, students 51 through 55 should be shown.
  * Since the pagination links are being generated dynamically, it's important to be mindful of when and where you add functionality to the buttons, because if the code that adds the functionality runs before the buttons are created, then the buttons won't have any of the intended functionality.
  * If you created a function to show/hide students at the beginning of this project, then you can use that function here in the event listener attached to the buttons to make each each button show/hide the correct sets of students.
