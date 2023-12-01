import React from 'react'
import Navbar from '../Navbar/Navbar'
import BasicTable from '../Table/Table'
// import Nav from "../Nav";
export default function Dashboard() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Navbar />
      <BasicTable />
    </div>
  )
}
