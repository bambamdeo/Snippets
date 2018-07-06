
$('iframe').on('load', function (e) {
        var body = $('iframe').get(0).contentWindow.document.body;
        $(body).find('#header').hide();
        $(body).find('#footer').hide();

        $('iframe').height('500px');
        $('iframe').height($('iframe').get(0).contentWindow.document.body.offsetHeight + 'px');      
        
    });
/* OR*/
    $('iframe').load(function () {
        setTimeout(function () {
            $('iframe').height($('iframe').get(0).contentWindow.document.body.offsetHeight + 'px');
        }, 3000);
    });
