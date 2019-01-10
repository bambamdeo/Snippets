  var scroll = '';
   var $scrollable = $("#sortable");
   function scrolling(){
     if (scroll == 'up') {
       $scrollable.scrollTop($scrollable.scrollTop()-20);
       setTimeout(scrolling,50);
     }
     else if (scroll == 'down'){
       $scrollable.scrollTop($scrollable.scrollTop()+20);
       setTimeout(scrolling,50);
     }
   }

   $( "#sortable" ).sortable({
      scroll:false,
      out: function( event, ui ) {
        if (!ui.helper) return;
        if (ui.offset.top>0) {
          scroll='down';
        } else {
          scroll='up';
        }
        scrolling();
      },
      over: function( event, ui ) {
        scroll='';
      },
      deactivate:function( event, ui ) {
        scroll='';
      }
    });
    $( "#sortable").disableSelection(); 
    
    
    
   // OR in Reverse
   
   
   $(".sortable").sortable({
    scroll: true,
    scrollSensitivity: 80,
    scrollSpeed: 3,
    sort: function(event, ui) {
        var currentScrollTop = $(window).scrollTop(),
            topHelper = ui.position.top,
            delta = topHelper - currentScrollTop;
        setTimeout(function() {
            $(window).scrollTop(currentScrollTop + delta);
        }, 5);
    }
});
   
   
   
   
