(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio'; 
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,

        ) {   }
    }
 

    class InputAttributes{
        constructor(
            public value: string,
            public placeholder: string,  
        ) {   }
    }

    class InputEvents{
        constructor( ) {  } 
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    class Inputelement{
        public html: HtmlElement;
        public attibutes: InputAttributes;
        public event: InputEvents;

        constructor(value: string, placeholder: string, id: string){

            this.html = new HtmlElement(id,'input');
            this.attibutes = new InputAttributes(value,placeholder)
            this.event = new InputEvents();
                }
    }

    //? Idea para la nueva clase InputElement

    const nameField = new Inputelement('Fernando', 'Enter first name', 'txtName');

    console.table({ nameField });

})()