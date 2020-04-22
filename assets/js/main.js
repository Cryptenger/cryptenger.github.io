$(".navbar-toggler").on('click', function () {
    if($("#mainNavbar").hasClass("active")) {
        $(this).removeClass("active");
        $("#mainNavbar").removeClass("visible");
        setTimeout(() => { $("#mainNavbar").removeClass("active"); }, 400);
    } else {
        $(this).addClass("active");
        $("#mainNavbar").addClass("active");
        setTimeout(() => { $("#mainNavbar").addClass('visible'); }, 50);
    }
});

$('.dl-selection').on('click', 'button', function (e) {
    e.stopPropagation();
    let button = $(this).closest('.selector-container').find('.downloader');
    let extension = $(this).attr('id').split('-')[1].split('_').join('.');

    let url;
    if (button.attr('id').split('-')[0] === "linux") {
        url = button.attr('href').split('/');
        url[url.length-1] = "cryptenger_client." + extension;
        url = url.join('/')
    } else {
        url = button.attr('href').split('.');
        if(url[url.length-1] === "gz") url.pop();
        url[url.length-1] = extension;
        url = url.join('.');
    }

    button.attr('href', url);

    button.find('span').text($(this).text());
    $(this).parent().hide();
});

$(document).on('click',  function (e) {
    let parent =  $(e.target);

    if(parent.hasClass('fa-chevron-down')) parent = parent.parent();

    if($(parent).hasClass('dl-selector')) {
        let id = '#'+parent.attr("id").split("-")[0]+((parent.attr("id").split("-").length===3)? '-source': '')+'-selection';
        $('.dl-selection:not('+id+')').hide();
    } else {
        $('.dl-selection').hide();
    }
});

$('.dl-selector').on('click', function () {
    $(this).parent().find('.dl-selection').show();
});