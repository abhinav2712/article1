$(function() {

    "use strict";

    //===== Prealoder

    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    //===== Sticky

    // grab an element
    var myElement = document.querySelector(".headroom");
    // construct an instance of Headroom, passing the element
    var headroom  = new Headroom(myElement);
    // initialise
    headroom.init();


    $('#nav').onePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 800,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function() {
            //I get fired when the animation is starting
        },
        end: function() {
            //I get fired when the animation is ending
        },
        scrollChange: function($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });


    $.scrollIt({
        scrollTime: 800,
    });


    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });


    //===== Mobile Menu

    $(".navbar-toggler").on('click', function(){
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });

    var subMenu = $(".sub-menu-bar .navbar-nav .sub-menu");

    if(subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <span></span> </button>';
        });

        var subMenuToggler = $(".sub-menu-bar .navbar-nav .sub-nav-toggler");

        subMenuToggler.on('click', function() {
            $(this).parent().parent().children(".sub-menu").slideToggle();
            return false
        });

    }


    //===== Counter Up

    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });


    //===== Isotope Project 1

    $('.container').imagesLoaded(function () {
        var $grid = $('.grid').isotope({
        // options
            transitionDuration: '1s',
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {

            }

        });

        // filter items on button click
        $('.project-menu ul').on( 'click', 'li', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });

        //for menu active class
        $('.project-menu ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });


    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    //=====  services progress

    if($('.our-services-progress').length){
        $('.our-services-progress').appear(function(){
            Circles.create({
                id: 'circles-1',
                radius: 50,
                value: 95,
                maxValue: 100,
                width: 3,
                text: function(value){return value + '%';},
                colors: ['#f0f0f0', '#f14836'],
                duration: 1000,
                wrpClass: 'circles-wrp',
                textClass: 'circles-text',
                styleWrapper: true,
                styleText: true,
            });
        });
    }

    if($('.our-services-progress').length){
        $('.our-services-progress').appear(function(){
            Circles.create({
                id: 'circles-2',
                radius: 50,
                value: 85,
                maxValue: 100,
                width: 3,
                text: function(value){return value + '%';},
                colors: ['#f0f0f0', '#f14836'],
                duration: 1000,
                wrpClass: 'circles-wrp',
                textClass: 'circles-text',
                styleWrapper: true,
                styleText: true,
            });
        });
    }

    if($('.our-services-progress').length){
        $('.our-services-progress').appear(function(){
            Circles.create({
                id: 'circles-3',
                radius: 50,
                value: 75,
                maxValue: 100,
                width: 3,
                text: function(value){return value + '%';},
                colors: ['#f0f0f0', '#f14836'],
                duration: 1000,
                wrpClass: 'circles-wrp',
                textClass: 'circles-text',
                styleWrapper: true,
                styleText: true,
            });
        });
    }

    if($('.our-services-progress').length){
        $('.our-services-progress').appear(function(){
            Circles.create({
                id: 'circles-4',
                radius: 50,
                value: 70,
                maxValue: 100,
                width: 3,
                text: function(value){return value + '%';},
                colors: ['#f0f0f0', '#f14836'],
                duration: 1000,
                wrpClass: 'circles-wrp',
                textClass: 'circles-text',
                styleWrapper: true,
                styleText: true,
            });
        });
    }


    //===== slick Testimonial

    $('.testimonial-active').slick({
        dots: false,
        arrows: true,
        prevArrow: '<span class="prev"><i class="lni-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="lni-arrow-right"></i></span>',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 1,
    });



    var w=window.innerWidth,
        h=window.innerHeight,
        amount=((w*h)/10000)|0;
    outOf.textContent=amount+1;
    c.width=w;
    c.height=h;
    var ctx=c.getContext('2d');

    var inGame=false,
        cells=[];
    function getRandomColor(min){
      return 'rgb(cr, cg, cb)'.replace(
        'cr', (Math.random()*(255-min))|0+min).replace(
        'cg', (Math.random()*(255-min))|0+min).replace(
        'cb', (Math.random()*(255-min))|0+min)
    };
    clicked=false;
    function init(){
      clicked=false;
      ctx.fillStyle='black';
      ctx.fillRect(0, 0, w, h);
      score.textContent='0';
      cells=[];
      for(var n=0; n<amount; ++n){
        cells.push(new Cell);
      }
      inGame=true;
      anim();
    }
    var maxSize=10, minSize=6,
        maxV=4;
    function Cell(size, x, y){
      this.color=getRandomColor(100);
      this.size=size||Math.random()*(maxSize-minSize)+minSize;
      this.initSize=this.size;
      this.x=x||Math.random()*w;
      this.y=y||Math.random()*h;
      this.vx=Math.random()*maxV*2-maxV;
      this.vy=Math.random()*maxV*2-maxV;
      this.exploded=false;
      this.explosionSize=10;
    }
    Cell.prototype.update=function(){
      this.x+=this.vx;
      this.y+=this.vy;

      if(this.x<0||this.x>w) this.vx*=-1;
      if(this.y<0||this.y>h) this.vy*=-1;


      ctx.fillStyle=this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, Math.abs(this.size/2), 0, Math.PI*2);
      ctx.fill();
      ctx.closePath();
      //ctx.fillRect(this.x-this.size/2, this.y-this.size/2, this.size, this.size);

      if(this.exploded){
        if(this.size>0){
          this.explosionSize+=1/this.explosionSize*10;
          this.size-=0.05;
        }else{
          cells.splice(cells.indexOf(this), 1);
        }
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.explosionSize, 0, Math.PI*2);

        for(var i=0; i<cells.length; ++i){
          var cell=cells[i];
          if(!cell.exploded){
            var a=this, b=cell;
            var distX=a.x-b.x,
                distY=a.y-b.y,
                dist=Math.sqrt((distX*distX)+(distY*distY));
            if(dist<=this.explosionSize) cells[i].explode();
          }
        }

        ctx.strokeStyle=this.color;
        ctx.stroke();
        ctx.closePath();
      }
    }
    Cell.prototype.explode=function(){
      this.exploded=true;
      this.vx=this.vy=0;
      score.textContent=parseInt(score.textContent)+1;
    }
    nextInit=false;
    function anim(){
      if(nextInit){
        nextInit=false;
        init();
        return;
      }
      if(inGame) window.requestAnimationFrame(anim);
      ctx.fillStyle='rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, w, h);
      var c;
      for(c=0; c<cells.length; ++c) cells[c].update();

      if(cells.length===0) gameOver();
    }
    function gameOver(){
      inGame=false;
    }
    init();
    document.addEventListener('click', function(e){
      if(!inGame) init();
      else if(clicked) nextInit=true;
      else{
        var cell=new Cell(15, e.clientX, e.clientY)
        cells.push(cell);
        cell.explode();
        clicked=true;
      }
    })











    //===== Magnific Popup

    $('.image-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });




    //=====  WOW active

    new WOW().init();



});
