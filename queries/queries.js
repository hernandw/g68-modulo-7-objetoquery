import { pool } from "../config/db.js";

/*
Create
Read
Update
Delete
*/

const addProducts = async(type, size)=>{
    try {
        const sql = {
            text: "INSERT INTO clothes (type, size) values($1, $2) returning *",
            values: [type, size]
        }
        const response = await pool.query(sql)
        return response.rows
    } catch (error) {
      console.log(error.message)  
    }
}

//consultar los datos de los productos
const getProducts = async()=>{
    try {
        const sql ={
            text: 'SELECT * FROM clothes'
        }
        const { rows} = await pool.query(sql)
        
        return rows
    } catch (error) {
        console.log(error.message)
    }
}



export {
    getProducts,
    addProducts
}
