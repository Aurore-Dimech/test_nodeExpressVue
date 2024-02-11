import mysql from "mysql2";

//create connection to databse
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test3_fullstack_asso"
});

export default db;