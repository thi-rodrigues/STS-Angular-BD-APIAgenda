import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { Contato } from './contato';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  declare formulario: FormGroup;

  constructor(
    private service: ContatoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.email]
    })
  }
  
  submit(){
    console.log(this.formulario.value)
    //const c: Contato = new Contato();
   // c.nome = 'brenda'
   // c.email = 'brenda@gmail.com'
   // c.favorito = false;
  
    //this.service.save(c).subscribe(resposta => {
    //  console.log(resposta);
  //  })
  }

}