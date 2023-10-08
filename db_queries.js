const fs = require('fs');
const db = require(__dirname + '/db.js')
const path = require('path');

const executeSqlFile = async (filePath) => {
    try {
        const sql = fs.readFileSync(filePath, 'utf8');
        await db.query(sql);
        console.log(`SQL file '${filePath}' executed successfully.`);
    } catch (err) {
        console.error(`Error executing SQL file '${filePath}':`, err);
    }
};

executeSqlFile(path.join(__dirname, 'create_table.sql'))