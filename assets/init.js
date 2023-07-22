$(document).ready(function () {
    var init_data;
    $.getJSON("./assets/config.json", function (data) {
        init_data = data;
        initData()
    });

    function countDown() {

        let end = init_data.end_time

        const countDay = new Date(end);
        const now = new Date();
        const counter = countDay - now;
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const textDay = Math.floor(counter / day);
        const textHour = Math.floor((counter % day) / hour);
        const textMinute = Math.floor((counter % hour) / minute);
        const textSecond = Math.floor((counter % minute) / second);

        $('.timer .day').text(textDay + ' Days')
        $('.timer .hour').text(textHour + ' Hours')
        $('.timer .minute').text(textMinute + ' Minutes')
        $('.timer .second').text(textSecond + ' Seconds')
    }


    function initData() {
        //start timer
        setInterval(countDown, 1000);

        //site email
        $('#contact-mail').attr('href', 'mailto:' + init_data.email);

        //cp name
        $('p#company-name').text('— ' + init_data.company_name);

        //cp logo
        $('img#company-logo').attr('src', init_data.logo);

        $('body').css({backgroundColor: init_data.bg_color, color: init_data.text_color});

        //site title
        $('title').text(init_data.page_title);

    }


})


