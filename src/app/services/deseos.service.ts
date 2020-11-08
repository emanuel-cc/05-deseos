import { Injectable } from '@angular/core';
import { isTabSwitch } from '@ionic/angular/directives/navigation/stack-utils';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  lista:Lista[] = [];
  constructor() { 
    this.cargarStorage();
    // const lista1 = new Lista('Recolectar piedras del infinito');
    // const lista2 = new Lista('Héroes a desaparecer');

    // this.lista.push(lista1,lista2);

    console.log(this.lista);
  }

  crearLista(titulo:string){
    const nuevaLista = new Lista(titulo);
    this.lista.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
  }

  borrarLista(lista:Lista){
    this.lista = this.lista.filter(listaData=>{
      return listaData.id !== lista.id;
    });
    this.guardarStorage();
  }

  obtenerLista(id:string | number){
    id=Number(id);
    return this.lista.find(listaData=>{
      return listaData.id === id;
    });
  }

  guardarStorage(){
    localStorage.setItem('data',JSON.stringify(this.lista));
  }

  cargarStorage(){
    if(localStorage.getItem('data')){
      this.lista = JSON.parse(localStorage.getItem('data'));
    }else{
      this.lista = [];
    }
  }
}
