let url = 'https://jsonplaceholder.typicode.com/photos';

// Data fetch
fetch(url, {
    method: 'GET'
})
    .then(r => r.json())
    .then(r => {
        for (let i = 0; i < 12; i++) {

            // Jquery append
            $('#api')
                .append(
                    $('<article>').addClass('item')
                        .append(
                            $('<a>').attr("href", "#")
                                .append(
                                    $('<div>').addClass('carousel-blog-img')
                                        .append(
                                            $('<img>').attr('src', `${r[i].thumbnailUrl}`).attr('alt', 'Img')
                                        )
                                )
                                .append(
                                    $('<div>').addClass('carousel-blog-text')
                                        .append(
                                            $('<h3>').html(r[i].title)
                                        ).append(
                                        $('<p>').html(r[i].title)
                                    )
                                )
                        )
                );

        }

        // Resetting the owl carousel plugin
        $('.owl-carousel').owlCarousel('destroy');
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            dots: true,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                992: {
                    items: 2,
                    nav: true,
                    margin: 50,
                },
                1200: {
                    items: 3,
                    nav: true,
                    margin: 50,
                }
            }
        })

        const arrowL = document.querySelector(".owl-prev");
        arrowL.innerHTML = '<div class="arrow-left"><svg width="20" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 7.75h14.825L11.538 2.3A1.251 1.251 0 1113.463.7l6.25 7.5c.041.06.08.122.112.187 0 .063 0 .1.088.163.056.143.086.296.087.45a1.25 1.25 0 01-.087.45c0 .062 0 .1-.088.162-.033.066-.07.128-.113.188l-6.25 7.5a1.248 1.248 0 01-.962.45 1.25 1.25 0 01-.963-2.05l4.538-5.45H1.25a1.25 1.25 0 110-2.5z" fill="#fff"/></svg></div>';

        const arrowR = document.querySelector(".owl-next");
        arrowR.innerHTML =  '<div class="arrow-right"><svg width="20" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 7.75h14.825L11.538 2.3A1.251 1.251 0 1113.463.7l6.25 7.5c.041.06.08.122.112.187 0 .063 0 .1.088.163.056.143.086.296.087.45a1.25 1.25 0 01-.087.45c0 .062 0 .1-.088.162-.033.066-.07.128-.113.188l-6.25 7.5a1.248 1.248 0 01-.962.45 1.25 1.25 0 01-.963-2.05l4.538-5.45H1.25a1.25 1.25 0 110-2.5z" fill="#fff"/></svg></div>';

    })