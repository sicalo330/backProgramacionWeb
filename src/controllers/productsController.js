import { getConnection, queries } from "../database";
import { sql } from "../database";

export const getProducts = async (req, res) => {
  try{
    const pool = await getConnection()
    const result = await pool.request()
    .query(queries.getProducts);
    const resConsult = result.recordsets[0]
    res.json(resConsult)
  }catch(error){
    console.log('Error de conexión: ', error)
  }
}

export const postProducts = async (req, res) => {
  try{
    let { title, price, description, images } = req.body
    const pool = await getConnection()
    const result = await pool.request()
    .input('title',title)
    .input('price',price)
    .input('description',description)
    .input('images',images)
    .query(queries.postProducts);
    const resConsult = result.recordsets[0]
    res.json(resConsult)
  }catch(error){
    console.log('Error de conexión: ', error)
  }
}

export const putProducts = async (req, res) => {
  try{
    let { id, title, price } = req.body
    const pool = await getConnection()
    const result = await pool.request()
    .input('id',id)
    .input('title',title)
    .input('price',price)
    .query(queries.putProducts);
    const resConsult = result.recordsets[0]
    res.json(resConsult)
  }catch(error){
    console.log('Error de conexión: ', error)
  }
}

export const deleteProducts = async (req, res) => {
  try{
    let id = req.params.id
    const pool = await getConnection()
    const result = await pool.request()
    .input('id',id)
    .query(queries.deleteProducts);
    const resConsult = result.recordsets[0]
    res.json(resConsult)
  }catch(error){
    console.log('Error de conexión: ', error)
  }
}