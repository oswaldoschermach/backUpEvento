import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/models/Evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-eventoDetalhe',
  templateUrl: './eventoDetalhe.component.html',
  styleUrls: ['./eventoDetalhe.component.scss']
})
export class EventoDetalheComponent implements OnInit {

  form!: FormGroup;
  evento = {} as Evento;

  constructor(private router: ActivatedRoute,
    private eventoService: EventoService,
    private fb: FormBuilder) { }

  get f(): any {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.validation();
    this.carregarEvento();
  }

  public validation(): void {
    this.form = this.fb.group({
      tema: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      local: ['', Validators.required],
      dataEvento: ['', Validators.required],
      qtdPessoas: ['', [Validators.required, Validators.max(120000)]],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      imagemURL: ['', Validators.required],
    });
  }

  public resetForm(): void {
    this.form.reset();
  }

  carregarEvento(): void {
      const eventoIdParam = this.router.snapshot.paramMap.get('id');
      if(eventoIdParam !== null){
        this.eventoService.getEventoById(+eventoIdParam).subscribe({
          next: (evento: Evento) => {
            this.evento = {...evento};
            this.form.patchValue(this.evento);
          },
          error: (error: any) => { console.error(error) },
          complete: () => {},
        });
      }
  }

}
