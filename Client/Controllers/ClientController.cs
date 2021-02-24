using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Client.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Client.Controllers
{
    [Route("api/[controller]")]
    public class ClientController : Controller
    {
        private MyDBContext db;

        public ClientController(MyDBContext context)
        {
            db = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Model.Client>>> get()
        {
            var client = await db.Clients.ToListAsync();
            return client;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Model.Client>> getById(int id)
        {
            var client = await db.Clients.FindAsync(id);
            return client;
        }

        [HttpPost]
        public async Task<ActionResult<Model.Client>> save([FromBody]Model.Client client)
        {
            db.Clients.Add(client);
            await db.SaveChangesAsync();

            return CreatedAtAction("SaveClient", new {id = client.Id}, client);


        }

        [HttpPut("{id}")]
        public async Task<IActionResult> update(int id, [FromBody]Model.Client client)
        {
            db.Entry(client).State = EntityState.Modified;

            await db.SaveChangesAsync();

            return CreatedAtAction("UpdateClient", new { id = client.Id }, client);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> delete(int id)
        {
            var client = await db.Clients.FindAsync(id);
            db.Clients.Remove(client);

            await db.SaveChangesAsync();

            return CreatedAtAction("DeleteClient", new { id = client.Id }, client); ;
        }
    }
}
