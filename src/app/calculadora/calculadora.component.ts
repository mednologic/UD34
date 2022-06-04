import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  //Declaracion de variables
  num1: number;
  num2: number;
  operador: string;
  output: string;
  operacion: number;
  display: string;
  estado: boolean;

  //Constructor
  constructor() { 
    this.num1       = 0;
    this.num2       = 0;
    this.operador   = '';
    this.output     = '0';
    this.display    = '';
    this.operacion  = 0;
    this.estado     = false;
  }
//Recibe el valor del display (String) lo asigna a la variable correspondiente y la parsea
 anyadirNum(displayValor:string){
   console.log("valor que recibe: "+displayValor)
   //asignacion a números 
  if(!this.estado){
    //si no hay operador marcado asigna al num1, si no al num2
    if(this.num1 === 0){
        this.num1=parseInt(displayValor);
    }else{
        let temp:string = this.num1.toString()+displayValor;
        this.num1=parseInt(temp);
    }
}else{
    if(this.num2 == 0){
      this.num2=parseInt(displayValor);
    }else{
      let temp:string = this.num2.toString() + displayValor;
      this.num2=parseInt(temp);
    }
  }
   //Asignacion al display
   if(this.display ==='0'){
    this.display = displayValor;
    }else{
      this.display = this.display+displayValor;
    }
}
  operacionEnCurso(){
    //Seteamos el display en 0 (reset)
    this.display='0';
    //Marcamos el bool en true para indicar que hay una operacion
    this.estado = true;
  }

  sumar(){
    this.operador = '+';
    this.operacionEnCurso();
  }
  restar(){
    this.operador='-';
    this.operacionEnCurso();
  }
  dividir(){
    this.operador='/';
    this.operacionEnCurso();
  }
  multiplicar(){
    this.operador='*';
    this.operacionEnCurso();
  }
  igual(){
    //Switch
    switch(this.operador){
      case '+':
        this.operacion = this.num1 + this.num2;
        break;
      case '-':
        this.operacion = this.num1 - this.num2;
        break;
      case '/':
        this.operacion = this.num1 / this.num2;
        break;
      case '*':
        this.operacion = this.num1 * this.num2;
        break;
    }
    //Broma de programador :)
    if(this.operacion===666){
      window.open('https://www.youtube.com/watch?v=fyr79sB6nGg', '_blank');
    }
    //parseamos number a String
    this.display = this.operacion.toString();
    //Reiniciamos variables
    this.num1=0;
    this.num2=0;
    this.estado=false;
    
  }
  back(){
    console.log("Display init: "+this.display);
    //this.display=;
    this.anyadirNum(this.display.substring(0, this.display.length - 1));
    console.log("Display fin: "+this.display);
  }
  ce(){
    //reiniciamos las variables
    this.num1 = 0;
    this.num2 = 0;
    this.display = '0';
    this.estado=false;
  }
  uno() {
    this.anyadirNum('1');
  }
  cero(){
    this.anyadirNum('0');
  }
  
  dos(){
    this.anyadirNum('2');
  }
  tres(){
    this.anyadirNum('3');
  }
  cuatro(){
    this.anyadirNum('4');
  }
  cinco(){
    this.anyadirNum('5');
  }
  seis(){
    this.anyadirNum('6');
  }
  siete(){
    this.anyadirNum('7');
  }
  ocho(){
    this.anyadirNum('8');
  }
  nueve(){
    this.anyadirNum('9');
  }
}
