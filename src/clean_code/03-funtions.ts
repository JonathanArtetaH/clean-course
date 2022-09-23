(() => {

    interface movie{
        title: string,
        description: string,
        rating: number,
        cast: string[]
    }
 
    function getMovieId( movieId: string ) {
        console.log({ movieId });
    }
    
    function getIdMovieActors( idMovi: string ) {
        console.log({ idMovi });
    }
 
    function getActorId( ActorId: string ) {
        console.log({ ActorId });
    }
     
    function newMovie({title,description,rating,cast}:movie) {
        console.log({ title, description, rating, cast });
    }
 
    function createNewActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    } 

})();