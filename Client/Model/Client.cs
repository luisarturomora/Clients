using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Client.Model
{
    public class Client
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName= "varchar(100)")]
        public string Nombre { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Apellido { get; set; }

        [Required]
        [Column(TypeName = "varchar(13)")]
        public string Telefono { get; set; }


        public Client()
        {
        }
    }
}
