
if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

!(function($) {
    // regular js
    function formatDate(myDate) {
        var monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var myDay = "<span class='rss-item-pubDate-date'>" + myDate.getUTCDate() + "</span> ";
        var myMonth = "<span class='rss-item-pubDate-month'>" + monthList[myDate.getUTCMonth()] + "</span> ";
        var myYear = "<span class='rss-item-pubDate-full-year'>" + myDate.getUTCFullYear() + "</span> ";
        return myDay + "<br>" + myMonth;
    }
    // ******************************************************************************************
    // Important - add this for all recruiter websites
    // Important - remove this for all jobboard sites
    // This is to be used in conjunction with [[user-loginstatus-with-menu]]
    $(function() {
        $("span.GroupStatus-logInBefore a").remove();
        $("span.GroupStatus-logInBefore").html('<a href="/member/login.aspx" style="padding-top:5px;">Login</a>');
        $("span.GroupStatus-registerBefore a").remove();
        $("span.GroupStatus-registerBefore").html('<a href="/member/register.aspx" style="padding-top:5px;">Register</a>');
    });
    // ******************************************************************************************
    // jquery
    $(function() {

        $('.indeed-apply-widget').parent().parent().addClass('indeedwrap');
        

        // removes duplicate bootstrap libraries
        $("link[href='http://images.jxt.net.au/COMMON/newdash/lib/bootstrap.min.css']").remove();
        $("script[src='http://images.jxt.net.au/COMMON/newdash/lib/bootstrap.min.js']").remove();
        if ($('#site-topnav .user-loggedIn').length) {
            $('a#HiddenMemLog').prop("href", "/member/default.aspx").text('My Dashboard');
        }
        var currentPage = window.location.pathname.toLowerCase();
        // remove empty li's on the system pages. 
        $("#side-left li:empty").remove();
        // remove empty left side bar
        if ($('#prefix_left-navigation').children().length == 0) {
            $('#prefix_left-navigation').remove();
        }
        if ($('#side-left').children().length == 0) {
            $('#side-left').remove();
        }
        // Page Title
        /* $('.dynamic-content-holder h1:first').appendTo($('.page-title .inner-title'));
         $('#content-container #content h1:first').appendTo($('.page-title .inner-title'));
         $('#CV-content h1.CV-Builder-title').appendTo($('.page-title .inner-title'));*/
        /* Adding Bootstrap Classes */
        // Section > Div.container

        //hide before if li is empty
  

$('li').each(function(){
if($(this).html().trim() == "" || typeof($(this).html())=="undefined")
{
    $(this).remove();
}
})


$("form[action='./advancedsearch.aspx?search=1&professionid=4316'] .jxt-result-salary").hide();

var options = $('#professionID1 option');
$( options[1]).insertAfter($(options[18]));



   
        //change button position
        $('.apply-now-link').after($('#ctl00_ContentPlaceHolder1_ucJobApply1_ibApplyWithLinkedIn'));
       $('#ctl00_ContentPlaceHolder1_ucJobApply1_ibApplyWithLinkedIn').addClass('center-block');

       //
        if (currentPage == "/member/createjobalert.aspx"){


            $('.buttonHolder').before('<div> * = mandatory field</div>');

        }




        if (currentPage == "/t/paul-thomson")
        {


            $('.inbox-jobs h2').text("If you’re looking for a new senior level role in IT, check out the jobs that Paul has available now by clicking here.");


        }


        if (currentPage == "/member/createjobalert.aspx"){

            $('h2').html('Explore our latest technology, digital and<br> business transformation opportunities.');
            $('#footer .container-xlarge a').attr('href','/advancedsearch.aspx?search=1');
            


        }

        $('#dynamic-container, #content-container, #job-dynamic-container').addClass('container-fluid');
        $('#dynamic-container, #content-container, #job-dynamic-container').wrapInner('<div class="row"></div>');
        // dynamic side columns column
        $('#dynamic-side-right-container, #side-right').addClass('hidden-xs hidden-sm hidden-md hidden-lg');
        if (!$("#r_full-width").length) {
            $('#dynamic-side-left-container, #side-left, #job-side-column').addClass('hidden-xs col-sm-4 col-md-3');
            if ($.trim($('#dynamic-side-left-container, #side-left').html()).length) {
                $('#dynamic-content, #content').addClass('col-xs-12 col-sm-8 col-md-9');
            } else {
                $('#dynamic-content, #content').addClass('col-sm-12 col-md-12');
            }
        } else {
            $('#dynamic-content, #content').addClass('col-sm-12 col-md-12');
            $('#dynamic-side-left-container, #side-left, #job-side-column').addClass('hidden-xs hidden-sm hidden-md hidden-lg');
        }
        // Dynamic Content column
        if ($.trim($('#side-left').html()).length) {
            $('#dynamic-content, #content').addClass('col-xs-12 col-sm-8 col-md-9');
        } else {
            $('#dynamic-content, #content').addClass('col-sm-12 col-md-12');
        }
        // Responsive table
        $('.dynamic-content-holder table, .content-holder table').addClass('table table-bordered').wrap('<div class="table-responsive"></div>');
        // Convert top menu to Boostrap Responsive menu
        $('.navbar .navbar-collapse > ul').addClass('nav navbar-nav');
        $('.navbar .navbar-collapse > ul > li').has('ul').addClass('dropdown');
        $('.navbar .navbar-collapse > ul > li.dropdown > a').addClass('disabled');
        $('.navbar .navbar-collapse > ul > li.dropdown').append('<a id="child-menu"></a>');
        $('.navbar .navbar-collapse > ul > li.dropdown > a#child-menu').append('<b class="caret"></b>').attr('data-toggle', 'dropdown');
        $('.navbar .navbar-collapse > ul > li > ul').addClass('dropdown-menu');
        // add placeholder for search widget text field
        $('#keywords1').attr('placeholder', 'Keyword search');
        $('#salaryupperband1').attr('placeholder', 'max');
        $('#salarylowerband1').attr('placeholder', 'min');
        // add active class to links.
        $("li a[href='" + window.location.pathname.toLowerCase() + "']").parent().addClass("active");
        $("li.active li.active").parent().closest("li.active").removeClass("active");
        $(".nav li li.active").closest(".nav > li").addClass("active");
        // generate actions button on Job Listing page
        $(".job-navbtns").convertButtons({
            buttonTitle: "Actions&hellip;",
            title: "Please choose&hellip;",
            links: ".job-navbtns a"
        });
        // generate filters button on Job Listing page
        $(".job-navbtns").convertFilters({
            buttonTitle: "Filters&hellip;",
            filteredTitle: "Applied Filters",
            title: "Please choose&hellip;",
            filtered: ".search-query p",
            list: "ul#side-drop-menu",
            excludeFromList: "#AdvancedSearchFilter_PnlCompany"
        });

        if( $('#resultsList').children().length < 1 ){ //no job found case
            $('#resultsList').html('<div class="not-found-message"><h3>No results to display</h3><p>Try searching different criteria.</p> </div>'
                );
            $('#side-drop-menu').hide();
            $('#content').removeClass().addClass('col-xs-12');
        }
    });
    // Resize action
    $(window).on('resize', function() {
        var wi = $(this).width();
        // Mobile & Tablet
        if (wi <= 992) {
            $('.navbar .navbar-collapse > ul > li.dropdown > a').removeAttr('class');
        }
        //  Desktop
        else {
            $('.navbar .navbar-collapse > ul > li.dropdown > a').addClass('disabled');
        }
    });
    $(document).ready(function() {

/*
var currentPage = window.location.pathname.toLowerCase();


         if (currentPage == "/advancedsearch.aspx") {
            $(".content-holder h1").text("Browse jobs");
        }*/



        $(".jxt-premium-job").prepend('<div class="premiumtag">Premium</div>');
        $(".jxt-standout-job").prepend('<div class="standoutTag">Standout</div>');
        // Resize action
        var $window = $(window);
        // Function to handle changes to style classes based on window width
        function checkWidth() {
            if ($window.width() < 992) {
                $('.navbar .navbar-collapse > ul > li.dropdown > a').removeAttr('class');
            }
        }
        // Execute on load
        checkWidth();
        // Bind event listener
        $(window).resize(checkWidth);
        // Home services - carousel
        $('.t-gallery').Gallerycarousel({
            autoRotate: 4000,
            visible: 4,
            speed: 1200,
            easing: 'easeOutExpo',
            itemMinWidth: 250,
            itemMargin: 30
        });
        //job widget
       (function() {
            $("#myJobsList-1 > div").each(function() {
                var that = $(this);
                var dataURL =that.attr("data-url");
                var dataLmt = that.attr("data-limit");
                
                that.includeFeed({
                    baseSettings: {
                        rssURL: dataURL,
                        addNBSP: false,
                        limit: dataLmt
                    },
                    templates: {
                    itemTemplate: "<span class='rss-item' id='rss-item-{{item-index}}'><span class='rss-item-title'><a target='_blank' href='{{link}}'>{{title}}</a></span><span class='rss-description'>{{description}}</span><span class='rssLocation'></span><span class='rssWorktype'></span>  <span class='rss-salary'>{{salaryLowerBand}} - ${{salaryUpperBand}}</span></span>"                    },
                    complete: function() {
                        // put location in a span of its own after pubdate.
                        $(this).children().each(function() {
                            var item = $(this);
                            item.find('.rssLocation').append(item.find('.xmlLocation').html());
                            item.find('.rssWorktype').append(item.find('.xmlWorktype').html());
                        });
                        //$('#myJobsList-1 ul').append(that.html());
                    }
                });
                
            })
        })();

       (function() {
            $("#myJobsList-2 > div").each(function() {
                var that = $(this);
                var dataURL =that.attr("data-url");
                var dataLmt = that.attr("data-limit");
                
                that.includeFeed({
                    baseSettings: {
                        rssURL: dataURL,
                        addNBSP: false,
                        limit: dataLmt
                    },
                    templates: {
                        itemTemplate: "<div class='job-holder rss-item' id='rss-item-{{item-index}}'><div class='job-toplink'><a target='_blank' href='{{link}}'>{{title}}</a></div><div class='job-md-info'><span class='rssLocation'>{{location}}</span><span class='search-result-links-separator'>|</span><span class='rssWorktype'></span><span class='search-result-links-separator'>|</span><span class='rss-salary'>{{salaryLowerBand}} - ${{salaryUpperBand}}</span></div><div><span class='description-text'>{{description}}</span></div></div>"
                    },
                    complete: function() {
                        // put location in a span of its own after pubdate.
                        $(this).children().each(function() {
                            var item = $(this);
                            item.find('.rssLocation').append(item.find('.xmlLocation').html());
                            item.find('.rssWorktype').append(item.find('.xmlWorktype').html());
                        });
                        //$('#myJobsList-1 ul').append(that.html());
                    }
                });
                
            })
        })();



        (function() {
            $("#myJobsList ul").each(function() {
                var dataURL = $(this).attr("data-url");
                $(this).includeFeed({
                    baseSettings: {
                        rssURL: [dataURL || "/job/rss.aspx?addlocation=1&addworktype=1"],
                        addNBSP: false,
                        limit: 1
                    },
                    templates: {
                        itemTemplate: "<li class='rss-item' id='rss-item-{{item-index}}'><span class='rss-item-title'><a target='_blank' href='{{link}}'>{{title}}</a></span><span class='rss-description'>{{description}}</span><span class='rssLocation'></span><span class='rssWorktype'></span>  <span class='rss-salary'>{{salaryLowerBand}} - ${{salaryUpperBand}}</span></li>"
                    },
                    complete: function() {
                        // put location in a span of its own after pubdate.
                        $(this).children().each(function() {
                            var item = $(this);
                            item.find('.rssLocation').append(item.find('.xmlLocation').html());
                            item.find('.rssWorktype').append(item.find('.xmlWorktype').html());
                        });
                    }
                });
            })
        })();
        //home testimonials
        var owl;

         

        var baseUrl = "https://www.finite.com.au/blog/category/how-to/";
        var baseSuffix = "?feed=json&callback=blog_posts";
        var fullUrl = baseUrl + baseSuffix;
        
        $.getScript(fullUrl).done(function(){
            console.log('success');
            // $("#myNewsList ul").owlCarousel({
   //                          autoplay: true, // Show next and prev buttons
   //                          slideSpeed: 4000,
   //                          paginationSpeed: 1500,
   //                          items: 2,
   //                          loop: true,
   //                          dots: true,
   //                          responsive: {
   //                              0: {
   //                                  items: 1
   //                              },
   //                              768: {
   //                                  items: 2
   //                              }
   //                          }
   //                      });
            
           });

        /*$("#testimonial > div").each(function() {
            var dataURL = $(this).attr("data-url");
            $(this).includeFeed({
                baseSettings: {
                    rssURL: [dataURL || "/NewsRSS.aspx"],
                    addNBSP: false
                },
                templates: {
                    itemTemplate: "<div class='testimonial-block col-xs-4'><div class='testimonial-img'><img src='{{imageurl}}' class='img-responsive' alt='testimonial-img'></div><div class='testimonial-content'><h4>{{title}}</h4><span class='rss-item-description'>{{description}}</span><span class='rss-link'><a href='{{link}}' title='Find out more'>Find out more</a></span></div></div>"
                },
                complete: function() {}
            });
        });*/
        //count number of jobs
       // var lastElemInd = $(".skills-list .skill-block").length;
       //  $(".skills-list .skill-block").each(function(index, elem) {
       //      var dataURL = $(elem).attr("data-url");
       //      $(elem).includeFeed({
       //          baseSettings: {
       //              rssURL: [dataURL || "/job/rss.aspx"],
       //              limit:250
       //          },
       //          templates: {
       //              itemTemplate: "<h3>{{title}}</h3>"
       //          },
       //          complete: function() {
       //              $(elem).append('<span id="countelement' + index + '" class="countelements">' + $(elem).find('h3').length + '</span>');




       //              $('#countelement0').text('400');
       //              // if ($("span.countelements").length == lastElemInd) {
       //              bindScrollAnimation(index, $(elem).find('.countelements'));
       //              // }
       //          }
       //      });
       //  });




         $.ajax({
        type: "GET",
        dataType: "xml",
        url:  "/job/rss.aspx",

        error: function(request, type, errorThrown) {
                        // there was an error, so display it in the box. dont use console.log, problems with ie7/8.
                        $(fillElement).html("<div>An error occurred. Please try again later. " + errorThrown + "</div>");
                        return;

                    },

        success: function(xml){
                        // go through each item returned by the ajax call.
                        var outputText = "";
                        var repeatTag = 'item';
                        xmlObj = $(xml);
                    
                        var catArr = xmlObj.find('profession item');
                        var worktypeArr = xmlObj.find('worktype item');


                        var catNameArr = ['Developers/Programmers','Programme & Project Management','Business/Systems Analysts','Security','Engineering - Network','Networks & Systems Administration','Architects'];
                        
                        var flagCount = 1;
                        for( var i=0; i<catArr.length; i++ ){
                            var catTxt='';
                            var txt = $(catArr[i]).text().split('\n');
                            
                                if(txt.length>2){
                                    catTxt=txt[1];
                                }else{
                                    catTxt=txt[0];
                                }
                            var catCount = $(catArr[i]).text().replace(/\D/g,'');
                            if( catNameArr.indexOf(catTxt) > -1 ){
                                flagCount++;
                                $('.skill-block').eq(catNameArr.indexOf(catTxt) + 1).find('span').text(catCount);
                                bindScrollAnimation(catNameArr.indexOf(catTxt),  $(".skills-list .skill-block").find('.countelements'));
                            }
                        }
                        var worktypeCount = 0;
                        for( var i=0; i<worktypeArr.length; i++ ){
                            // worktypeCount += parseInt($(worktypeArr[i].innerHTML)[2].innerHTML);
                            worktypeCount += parseInt($(worktypeArr[i]).text().replace(/\D/g,''));
                        }
                        $('#countelement1').text(worktypeCount);

                        bindScrollAnimation(8,  $(".skills-list .skill-block").find('.countelements'));


                }


        });





        //  $.ajax({
        // type: "GET",
        // dataType: "xml",
        // url:  "/job/rss.aspx",

        // error: function(request, type, errorThrown) {
        //                 // there was an error, so display it in the box. dont use console.log, problems with ie7/8.
        //                 $(fillElement).html("<div>An error occurred. Please try again later. " + errorThrown + "</div>");
        //                 return;

        //             },

        // success: function(xml){
        //                 // go through each item returned by the ajax call.
        //                 var outputText = "";
        //                 var repeatTag = 'item';
        //                 xml = $(xml);
                    
        //                 var catArr = xml.childNodes['0'].childNodes['1'].childNodes[21].childNodes[1].childNodes;
        //                 var worktypeCount = xml.childNodes['0'].childNodes['1'].childNodes[21].childNodes[5].childNodes[1].textContent.split('\n')[2];

        //                 var catNameArr = ['Developers/Programmers','Programme &amp; Project Management','Business/Systems Analysts','Security','Engineering - Network','Networks &amp; Systems Administration','Architects'];
                    
        //                 var flagCount = 1;
        //                 for( var i=0; i<catArr.length; i++ ){
        //                     var catTxt = $(catArr[i].innerHTML)[0].innerHTML;
        //                     // console.log($(catArr[i].innerHTML)[0].innerHTML);
        //                     // console.log($(catArr[i].innerHTML)[2].innerHTML);
        //                     var catCount = $(catArr[i].innerHTML)[2].innerHTML;
        //                     if( catNameArr.indexOf(catTxt) > -1 ){
        //                         flagCount++;
        //                         $('.skill-block').eq(catNameArr.indexOf(catTxt) + 1).find('span').text(catCount);
        //                         bindScrollAnimation(catNameArr.indexOf(catTxt),  $(".skills-list .skill-block").find('.countelements'));
        //                     }
        //                 }
        //                 // var worktypeCount = 0;
        //                 // for( var i=0; i<worktypeArr.length; i++ ){
        //                 //     worktypeCount += parseInt($(worktypeArr[i].innerHTML)[2].innerHTML);
        //                 // }
        //                 $('#countelement1').text(worktypeCount);

        //                 bindScrollAnimation(8,  $(".skills-list .skill-block").find('.countelements'));


        //         }


        // });


        //meet the team
        $("#meet-team").includeFeed({
            baseSettings: {
                rssURL: ["/consultantsrss.aspx"],
                limit: 200,
                addNBSP: false,
                repeatTag: "consultant"
            },
            templates: {
                itemTemplate: "<div class='team-block'><span class='team-img'><a href='/t/{{FriendlyURL}}' title='{{FirstName}} {{LastName}}' class='team-img'><img src='{{ImageURL}}' alt='{{FirstName}} {{LastName}}' title='{{FirstName}} {{LastName}}'></a></span><div class='team-detail'><h5><a href='/t/{{FriendlyURL}}' title='{{FirstName}} {{LastName}}'>{{FirstName}} {{LastName}}</a></h5><span class='position-title'>{{PositionTitle}}</span><span class='team-location'>{{Location}}</span><span class='btn-bio' title='Read Bio'><a href='/t/{{FriendlyURL}}'>Read Bio</a></span></div></div>"
            },
            complete: function() {
                // Callback
                $(this).slick({
                    centerMode: true,
                    centerPadding: '-80px',
                    slidesToShow: 5,
                    autoplay: true,
                    responsive: [{
                        breakpoint: 1199,
                        settings: {
                            centerMode: true,
                            centerPadding: '-40px',
                            slidesToShow: 3
                        }
                    }, {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '-40px',
                            slidesToShow: 1
                        }
                    }]
                });
            }
        });
        // Equal Height 
        $.fn.eqHeights = function(options) {
            var defaults = {
                child: false
            };
            var options = $.extend(defaults, options);
            var el = $(this);
            if (el.length > 0 && !el.data('eqHeights')) {
                $(window).bind('resize.eqHeights', function() {
                    el.eqHeights();
                });
                el.data('eqHeights', true);
            }
            if (options.child && options.child.length > 0) {
                var elmtns = $(options.child, this);
            } else {
                var elmtns = $(this).children();
            }
            var prevTop = 0;
            var max_height = 0;
            var elements = [];
            elmtns.height('auto').each(function() {
                var thisTop = this.offsetTop;
                if (prevTop > 0 && prevTop != thisTop) {
                    $(elements).height(max_height);
                    max_height = $(this).height();
                    elements = [];
                }
                max_height = Math.max(max_height, $(this).height());
                prevTop = this.offsetTop;
                elements.push(this);
            });
            $(elements).height(max_height);
        };
        // Equal Height - Usage
        $('.staff-holder').eqHeights();
        $('.service-holder').eqHeights();
        // if there is a hash, scroll down to it. Sticky header covers up top of content.
        if ($(window.location.hash).length) {
            $("html, body").animate({
                scrollTop: $(window.location.hash).offset().top - $(".navbar-wrapper").height() - $("#dynamic-content, #content").css("padding-top").replace(/[^-\d\.]/g, '')
            }, 100);
        }
        var $individual_info = $('#individual-info');
        $individual_info.hide(0);
        // import consultants into consultants page.
        if ($(".meet-team").length) {
            var teamUL = $(".team-list");
            teamUL.includeFeed({
                baseSettings: {
                    repeatTag: "consultant",
                    rssURL: ["/consultantsrss.aspx"],
                    addNBSP: false,
                    limit: 200
                },
                templates: {
                    itemTemplate: '<li id="consultant-{{ConsultantID}}"><div class="thumb-box clearfix"><div class="team-overlay"><a href="/t/{{FriendlyURL}}"><img src="{{ImageURL}}" alt="{{FirstName}} {{LastName}}"><span class="team-name"><span>{{FirstName}} {{LastName}}</span><span class="team-position">{{PositionTitle}}</span></span></a></div></div><div class="team-desc-main col-sm-8"><div class="team-desc"><h2>{{FirstName}} {{LastName}}</h2><span>{{PositionTitle}}</span><p>{{ShortDescription}}</p><div class="contact-detail"><ul class="list-inline site-social"><li><a href="{{LinkedIn}}" target="_blank" title="twitter"><i class="fa fa-twitter"></i></a></li><li><a href="{{Facebook}}" target="_blank" title="facebook"><i class="fa fa-facebook"></i></a></li><li><a href="{{Twitter}}" target="_blank" title="linkedin"><i class="fa fa-linkedin"></i></a></li></ul></div></div></div></li>'
                },
                complete: function() {
                    /*$('.meet-team-main .team-list a').on('click', function (e) {
                        e.preventDefault();
                    })
                    $('.meet-team-main .team-list li').on('click', function (e) {
                        e.preventDefault();
                        var inner_banner_height = $('.page-title')[0].offsetHeight;
                        var mobile_nav_bar_height = $('button.navbar-toggle')[0].offsetHeight;
                        var individual_section = $(this).html();
                        var scroll_offset = 0;
                        var scroll_offset = inner_banner_height - $("#site-topnav").outerHeight(true, true);
                        if (window.innerWidth < 768) {
                            scroll_offset = $("#individual-info").offset().top;
                        }
                        $('html, body').animate({
                            'scrollTop': scroll_offset
                        }, 1000);
                        if ($individual_info.is(':visible')) {
                            $individual_info.fadeOut('fast', function () {
                                $(this).html('').append(individual_section).fadeIn('fast');
                                $(this).find(".thumb-box").addClass("col-sm-4")
                                $(this).append('<a class="thumb-close-btn" title="close" href="#"><i class="fa fa-times"></i></a>');
                            });
                        } else {
                            $individual_info.html('').append(individual_section);
                            $individual_info.find(".thumb-box").addClass("col-sm-4")
                            $individual_info.append('<a class="thumb-close-btn" title="close" href="#"><i class="fa fa-times"></i></a>');
                            $individual_info.slideDown('slow');
                        }
                    });
                    $("body").on("click", ".thumb-close-btn", function (e) {
                        e.preventDefault();
                        $individual_info.slideUp();
                    });
                    $(".meet-team .btn").click(function (e) {
                        e.preventDefault();
                        $(".team-row").slideDown();
                        $(this).fadeOut();
                    });
                    // detect in there is a hash in the url, then click the link pointing to it if there is.
                    if (location.hash && $(location.hash).length) {
                        $(location.hash).click();
                    }*/
                }
            });
        }
        var options = {
            // useEasing: true,
            // useGrouping: true,
            separator: ',',
            decimal: '.',
            prefix: '',
            suffix: ''
        };
        var demoObj = {};

        function bindScrollAnimation(ind, el) {
            // $("span.countelements").each(function(ind, el) {
            var value = parseInt($(el).text());
            if (value > 0) {
                demoObj[ind] = new CountUp('countelement' + ind, 0, value, 0, 3, options);
                $(window).scroll(function(event) {
                    if ($(window).scrollTop() > ($(".sec-skills").offset().top - ($(window).height() / 2))) {
                        if (!$(el).hasClass('animated')) {
                            $(el).addClass('animated');
                            demoObj[ind].start();
                            console.log(ind);
                        }
                    }
                });
            }
            // });
            /*var demo0 = new CountUp("countelement0", 0, parseInt($("#countelement0").text()), 0, 3, options);
            var demo1 = new CountUp("countelement1", 0, parseInt($("#countelement1").text()), 0, 3, options);
            var demo2 = new CountUp("countelement2", 0, parseInt($("#countelement2").text()), 0, 3, options);
            var demo3 = new CountUp("countelement3", 0, parseInt($("#countelement3").text()), 0, 3, options);
            var demo4 = new CountUp("countelement4", 0, parseInt($("#countelement4").text()), 0, 3, options);
            var demo5 = new CountUp("countelement5", 0, parseInt($("#countelement5").text()), 0, 3, options);
            var demo6 = new CountUp("countelement6", 0, parseInt($("#countelement6").text()), 0, 3, options);
            var demo7 = new CountUp("countelement7", 0, parseInt($("#countelement7").text()), 0, 3, options);
            $(window).scroll(function() {
                if ($(".sec-skills").length > 0) {
                    if ($(window).scrollTop() > ($(".sec-skills").offset().top - ($(window).height() / 2))) {
                        demo0.start();
                        demo1.start();
                        demo2.start();
                        demo3.start();
                        demo4.start();
                        demo5.start();
                        demo6.start();
                        demo7.start();
                    }
                }
            });*/
        }
        $(window).scroll(function() {
            if ($(window).scrollTop() > 100) {
                $("#site-topnav").addClass("shadow");
            } else {
                $("#site-topnav").removeClass("shadow");
            }
        });
        // add iframe url for a map
        function loadMap(iframeObject) {
            // if the iframe has no src or a blank src, and it has a data-src attribute
            if (!(iframeObject.attr("src") && iframeObject.attr("src").length) && iframeObject.attr("data-src")) {
                iframeObject.attr("src", iframeObject.attr("data-src"));
            }
        }
        // scroll to a map
        /*function scrollToDiv(divID) {
            $("html, body").animate({
                scrollTop: $(divID).offset().top - ($("#r27_header-container").height() || 0) - 20
            }, 300);
        }
        // if a location hash is on the url, add active to the div.
        if (location.hash && $(location.hash + ".r27_map").length) {
            $(location.hash + ".r27_map").addClass("active");
        } else {
            // otherwise, just make the first map active.
            $(".r27_map:first").addClass("active");
        }
        loadMap($(".r27_map.active iframe"));
        // contact page maps on click
        $(".r27_contact-map-link").click(function (e) {
            var myLink = $(this).attr("href")
            var targetMap = $(myLink.substr(myLink.indexOf("#")));
            if (targetMap.length) {
                e.preventDefault();
                loadMap(targetMap.children("iframe"));
                scrollToDiv(targetMap);
                $(".r27_map").not(targetMap).removeClass("active");
                targetMap.addClass("active");
            }
        });*/
        // contact page stop scrolling until clicked.
        /* $(".r27_map-overlay").click(function () {
             $(this).hide();
         });*/
        new WOW().init();
        // inner banners
        var pageTitle = window.location.pathname.replace("/", "");
        if (pageTitle != "") {
            $("body").addClass(pageTitle);
        }
        if ($("#prefix_banner-container").length > 0) {
            $("body").addClass('home-bg');
        }
        //search widget mobile
        $('.widget-search').click(function() {
            $('#wrapper').addClass('widget-toggle');
        })
        $('.search-close').click(function() {
                $('#wrapper').removeClass('widget-toggle');
            })
            /*$(".banner-logo").addClass('active');
            $($(".logo-orbits").get().reverse()).each(function(index, el) {
               setTimeout(function(){
                    $(el).addClass('active');
               }, (index+1)*1000); 
            });
            $(".banner-logo").removeClass('active');
            $(".logo-orbits").removeClass('active');
        $('#carousel-example-generic').on('slid.bs.carousel', function () {
  setTimeout(function(){
    $(".banner-logo .logo").addClass("active");
  }, 100)
  $(".banner-logo .logo").removeClass("active");
})*/
            /*   $(".logo-orbits").removeClass("active");
               ripple();
               $('#carousel-example-generic').on('slide.bs.carousel', function () {
                   ripple()
               })

               function ripple() {
                   var el = $('.logo-orbits');
                   var index = 0;
                   var timer = window.setInterval(function () {
                       if (index < el.length) {
                           console.log(123);
                           el.eq(index++).addClass('active');
                       } else {
                           window.clearInterval(timer);
                       }
                   }, 700);
                   $(".logo-orbits").removeClass("active");
               }*/
            //search query
        $(".search-query").each(function() {
            $('.search-query').appendTo($('#jobsearch-top'));
        });
        //selectbox
        $("#widget-search select").selectbox();
        //advanced search page
        if ($('.job-holder').length > 0) {
            $('body').addClass('job-container');
        }
        if ($('.r2-team-detail').length > 0) {
            $('body').addClass('team-page');
        }
        //testimonial slider
        $('.team-testimonial').owlCarousel({
            loop: true,
            margin: 10,
            dots: true,
            autoplay:  5000,
            autoHeight: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                }
            }
        });
        //counter
        var a = 0;
        $(window).scroll(function() {
            if ($('.skills-list').length > 0) {
                var oTop = $('.skills-list').offset().top - window.innerHeight;
                if (a == 0 && $(window).scrollTop() > oTop) {
                    $('.count').each(function() {
                        var $this = $(this),
                            countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                                //alert('finished');
                            }
                        });
                    });
                    a = 1;
                }
            }
        });
        // inner banners
        // write inner banner image if it doesn't already contain an image
        /*if ( $(".page-title:visible").length  && !$(".page-title img").length )
        {
            var parentIndex;
            $(".navbar .nav > li > a").each(function(){
                if ( location.pathname.toLowerCase() == $(this).attr("href") )
                {
                    parentIndex = $(this).closest(".navbar-nav > li").index();
                }
            });
            var bgImage = "url(/media/site/finite-it/images/banner/slider-" + (parentIndex > -1 ? parentIndex : +1) + ".jpg)";
            $(".page-title").css( "background-image", bgImage );
        }*/
        //testimonial slider
        $('.client-list').owlCarousel({
            loop: true,
            margin: 10,
            dots: false,
            autoplay: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 3,
                    nav: false
                },
                1200: {
                    items: 5,
                    nav: false
                }
            }
        });
        /*  $('.content-holder').html('<a href="#" class="saved-job-list">My Saved Jobs</a>');*/
        //job board
        $(".job-holder").each(function() {
            $('<div class="readmore-job"></div>').appendTo($(this).find('.job-breadcrumbs')).append($(this).find('.job-toplink > a').clone().text('view Job & Apply'));
            $('<div class="save-job"></div>').appendTo($(this).find('.job-breadcrumbs')).append($(this).find('.job-rightlinks > .search-result-save-job-link').clone().text('Save Job'));
            /*$('.dateText').appendTo('.locandsalary');*/
            $(this).find('.description-text').append($(this).find('.job-breadcrumbs'));
            $(this).append('<div class="job-heading" /><div class="job-cta" />');
            $(this).find('.job-rightlinks').appendTo($(this).find('.job-cta'));
            $(this).find('.locandsalary').appendTo($(this).find('.job-cta'));
            $(this).find('.job-toplink').appendTo($(this).find('.job-heading'));
            $(this).find('.dateText').appendTo($(this).find('.locandsalary'));
            //$(this).find('.jxt-result-salary').appendTo($(this.)find('.locandsalary'));
          
            //$clone_elem= $(this).find('.jxt-result-salary').clone();
           // $(this).find('.locandsalary').append($clone_elem);
           // $('.jxt-result-salary').remove();





            
            $(this).find('.description-text').appendTo($(this));
        });
        //job description
        $("#jobdetail-interested-in-job").appendTo($(".job-ad-mini"));
        $("#job-dynamic-container").prepend("<h1>Latest Jobs</h1>");
        $(".dateText").prepend("<span>Posted  </span>");
        $(".jobdetail-padding .apply-now-link").prepend("<h2>Interested in this Job </h2>");
        $('#jobdetail-social-media h2').text('Share this job on');
        if ($("#jobsearch-top").length > 0) {
            $('.content-holder').prepend("<h1 class='job-head'>Browse Jobs</h1>");
            $(".content-holder").prepend("<a href='/member/mysavedjobs.aspx' class='saved-job-list'>My Saved Jobs</a> ");
        }
        $('[itemprop="baseSalary"]').text($('[itemprop="baseSalary"]').text().replace("to ", "to $"));
        $('[itemprop="baseSalary"]').text("$" + $('[itemprop="baseSalary"]').text().trim());
        $("[itemprop='datePosted']").text($("[itemprop='datePosted']").text().trim().split(" ")[0]);
        //scroll
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                var h = document.getElementById('Top-nav-sticky');
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - h.offsetHeight
                    }, 1000);
                    return false;
                }
            }
        });
    });
    $(window).load(function() {
        $("#widget-search .custom-select ul.sbOptions").mCustomScrollbar({
            theme: "dark"
        });
        mapInit();
    });

    function mapInit() {
        // Get User's Coordinate from their Browser
        // HTML5/W3C Geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(UserLocation);
        }
        // Default to Washington, DC
        else NearestCity(38.8951, -77.0367);
        // Callback function for asynchronous call to HTML5 geolocation
        function UserLocation(position) {
            console.log(position.coords.latitude, position.coords.longitude);
            NearestCity(position.coords.latitude, position.coords.longitude);
            console.log(position.coords.latitude);
        }
        // Convert Degress to Radians
        function Deg2Rad(deg) {
            return deg * Math.PI / 180;
        }

        function PythagorasEquirectangular(lat1, lon1, lat2, lon2) {
            lat1 = Deg2Rad(lat1);
            lat2 = Deg2Rad(lat2);
            lon1 = Deg2Rad(lon1);
            lon2 = Deg2Rad(lon2);
            var R = 6371; // km
            var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
            var y = (lat2 - lat1);
            var d = Math.sqrt(x * x + y * y) * R;
            return d;
        }
        var lat = 20; // user's latitude
        var lon = 40; // user's longitude
        var positions = {};
        $(".r27_map[data-lat]").each(function(index, el) {
            var lat = $(el).attr("data-lat");
            var long = $(el).attr("data-long");
            positions[index] = {
                "lat": lat,
                "long": long,
            };
            $(this).attr("data-index", index);
        });
        /*var cities = [
            ["Iscon mega mall", 23.030513, 72.5053514, "1"],
            ["Nadiad", 22.6958525, 72.8412167, "2"],
            ["Goa", 15.3477003, 73.7321203, "3"],
            ["Naroda", 23.0690888, 72.6491766, "4"],
        ];*/
        function NearestCity(latitude, longitude) {
            var mindif = 99999;
            var closest;
            /*for (index = 0; index < positions.length; ++index) {
                var dif = PythagorasEquirectangular(latitude, longitude, positions[index][0], positions[index][1]);
                if (dif < mindif) {
                    closest = index;
                    mindif = dif;
                }
            }*/
            jQuery.each(positions, function(i, val) {
                var dif = PythagorasEquirectangular(latitude, longitude, val.lat, val.long);
                if (dif < mindif) {
                    closest = i;
                    mindif = dif;
                }
            });
            // echo the nearest city
            //console.log($(".r27_map[data-index='" + closest + "']").closest('.contact-detail'), closest);
            //$(".r27_map[data-index='" + closest + "']").closest('.contact-detail').insertAfter($(".location-list"));
        }
    }
    /* testimonials - blog - trial */
   /* $(document).ready(function() {
        var baseUrl = "https://dev.project-progress.net/projects/finite/";
        var baseSuffix = "?feed=json&callback=blog_posts";
        var fullUrl = "https://dev.project-progress.net/projects/finite/wp-json/wp/v2/posts/?feed=json&callback=blog_posts";
        $.getScript(fullUrl).done(function() {
            console.log($("#testimonial > div"));
        });
    });*/


