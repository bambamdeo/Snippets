 var delay=1000, setTimeoutConst;
    $('.className').on('hover', function() {
           setTimeoutConst = setTimeout(function(){
                  //routine work or anything
           }, delay);
        }, function(){
         clearTimeout(setTimeoutConst );
     });
