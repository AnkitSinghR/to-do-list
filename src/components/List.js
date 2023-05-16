import React, { useState } from "react";
import {Button, IconButton,Input,Stack,Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';



const List=()=>{
    
    const [items,setItems]=useState(["Earbuds","MUI",'Redux toolkit','jest'])
    const [task,setTask]=useState('');

    const onClickAdd=()=>{
        if(task.length){
        setItems([task,...items])
        setTask('')
        }
    }

    const onClickDelete=(item)=>{
        setItems(items.filter(i=>i!==item))
    }

    return <>
    <Typography variant="h4">Task List</Typography>
    <Stack  
        justifyContent="center"
        alignItems="center"
        spacing={1}>
        <Input style={{width:'300px'}}  placeholder="Add your task" value={task} onChange={(event)=>setTask(event.target.value)} />
        <Button variant="contained" size='small' onClick={onClickAdd} disabled={!task.length}>
            Add
        </Button>
    </Stack>
    
    <Stack spacing={{ xs: 1, sm: 2 }} direction='row' flexWrap="wrap">
        {items.map((item,index)=><Stack id="listItem" direction='row' style={{marginTop:"5px"}} key={index}><Typography  align='center'>{item}</Typography>
        <IconButton  aria-label="delete" size="small" color="white" onClick={ ()=>onClickDelete(item)} >
         <DeleteIcon />
        </IconButton>
        </Stack>)}
    </Stack>
    </>
}
export default List