window.onload = function() {

  $(".jobdetail-options").prependTo("#ctl00_ContentPlaceHolder1_ucJobApply1_divApplyNow");
};

    
})(jQuery);

/*function blog_posts(obj) {
    for (var index = 0; index < obj.length && index < 10; ++index) {
        // add post span
        var thumb = '';
        if (obj[index].thumbnail) {
            var thumbArr = obj[index].thumbnail.split(",");
            if (thumbArr.length > 1) {
                for (var k = 0; k < thumbArr.length; k++) {
                    var thumbSize = thumbArr[k].trim().split(" ");
                    if (parseInt(thumbSize[1]) <= 350) {
                        thumb = thumbSize[0];
                        break;
                    }
                }
            } else if (thumbArr.length == 1) {
                thumb = thumbArr[0];
            }
        } else {
            thumb = "/media/future-you/images/placeholder-image.jpg";
        }
        $("#testimonial > div").append("<li><div class='rss-item'><div class='news-block'>" + "<figure style='background-image:url(" + thumb + ")' class='news-img'><img src='" + thumb + "' class='bannerImage' alt='" + obj[index].title + "'></figure>" + "<div class='rss-item-title'><a target='_blank' href='" + obj[index].permalink + "'>" + obj[index].title + "</a></div>" + "<span class='rss-item-meta'>By " + obj[index].author + " | " + obj[index].categories.join(', ') + "</span>" + "<div class='rss-item-description'>" + obj[index].excerpt + "</div>" + "<span class='rss-item-link'><a target='_blank' href='" + obj[index].permalink + "' title='" + obj[index].title + "'>Read More <i class='icon-button-arrow'></i></a></span>" + "</div></li>");
    }
}*/

function blog_posts(obj) {

        for (var index = 0; index < obj.length && index < 3; ++index) {
            // add post span
            console.log(obj[index].thumbnail.split(" "));
            var thumbStr = obj[index].thumbnail;
            if( thumbStr.length > 4 ){
                thumbStr = thumbStr.split(" ");
                if( thumbStr.length > 5 ){
                    thumbStr = thumbStr[4]; 
                }
            }else{
                thumbStr = '/media/future-you/images/placeholder-image.jpg'; //default image
            }
            $("#testimonial >div").append("<div class='testimonial-block col-xs-4' style='background-image:url("+ thumbStr +")'><div class='testimonial-content'><h4>" + obj[index].title + "</h4><span class='rss-link'><a target='_blank' href='" +  obj[index].permalink + "'>Find out more</a></span></div></div>");

             // $("#testimonial >div").append("<div class='testimonial-block col-xs-4' style='background-image:url("+ thumbStr +")'><div class='testimonial-content'><h4>" + obj[index].title + "</h4><span class='rss-item-description'>"+obj[index].excerpt +"</span><span class='rss-link'><a target='_blank' href='" +  obj[index].permalink + "'>Find out more</a></span></div></div>");
        }

    }