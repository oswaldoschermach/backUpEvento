import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  estadoSalvar = "post";

  constructor(private router: ActivatedRoute,
    private eventoService: EventoService,
    private toastr: ToastrService,
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
      quantidadePessoas: ['', [Validators.required, Validators.max(120000)]],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      imageUrl: ['', Validators.required]
    });
  }

  public resetForm(): void {
    this.form.reset();
  }

  public carregarEvento(): void {
    const eventoIdParam = this.router.snapshot.paramMap.get('id');

    if (eventoIdParam !== null) {

      this.estadoSalvar = 'put';

      this.eventoService.getEventoById(+eventoIdParam).subscribe(
        (evento: Evento) => {
          this.evento = {...evento};
          this.form.patchValue(this.evento);
        },
        (error: any) => {

          this.toastr.error('Erro ao tentar carregar Evento.', 'Erro!');
          console.error(error);
        },

      );
    }
  }

  public salvarAlteracao(): void {
      if(this.estadoSalvar === 'post'){
        if (this.form.valid) {
          this.evento = {...this.form.value}
          this.eventoService.post(this.evento).subscribe(
            () => this.toastr.success('Evento salvo com Sucesso!', 'Sucesso'),
            (error: any) => {
              console.error(error);
              this.toastr.error('Error ao salvar evento', 'Erro');
            },
          );
        }
      }else{
        this.evento = { id: this.evento.id, ...this.form.value}
        this.eventoService.put(this.evento.id, this.evento).subscribe(
          () => this.toastr.success('Evento salvo com Sucesso!', 'Sucesso'),
          (error: any) => {
            console.error(error);
            this.toastr.error('Error ao salvar evento', 'Erro');
          },
        );
      }
  }

}
