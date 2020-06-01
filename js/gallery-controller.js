'use strict'

function init() {
    renderProjects();
    renderModel();
}

function renderProjects() {
    var projects = getProgects();
    var strHTML = projects.map(project => {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${project.name}">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img class="img-fluid" src="img/portfolio/${project.id}.jpg" alt="">
            </a>
            <div class="portfolio-caption">
                <h4>${project.name}</h4>
                <p class="text-muted">${project.title}</p>
            </div>
        </div>`; a
    });
    $('.projects').html(strHTML.join(''));
}



function renderModel() {
    var monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    var projects = getProgects();
    var strHTML = projects.map(project => {
        var date = new Date(project.publishedAt);
        var month = date.getMonth();
        var year = date.getFullYear();
        var strLabel = project.labels.join(', ')
        return `<div class="portfolio-modal modal fade" id="portfolioModal${project.name}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${project.name}</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}.jpg" alt="">
                <p>${project.desc}</p>
                <ul class="list-inline">
                  <li>Date: ${monthNames[month]} ${year}</li>
                  <li><a href="${project.url}">link</a></li>
                  <li>Category: ${strLabel}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
    });
    // $(strHTML.join('')).insertAfter("footer")
    $('.portfolio-modals').html(strHTML.join(''));
}

$('#contact button').click(function (ev) {
    var email = $('.email-input').val();
    if (!email.includes('@') || !email.includes('.com')) $('.email-input').val('');
    var subject = $('.subject').val();
    if (!subject) {
        $('.subject').val('Please add subject');
        setTimeout(function () {
            $('.subject').val('');
        }, 2000);
        $('.message').val('');
        return
    }
    var message = $('.message').val();
    if (!message) {
        $('.message').val('Please enter a message');
        setTimeout(function () {
            $('.message').val('');
            $('.email-input').val('');
        }, 2000);
        return
    }
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=irisrifold@gmail.com&su=${subject}&body=${message}`, '_blank');
})

