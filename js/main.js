//get the list of students
const studentContainer = document.querySelector('.student-list li');
const studentList = document.querySelectorAll('.student-list .student-item');

function appendPageLinks(studentList) {
    // determine how many pages for this student list 
    let pages = Math.ceil(studentList.length / 10);
    
    // create a page link section
    const page = document.querySelector('.page');//select the element to attach to
    let pageLink = document.createElement('ul');//create element
    pageLink.className = "pagination";//add class
    page.appendChild(pageLink);//attach the pagination section

//create the links
    // “for” every page
    for (let i = 0; i < pages; i++) {
        // add a page link to the page link section
        let li = document.createElement('li');
        li.innerHTML = '<a href="#">' + (i+1) + '</a>';
        // pageLink = document.getElementsByClassName('.pagination')[0];
        pageLink.appendChild(li);
    }

    //show only the first 10 on page load
    $('.student-list li').hide();
    // Then loop through all students in our student list argument
    for (let i = 0; i < 10; i++) {
       // if student should be on this page number
       let currentStudent = $(studentList[i]);
       currentStudent.fadeIn(2000);
    }    

    const pagination = document.querySelector('.pagination');
    //add the active class to the first link on page load
    $('.pagination li a:first').addClass('active');

    pagination.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            //remove active class from the previous active link
            let $previousLink = $('.active');
            $previousLink.removeClass('active');
            //add the active class to the current link
            let $currentLink = $(e.target);
            $currentLink.addClass('active');
            let pageNum = e.target.textContent;
            pageNum = parseInt(pageNum); //allows math operations to be performed

            showPage(pageNum, studentList);
        }
    });
}


appendPageLinks(studentList);


function showPage(pageNum, studentList) {
    // first hide all students on the page
    $('.student-list li').fadeOut(1000);
    let stop = pageNum * 10; //determine where the display should stop
    let start = stop - 10; //determine where the display should start

    for (start; start < stop; start++) {
        let currentStudent = $(studentList[start]); //turn the current student into a jQuery object
        currentStudent.fadeIn(1000);
    }
}