(() => {

    // arreglo de temperaturas celsius
    const arrayOfTempCelsius = [33.6, 12.34];

    // Dirección ip del servidor 
    const ipServer = '123.123.123.123';

    // Listado de usuarios
    const peopleNameslist = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios 
    const emailListUser = peopleNameslist.map( user => user.email );

    // Variables booleanas de un video juego
    const isJump = false;
    const Notrun = true;
    const noTieneItems = true;
    const isLoading = false;

    // Otros ejercicios
    // tiempo inicial 
    const dateStart = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final 
    const dateEnd = new Date().getTime() - dateStart;


    // Funciones
    // Obtiene los libros
    function getBook() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL 
    function getBooksUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    // obtiene el área de un cuadrado basado en sus lados 
    function areaCuadradoLadoXLado( cm: number ) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo 

    function printJobDocument() {
        throw new Error('Function not implemented.');
    } 

})();