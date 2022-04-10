import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import MaterialTable from 'material-table';
import { Button } from '@material-ui/core'
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

function App() {
  const [tableData,setTableData]=useState([])
  const columns=[
   {title:"Name",field:"name"},
   {title:"Email",field:"email"},
   {title:"Phone Number",field:"phone"},
   {title:"Age",field:"age"},
   {title:"City",field:"city"},
  ]

  /*const data = [
    ["Joe James", "j@gmail.com", "06366987", "12","rabat"],
     ["kawtar", "k@gmail.com", "0637363026", "22","sale"]
    
  ];*/
  return (
    <div className="App">
    <h1 align="center">React app </h1>
    <h4 align="center">Crash course onn meterial trable</h4>
    <MaterialTable columns={columns} data={tableData} />
    </div>
  );
}

export default App;
