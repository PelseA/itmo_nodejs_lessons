const sqlite3 = require('sqlite3').verbose;
const db = new sqlite3.Database('users.db', (err) => {
    if(err) {
        console.log(err);
    } else {
        db.run(`CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY AUTO_INCREMENT,
            name text, 
            surname text, 
            email text UNIQUE, 
            password text, 
            )`, (err) => {
        });
    }
});

module.exports = db;
/*
db.serialize(() => {
    db.run("CREATE TABLE lorem (info TEXT)");

    const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (let i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
        console.log(row.id + ": " + row.info);
    });
});

db.close();*/
