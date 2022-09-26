(()=>{

    type Gender = 'M'|'F'

    class Person{ 
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date,){ }
    }

     
    class User extends Person{
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
            ){
                super(name, gender,birthdate);
                this.lastAccess = new Date();
             }
             checkCredentials(){ return true;}
    }

    class UserSetting extends User{
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
            ){
                super(email,role,name, gender,birthdate);
             }
             checkCredentials(){ return true;}
    }

    
    const userseting =new UserSetting(
        'C://user/jonathan/destock/misdocumentos',
        'Carpeta 1',
        'jho345943@gmail.com',
        'User',
        'Jonathan Arteta',
        'M',
        new Date('07-03-1997') 
    );

    console.table(userseting)


})();