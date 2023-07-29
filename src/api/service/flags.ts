import { client } from "../client"

export const getFlags = async() => {  
    try {
      const response = await client.get(`/all`)
      const data = response.data
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }  
  

