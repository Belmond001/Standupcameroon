    var modal = document.getElementById("voteModal");
    var cancelBtn = document.getElementById("closeModal");
    cancelBtn.onclick = function() {
        modal.style.display = "none";
    }
    
    $('.item-element').eq().addClass('active').find('.entry-content').css('display','block');
    $('.entry-title').on('click',function(){
        $(this).siblings('.entry-content').slideToggle('fast');
        $(this).parent().toggleClass('active');
        $(this).parent().siblings().children('.entry-content:visible').slideUp('fast');
        $(this).parent().siblings().children('.entry-content:visible').parent().removeClass('active');
    });
   

    

   function openContent(evt, content) {

        // declare variable
        var i, tabcontent, tablinks;

        // get all element with class=tabcontent and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (var i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display= "none";
        }

        // get all elements with class=tablinks and remove the class active
        tablinks =document.getElementsByClassName("tablink");
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("active", "");
        }

        // show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(content).style.display = "block";

        evt.currentTarget.className += " active";
      
    }

    const accordion = document.getElementsByClassName('wrap-item-section-cirriculum');

    for (i=0; i<accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            this.classList.toggle('active');
        })
    }

    function setShareLinks() {
        var pageUrl = encodeURIComponent(document.URL);
        var tweet = encodeURIComponent($("meta[property='og:description']").attr("content"));

        $("#btn-fb-share").on("click", function() {
            url="https://www.facebook.com/sharer.php?u=" + pageUrl;
            socialWindow(url);
        });

        $("#btn-tw-share").on("click", function() {
            url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
            socialWindow(url);
        });

        $("#btn-in-share").on("click", function() {
            url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
            socialWindow(url);
        })
        $("#btn-wh-share").on("click", function() {
            url = "https://web.whatsapp.com/send?text=" + pageUrl;
            socialWindow(url);
        })

    }
    setShareLinks();

