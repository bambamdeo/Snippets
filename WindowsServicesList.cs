/*Get List of Windows Services [C#]
This example shows how to get list of windows services installed on local computer.

Get list of installed windows services
To get list of all services (which are not device drivers) use static method ServiceContro­ller.GetServi­ces (to get list of driver services use method ServiceContro­ller.GetDevices).
*/
ServiceController[] services = ServiceController.GetServices();
/*
Check whether a service is installed
The following code checks whether a service is installed on local computer. It gets list of windows services and tries to find a service with the specified name.
*/

public static bool IsServiceInstalled(string serviceName)
{
  // get list of Windows services
  ServiceController[] services = ServiceController.GetServices();

  // try to find service name
  foreach (ServiceController service in services)
  {
    if (service.ServiceName == serviceName)
      return true;
  }
  return false;
}
