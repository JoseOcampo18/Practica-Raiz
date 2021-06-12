export default class Iteracion{

    constructor(x1, ea){
        this._x1 = x1;
        this._ea = ea;
    }

    static readForm(){
        let inpX1 = document.querySelector('#x1');
        let inpEa = document.querySelector('#ea');

        let x1 = inpX1.value;
        let ea = inpEa.value;

        if(x1 && ea){
            let iteracion = new Iteracion(x1, ea);
            return iteracion;
        }
        else{
            return false;
        }
    }

    _getX1(){
        return this._x1;
    }

    _getEa(){
        return this._ea;
    }




}