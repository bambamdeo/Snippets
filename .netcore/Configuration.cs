public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
{
  //Redirect to specific path on specific status code
  app.Use(async (context, next) =>
    {
        await next();
        if (context.Response.StatusCode == 404)
        {
            context.Request.Path = "/Home"; 
            await next();
        }
    });
  ////OR  
  
// app.UseStatusCodePages(context => context.HttpContext.Response.SendAsync("Handler, status code: " + context.HttpContext.Response.StatusCode, "text/plain"));
// app.UseStatusCodePages("text/plain", "Response, status code: {0}");
// app.UseStatusCodePages(builder => builder.UseWelcomePage());
   app.UseStatusCodePagesWithReExecute("/Home/Error");
// app.UseStatusCodePagesWithRedirects("~/errors/{0}"); // PathBase relative
// app.UseStatusCodePagesWithRedirects("/base/errors/{0}"); // Absolute

// app.UseDeveloperExceptionPage()
// app.UseDatabaseErrorPage()
// app.UseExceptionHandler()

  
  ////Use vs Run
   app.Use(async (context, next) =>
    {
        await context.Response.WriteAsync("<html><body>");
        await context.Response.WriteAsync("<div>Inside middleware defined using app.Use</div>");
        await next();
        await context.Response.WriteAsync("</body></html>");
    });
  //contnue to next middleware
 
    app.Run(async context => { 
       await context.Response.WriteAsync("<div>Inside middleware defined using app.Run</div>"); 
    });
  //stop and return
  
  
  
}
