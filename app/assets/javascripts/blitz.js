function show() {
    content = document.querySelector();
    alert();
}

$(document).ready(function(){
    $(".readingList").click(function(e) {
        e.preventDefault();

        content = $(this).data("library-content")
        $("#spritz_me").text( content );
        // blitz(content);
    });
});

function blitz( book ) {
    // content = 
    read = book;
    spritz = document.getElementById("spritz");
    progress_count = document.getElementById("progress-count");
    // var read = document.getElementById("readthis").innerHTML;
    main = document.getElementById("main");

    // q = document.querySelector("#readingList");
    // read = q.getAttribute("data-library-content");

    var word_list = read.split(" ");
    var word_progress = word_list.length;

    NProgress.start();
    $("#main").addClass("invisible");

    for(var i = 0; i < word_list.length; i++) {
        (function(i) {
            setTimeout( function(){
                spritz.innerHTML = "";
    //                    progress_count.innerHTML = "";
                spritz.innerHTML += word_list[i];
                
                var progress = 1 - (word_progress / word_list.length);
    //                    progress_count.innerHTML += progress;
                NProgress.set(progress);
                if ( progress > 0.97 ) {
                    NProgress.done();
                }
                
                word_progress--;
            }, i*350)
        })(i)
    }

    NProgress.done();
    // $("#main").removeClass('invisible');
    $('.fade').removeClass('out');   
}