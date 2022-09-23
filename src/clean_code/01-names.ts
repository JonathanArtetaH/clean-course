(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, state: false },
        { id: 2, state: false },
        { id: 3, state: true },
        { id: 4, state: false },
        { id: 5, state: false },
        { id: 7, state: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const FilesToDelete = filesToEvaluate.map( f => f.state );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const ddmmyyyy = new Date();
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const d: number = 23;
    const elapsedTimeDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const dir = 33;
    const numerOfFilesInDirectory = 33;
    
    // primer nombre - first name
    const nombre = 'Fernando';
    const firtName = 'Fernando';
    
    // primer apellido - last name
    const apellido = 'Herrera';
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const dsm = 12;
    const daysLastEdit = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const max = 6;
    const numerToEstudentMax = 6;



})();


