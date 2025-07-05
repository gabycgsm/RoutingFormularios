import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reactivo.html',
  styleUrl: './formulario-reactivo.css'
})
export class FormularioReactivo {
  formulario: FormGroup;
  listaCorreos: string[] = [];

constructor(private fb: FormBuilder){
  this.formulario = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });
}

  /*formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });*/

  handleSubmit(){
    alert(
      this.formulario.value.nombre + ' | ' + this.formulario.value.email
    );
  }

  addEmail(){
    if(this.formulario.value.email.trim() ){
      this.listaCorreos.push(this.formulario.value.email.trim())
      this.formulario.reset();
    }
    
  }

}
