
import pg from 'pg';
 

const connect = process.env.POSTGRES_URL
const { Pool } = pg;
export const setClient = async()=>{
    const pool = new Pool({
        connectionString: process.env.POSTGRES_URL,
      });
    
      try {
        const client = await pool.connect();
        const result = await client.query('SELECT 1 + 1'); // Simple test query
        client.release();
        return new Response(JSON.stringify({ message: 'Connection successful!' }), {
          status: 200,
        });
      } catch (error) {
        console.error('Error connecting to database:', error);
        return new Response(JSON.stringify({ message: 'Connection failed!' }), {
          status: 500,
        });
      }
 
}