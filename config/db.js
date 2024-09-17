const maridb=require('mariadb')

const mariDbPool = maridb.createPool({
    host: 'localhost',
    user: 'root',
    password:'6878',
    database:'crud',
    connectionLimit: 5
});
module.exports=mariDbPool