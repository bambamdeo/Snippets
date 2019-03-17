//Most properties used in asax call
$.ajax({
            method: "GET",//The HTTP method to use for the request (e.g. "POST", "GET", "PUT"). 
            url: "RequestUrl", //A string containing the URL to which the request is sent.
            contentType: "application/json; charset=utf-8", //A string containing a MIME content type to set for the request. The default value is application/x-www-form-urlencoded.
            dataType: "json",//the type of data expected back from the server (xml, html, json, or script).
            data: JSON.stringify(obj), //A map or string that is sent to the server with the request.            
            processData: true,//Whether to convert the submitted data from an object form into a query-string form. The default value is true.
            
            async : true,// A Boolean indicating whether to perform the request asynchronously. The default value is true.            
            ifModified: false,//A Boolean indicating whether the server should check if the page is modified before responding to the request.
            
            contents:  //string/regular-expression pairs that determine how jQuery will parse the response, given its content type.
            
            timeout:1600,// Number of milliseconds after which the request will time out in failure.
            
            error: function( jqXHR, textStatus, errorThrown ){ // A callback function that is executed if the request fails.
            //textStatus values are null, "timeout", "error", "abort" and "parsererror"
            },
            success: function(  data,  textStatus,  jqXHR ){// A callback function that is executed if the request succeeds.
            },
            complete:function( jqXHR, textStatus ){// A callback function that executes whenever the request finishes.(after success and error callbacks are executed)
            //textStatus possible valuse are "success", "notmodified", "nocontent", "error", "timeout", "abort" and "parsererror"
            },
            statusCode:// default: {}//An object of numeric HTTP codes and functions to be called when the response has the corresponding code. 
            {
              404: function() {      alert( "page not found" );    },
              301: function() {      alert( "redirected " );    }
              //If the request is successful, the status code functions take the same parameters as the success callback;
              //if it results in an error (including 3xx redirect), they take the same parameters as the error callback.
            }            
        });


//////////////////////////////////////////////////////
//May be used to do more
$.ajax({
            method: "GET",//The HTTP method to use for the request (e.g. "POST", "GET", "PUT").           
      //      type: "GET", //an alias to method i.e, no use in jQuery 1.9 or later
            url: "RequestUrl", //A string containing the URL to which the request is sent.
            contentType: "application/json; charset=utf-8", //A string containing a MIME content type to set for the request. The default value is application/x-www-form-urlencoded.
            dataType: "json",//the type of data expected back from the server (xml, html, json, or script).
            data: JSON.stringify(obj), //A map or string that is sent to the server with the request.            
            processData: true,//Whether to convert the submitted data from an object form into a query-string form. The default value is true.
            
            async : true,// A Boolean indicating whether to perform the request asynchronously. The default value is true.            
            ifModified: false,//A Boolean indicating whether the server should check if the page is modified before responding to the request.
            
            contents:  //string/regular-expression pairs that determine how jQuery will parse the response, given its content type.
            crossDomain: false, //to force a crossDomain request (such as JSONP) on the same domain
            username:"deo",// A username to be used in response to an HTTP access authentication request.
            password: "****",//A password to be used in response to an HTTP access authentication request.
            timeout:1600,// Number of milliseconds after which the request will time out in failure.
            global: true,//A Boolean indicating whether global AJAX event handlers will be triggered by this request. The default value is true.
            
            error: function( jqXHR, textStatus, errorThrown ){ // A callback function that is executed if the request fails.
            //textStatus values are null, "timeout", "error", "abort" and "parsererror"
            },
            success: function(  data,  textStatus,  jqXHR ){// A callback function that is executed if the request succeeds.
            },
            complete:function( jqXHR, textStatus ){// A callback function that executes whenever the request finishes.(after success and error callbacks are executed)
            //textStatus possible valuse are "success", "notmodified", "nocontent", "error", "timeout", "abort" and "parsererror"
            },
            statusCode:// default: {}//An object of numeric HTTP codes and functions to be called when the response has the corresponding code. 
            {
              404: function() {      alert( "page not found" );    },
              301: function() {      alert( "redirected " );    }
              //If the request is successful, the status code functions take the same parameters as the success callback;
              //if it results in an error (including 3xx redirect), they take the same parameters as the error callback.
            },
            beforeSend: function( xhr ) { //A callback function that is executed before the request is sent.
              xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
            },
            dataFilter:function( data, type){
            // A function to be used to handle the raw responsed data of XMLHttpRequest. 
            //This is a pre-filtering function to sanitize the response.
            },
            jsonp:"onJSONPLoad" ,//Override the callback function name in a JSONP request. 
            //This value will be used instead of 'callback' in the 'callback=?' part of the query string in the url.             
            xhr: function(){//(default: ActiveXObject when available (IE), the XMLHttpRequest otherwise),
              var xhr = jQuery.ajaxSettings.xhr();  //Callback for creating the XMLHttpRequest Override to provide your own implementation for XMLHttpRequest or enhancements to the factory
              return xhr;
            }
            
        });
