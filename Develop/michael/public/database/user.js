const fs = require('fs');
const util = require('util');
const { v4: uuidv4 } = require('uuid');

// variables for read/write functions with promisify

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class User {
    read(){
        return readFileAsync("db/user.json", "utf8");
    }
    write(user){
        return writeFileAsync("db/user.json",JSON.stringify(note));
    }
    getUsers(){
        return this.read().then((notes)=>{
            let userArray;
            try {
                userArray = [].concat(JSON.parse(user));
            } catch (error) {
                userArray = [];
            }
            return userArray;
        });
    }
    addUser(user){
        const { title, text } = user;
        const newUser = {
            title,
            text,
            id: uuidv4()
        }
        return this.getNotes().then((user)=>{
            [ ...user, newUser ]
        }).then((updatedUSer)=>{
            this.write(updatedUser);
        }).then(()=>newUser)
    }
};

module.export = new User();