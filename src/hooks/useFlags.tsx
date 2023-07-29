import { useEffect, useState } from "react"
import { client } from "../api/client"

export const useFlags = () => {
  const  [infoFlags, setInfoFlags] = useState<any>()

  const requestinfoFlags = async () => {
    try {
      const response = await client.get(`/all`);
       setInfoFlags(response?.data[4].name);
      console.log(setInfoFlags)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    requestinfoFlags()
  }, [])
  return { infoFlags }
}