(()=>{

    type Gender = 'M'|'F'

    interface personProperties{
        name: string,
        gender: Gender,
        birthdate: Date
    }

    interface userProperties{
        email: string,
        role: string, 
        name: string,
        gender: Gender,
        birthdate: Date
    }

    interface userSettingProperties{
        workingDirectory: string,
        lastOpenFolder: string,
        email: string,
        role: string, 
        name: string,
        gender: Gender,
        birthdate: Date
    }


    class Person{ 
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({name, gender, birthdate}: personProperties){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
         }
    }

     
    class User extends Person{
        public lastAccess: Date;
        public email: string;
        public rol: string;

        constructor({
            birthdate,
            gender,
            name,
            email,
            role,
        }:userProperties
            ){
                super({name, gender,birthdate});
                this.lastAccess = new Date();
                this.email = email;
                this.rol = role;
             }
             checkCredentials(){ return true;}
    }

    class UserSetting extends User{
        public lastOpenFolder: string;      
        public workingDirectory: string;        
        constructor({
            lastOpenFolder,
            workingDirectory,
            email,
            role,
            name,
            gender,
            birthdate,
            }: userSettingProperties
            ){
                super({email,role,name, gender,birthdate});
                this.workingDirectory = workingDirectory;
                this.lastOpenFolder = lastOpenFolder;
             }
             checkCredentials(){ return true;}
    }

    
    const userseting = new UserSetting({ 
        workingDirectory: 'C://user/jonathan/destock/misdocumentos',
        lastOpenFolder: 'Carpeta 1',
        email: 'jho345943@gmail.com',
        role : 'User',
        name: 'Jonathan Arteta',
        gender: 'M',
        birthdate: new Date('07-03-1997') 
        });

    console.table(userseting)


})();