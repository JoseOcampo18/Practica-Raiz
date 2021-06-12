export default class Procedimiento{

    constructor(){
        this._arrX = new Array();
        this._arrEa = new Array();
    }


    _proc(iteracion){
        this._arrX.push(iteracion._getX1());
        this._arrEa.push(iteracion._getEa());


       for(let i = 0; i < this._arrX.length; i++){

           if(this._arrX.length < 2){
                this._arrX.push( Number(this._arrX[i] - (((3 * this._arrX[i]) + Math.sin(this._arrX[i]) - Math.exp(this._arrX[i]))
                / (3 + Math.cos(this._arrX[i]) - Math.exp(this._arrX[i])))));
           }

           else{
                this._arrX.push( Number(this._arrX[i] - (((3 * this._arrX[i]) + Math.sin(this._arrX[i]) - Math.exp(this._arrX[i]))
                / (3 + Math.cos(this._arrX[i]) - Math.exp(this._arrX[i])))));

                this._arrEa.push(Number((((this._arrX[i + 1] - this._arrX[i]) / (this._arrX[i + 1]))  * 100)));
           }

           if(this._arrEa[i] < this._arrEa[0]){
               i = this._arrX.length + 1;
           }
       }

       return this._arrX[this._arrX.length - 1];
    }

}