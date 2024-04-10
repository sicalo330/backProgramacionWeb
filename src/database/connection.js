import  config  from "./../config"
import sql from 'mssql'

const sqlConfig = {
    user: config.dbUser,
    password: config.dbPass,
    database: config.dbDatabase,
    server: config.dbServer,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
  };

  
  export async function getConnection(){
    try {
        const pool = await new sql.ConnectionPool(sqlConfig)
        return pool.connect()
    } catch (err) {
        console.log('Error al conectar a la base de datos' + err)
    }
  }
  
  export { sql }