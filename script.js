// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const menuToggleCheckbox = document.getElementById('menu-toggle-checkbox');
    const menuToggleLabel = document.querySelector('.menu-toggle label');
    const menu = document.querySelector('.menu');

    menuToggleLabel.addEventListener('click', function() {
        menu.classList.toggle('show-menu');
    });
});

$(document).ready(function($) {
	$(".process-step").click(function() {
    var theClass = $(this).attr("class").match(/(^|\s)step-\S+/g);
    var bute = $.trim(theClass);
    switch (bute) { 
         case "step-1": 
       $(".process-wrap").addClass("active-step1")
        break;
      case 'step-2': 
         $(".process-wrap").attr('class', 'process-wrap');
        $(this).parents(".process-wrap").addClass("active-step2")
        break;
      case 'step-3': 
         $(".process-wrap").attr('class', 'process-wrap');
        $(this).parents(".process-wrap").addClass("active-step3")
        break;
      case 'step-4': 
         $(".process-wrap").attr('class', 'process-wrap');
        $(this).parents(".process-wrap").addClass("active-step4 ")
        break;		
      default:
        $(".process-wrap").attr('class', 'process-wrap');
    }
  })
  
  $(".process-dots").click(function() {
    if ($(this).hasClass("ship-process-dot-1"))  {
       $(".process-wrap").attr('class', 'process-wrap active-step1')
        $(this).parents().find(".process-wrap").addClass("active-step1")
      
      }
    if ($(this).hasClass("ship-process-dot-2"))  {
      $(".process-wrap").attr('class', 'process-wrap active-step1')
        $(this).parents().find(".process-wrap").addClass("active-step1-mini2")
        
      }
    if ($(this).hasClass("ship-process-dot-3"))  {
      $(".process-wrap").attr('class', 'process-wrap active-step1')
        $(this).parents().find(".process-wrap").addClass("active-step1-mini3")

      }
    if ($(this).hasClass("ship-process-dot-4"))  {
      $(".process-wrap").attr('class', 'process-wrap active-step1')
        $(this).parents().find(".process-wrap").addClass("active-step1-mini4")
      }
   });
  
});
