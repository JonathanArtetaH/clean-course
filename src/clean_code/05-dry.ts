
type Size =''|'S'|'M'|'XL';

class Product{
    constructor( 
        public name: string='',
        public price: number=0,
        public size:Size=''
        ){}


    toString(){ 
        for (const key in this) {  
            switch (typeof this[key]) {
                case 'string':
                        if((<string>this[key]).length <=0) throw Error (key + ' is empty');
                    break;
                case 'number':
                    if(this[key] <=0) throw Error (key + ' is empty');
                break;
                default:
                    break;
            }
        }
        
        return `${this.name}   (${this.price}),  ${this.size}`;
    }
}

(()=>{
    
    const bluePants = new Product('Blue pans',200,'XL');

    console.log(bluePants.toString())

})();