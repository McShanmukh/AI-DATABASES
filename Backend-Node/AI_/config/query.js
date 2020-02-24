var Pool = require('pg-pool')
var dotenv = require('dotenv')

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})


const getAll = (request, response) => {
  pool.query('SELECT * FROM df_coms', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
} 


function getsomething(Text) {

  try {
      pool.query('select ($1) from df_ama', [Text], (error, results) => {
      if (error) {
        throw error
      }
      console.log(results.rows)
      return results.rows
    })
      }
      catch(e){
          return false
      }
}

module.exports = {
  getAll
  //getsomething
}