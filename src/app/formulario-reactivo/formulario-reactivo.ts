import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reactivo.html',
  styleUrl: './formulario-reactivo.css'
})
export class FormularioReactivo {

  formulario = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl('')
  });

  handleSubmit(){
    alert(
      this.formulario.value.nombre + ' | ' + this.formulario.value.email
    );
  }

}
