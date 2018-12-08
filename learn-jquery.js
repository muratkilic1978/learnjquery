
// Lesson 1
$(document).ready(function(){

  // BASIC SELECTORS
  //$('*').css('border', '4px solid red');
  //$('body p.lead').css('border', '4px solid red');
  //$('body p.lead').css('font-size', '2em');
  //$('body p.lead').css('border-radius', '10px');
  //$('h2:odd').css('color', 'purple');
  //$('.box:nth-child(1)').css('background-color', 'black');
  $('.box:odd').css('background-color', 'darkblue'); 
  $('.box:even').css('background-color', 'maroon');  

  //document.querySelector(".box:last-child").textContent ='5';
  //$(".box").text("string");
  //$('.box:last').text("5");
  //document.querySelector("a:last-child").text('Millenium.dk');
    //$('a:last-child').text('Millenium.dk');
  //$('a:last').text('Millenium.dk');
  
  //$('a:last').attr('href','http://www.millenium.dk');
  
  
  
  $('h1').addClass('styleHeading');
  //$('.box:first').hide(1000).delay(200).show(900);
  //$('.box:first').slideUp(1000).slideDown(1100);
  //$('.box:even').fadeOut(1500).fadeIn(1600);
  //$('.box:odd').slideUp(1500).slideDown(1600);
  // BASIC ANIMATIONS
  //$('.box:nth(0)').animate({bottom: '280px', left: '539px', }, 1800);
  //$('.box:nth(1)').animate({bottom: '210px', left: '470px', }, 1800);
  //$('.box:nth(2)').animate({bottom: '140px', left: '401px', }, 1800);
  //$('.box:nth(3)').animate({bottom: '70px', left: '330px', }, 1800);
  //$('.box:nth(4)').animate({bottom: '5px', left: '261px', }, 1800);
  //$('li:first').animate({bottom: '100px', left: '100px', }, 1000);
  //$('li:even').slideUp(1500);  
    
 

  // INDEX FILTERS
  //$('p:gt(1)').css('border', '4px solid green');
  //$('p:eq(1)').css('border', '4px solid green');
  $('p:lt(1)').css('border', '4px solid green');

  // RELATIONSHIP FILTERS
  //$('h2:has(span)').css('border', '4px solid maroon');
  //$('a:odd').css('text-decoration','none');
  //$('.box:empty').css('border', '4px dotted white');
  //$('.box:parent').css('border', '4px dotted white');
  //$('h2:nth(1)').css('border', '2px dotted purple');

  // ATTRIBUTE FILTERS
  //$('p[name="shorty"]').css('border','3px solid darkblue');
  //$('p[name="maxie"]').css('text-decoration','underline');
  //$('a[href="http://amazon.com"]').css('text-decoration', 'none');
  //$('a[href$=".com"]').css('text-decoration', 'none');
  //$('a[href$=".co.uk"]').css('border', '4px solid red');

});



// Lesson 2
$(function(){

  // ATTR METHOD
  //$('p:first').attr('class', 'not-lead');

  // IMAGE SWAP
  //$('img').attr('src', 'img2.jpg');
  // $('img').delay(400).fadeOut(500, function(){
  //   $(this).attr('src', 'img2.jpg').fadeIn(500);
  // });

  // CLASS METHODS
  //$('p').toggleClass('blue').removeClass('lead');

  // CONTENT METHODS
  //$('p:first').html('<a href="google.com">link</a>');
  // $('input').val('yo dude!');

});



// Lesson 3
$(function(){

  // DOM TRAVERSAL
  // $('h2').parents('section').siblings('header').children().css('border', '4px solid red');


  // EVENT BINDING
  // $('html').keypress(function(){
  //   $(this).toggleClass('blue');
  // });


});
