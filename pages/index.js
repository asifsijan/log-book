import axios from '../axiosConfig'  
import Logs from '../components/Logs'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import PostLogs from '../components/PostLogs'
export default function Home() {
  const [updateLost, setUpdateLost] = useState(false);

  const updateLogsHandler = () => {
    setUpdateLost(prevUpdateLost => !prevUpdateLost);}
  return (
    <>    
      <Logs updateLog={updateLost} logUpdate={()=>updateLogsHandler()}/>
      <PostLogs logUpdate={()=>updateLogsHandler()} />
    </>
  )
}
