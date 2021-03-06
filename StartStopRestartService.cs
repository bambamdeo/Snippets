/*Start, Stop and Restart Windows Service [C#]
This example shows how to start, stop and restart a windows service programmatically in C#.

Start service
The following method tries to start a service specified by a service name. Then it waits until the service is running or a timeout occurs.
*/

public static void StartService(string serviceName, int timeoutMilliseconds)
{
  ServiceController service = new ServiceController(serviceName);
  try
  {
    TimeSpan timeout = TimeSpan.FromMilliseconds(timeoutMilliseconds);

    service.Start();
    service.WaitForStatus(ServiceControllerStatus.Running, timeout);
  }
  catch
  {
    // ...
  }
}
/*
Stop service
The following method tries to stop the specified service and it waits until the service is stopped or a timeout occurs.
*/

public static void StopService(string serviceName, int timeoutMilliseconds)
{
  ServiceController service = new ServiceController(serviceName);
  try
  {
    TimeSpan timeout = TimeSpan.FromMilliseconds(timeoutMilliseconds);

    service.Stop();
    service.WaitForStatus(ServiceControllerStatus.Stopped, timeout);
  }
  catch
  {
    // ...
  }
}
/*
Restart service
This method combinates both previous methods. It tries to stop the service (and waits until it's stopped) then it begins to start the service (and waits until the service is running). The specified timeout is used for both operations together.

*/
public static void RestartService(string serviceName, int timeoutMilliseconds)
{
  ServiceController service = new ServiceController(serviceName);
  try
  {
    int millisec1 = Environment.TickCount;
    TimeSpan timeout = TimeSpan.FromMilliseconds(timeoutMilliseconds);

    service.Stop();
    service.WaitForStatus(ServiceControllerStatus.Stopped, timeout);

    // count the rest of the timeout
    int millisec2 = Environment.TickCount;
    timeout = TimeSpan.FromMilliseconds(timeoutMilliseconds - (millisec2-millisec1));

    service.Start();
    service.WaitForStatus(ServiceControllerStatus.Running, timeout);
  }
  catch
  {
    // ...
  }
}
