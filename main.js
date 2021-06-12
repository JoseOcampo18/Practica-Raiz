import Iteracion from './iteracion.js';
import Procedimiento from './procedimiento.js';

class App{

    constructor() {
        this._btnResolve = document.querySelector('#btnResolve');
        this._btnResolve.addEventListener("click", this.read);
        this._procedimiento = new Procedimiento();
    }

    read = () => {
        let iteracion = Iteracion.readForm();

        if (iteracion == false){
            Swal.fire("Error", "Todos los campos son obligatorios", "error");
            return;
        }


        document.querySelector('#result').innerHTML = this._procedimiento._proc(iteracion);
        document.querySelector('#xvalue').innerHTML = "X" + (this._procedimiento._arrX.length - 1) + " = ";
        Swal.fire("Correcto", "Se ha calculado el resultado", "success");
        
    }


        

}

let prueba = new Iteracion(0, 1);

console.log(prueba);

let test = new Procedimiento();

console.log(test._proc(prueba));


let app = new App();  