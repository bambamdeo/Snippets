 public sealed class ArgumentsFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {

            if (filterContext.HttpContext.Request.QueryString["attr"] != null)
            {
                string action = filterContext.ActionDescriptor.ActionName;
                string controller = filterContext.ActionDescriptor.ControllerDescriptor.ControllerName;
                filterContext.Result = new RedirectToRouteResult(
            new RouteValueDictionary {{ "Controller", controller},
                                      { "Action", action} });


            }
            base.OnActionExecuting(filterContext);
        }


        public override void OnActionExecuted(ActionExecutedContext actionExecutedContext)
        {
            base.OnActionExecuted(actionExecutedContext);
        }
    }
