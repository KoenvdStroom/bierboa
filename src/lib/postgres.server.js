import pg from 'pg';
import {user, password, host, port, database} from '$env/static/private';
const {Client } = pg;


export async function add_user(username){

    const client = new Client({
        user: user,
        password: password,
        host: host,
        port: port,
        database: database,
      })

      
    await client.connect()
    const table = await client.query("CREATE TABLE IF NOT EXISTS users(name TEXT NOT NULL, count INT DEFAULT(0));");
    const result = await client.query(`INSERT INTO users (name) VALUES ('${username}');`)
    await client.end()
}

export async function get_all_users(){
  const client = new Client({
    user: user,
    password: password,
    host: host,
    port: port,
    database: database,
  })
    await client.connect()

    const result = await client.query("SELECT * FROM users");
    await client.end()
    return result.rows
}

export async function remove_user(username){

  const client = new Client({
    user: user,
    password: password,
    host: host,
    port: port,
    database: database,
  })

      
    await client.connect()
    const result = await client.query(`DELETE FROM users WHERE name='${username}'`)
    await client.end()
}

export async function update_user(username, count){
  const client = new Client({
    user: user,
    password: password,
    host: host,
    port: port,
    database: database,
  })

      
    await client.connect()
    const result = await client.query(`UPDATE users SET count = ${count} WHERE name = '${username}'`)
    await client.end()
}