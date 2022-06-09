using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProEventos.Application.Dtos
{
    public class EventoDto
    {
        
        public int Id {get; set;}
        public string Local {get; set;}
        public DateTime? DataEvento {get; set;}
        [Required(ErrorMessage = "O campo {0} é obrigatório.")]
        public string Tema {get; set;}
        public int QuantidadePessoas {get; set;}
        public string ImageUrl {get; set;}
        public string Telefone { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        public IEnumerable<LoteDto> Lotes { get; set; }
        public IEnumerable<RedeSocialDto> RedesSociais { get; set; }
        public IEnumerable<PalestranteDto> PalestrantesEventos { get; set; }
    }
}