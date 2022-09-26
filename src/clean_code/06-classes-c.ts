(() => {

    // Aplicando el principio de responsabilidad unica
    // Priorizar la composicion frente a la herencia

    type Gender = 'M' | 'F'

    interface personProperties {
        name: string,
        gender: Gender,
        birthdate: Date
    }

    interface userProperties {
        email: string,
        role: string,
    }

    interface userSettingProperties {
        workingDirectory: string,
        lastOpenFolder: string,
    }

    interface userSettingI {
        workingDirectory: string,
        lastOpenFolder: string,
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthdate: Date
    }


    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: personProperties) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }


    class User {
        public lastAccess: Date;
        public email: string;
        public rol: string;

        constructor({
            email,
            role,
        }: userProperties
        ) {
            this.lastAccess = new Date();
            this.email = email;
            this.rol = role;
        }
        checkCredentials() { return true; }
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: userSettingProps;

        constructor(
            {
                name, gender, birthdate,
                email, role,
                workingDirectory,
                lastOpenFolder,
            }: userSettingI
        ) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role })
            this.settings = new userSettingProps({ lastOpenFolder, workingDirectory })
        }
    }

    class userSettingProps {
        public lastOpenFolder: string;
        public workingDirectory: string;
        constructor({
            lastOpenFolder,
            workingDirectory,
        }: userSettingProperties
        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
        checkCredentials() { return true; }
    }


    const userseting = new UserSettings({
        workingDirectory: 'C://user/jonathan/destock/misdocumentos',
        lastOpenFolder: 'Carpeta 1',
        email: 'jho345943@gmail.com',
        role: 'User',
        name: 'Jonathan Arteta',
        gender: 'M',
        birthdate: new Date('07-03-1997')
    });

    console.table(userseting)


})();