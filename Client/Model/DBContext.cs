using System;
using Microsoft.EntityFrameworkCore;
namespace Client.Model
{
    public class MyDBContext: DbContext
    {
        public MyDBContext(DbContextOptions<MyDBContext> options ): base(options)
        {

        }

        public DbSet<Client> Clients { get;set; }
    }
}
