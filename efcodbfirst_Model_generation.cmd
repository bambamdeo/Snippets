
dotnet tool install --global dotnet-ef
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet add package Microsoft.EntityFrameworkCore.Design 
 
dotnet ef dbcontext scaffold "Server=.;Database=planapp_dev;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -o Models
