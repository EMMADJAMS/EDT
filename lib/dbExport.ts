import { createClient } from '@vercel/postgres';
 
export const setClient = async () =>{
    const client = createClient()
    await client.connect()

    return client

} 