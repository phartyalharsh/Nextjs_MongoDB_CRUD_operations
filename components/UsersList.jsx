import React from 'react'
import api from '../services/api'


const UsersList = ({data,handleEditUpdate,handleUpdate,handleDelete}) => {

    // const handleUpdate = async(item) => {
    //     try {
    //         api.put(`/api/${item._id}`)
    //     } catch (error) {
            
    //     }
    // }



    // const handleDelete = async(id) => {
    //     try {
    //         api.delete(`/api/${id}`)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // console.log(data,"data in users list");



  return (
    <>
    {
        data.map((item, index)=>{
            return (
                <div key={item._id} style={{display:"flex", width:"100%", gap:"30px"}}>
                    <span >{item.firstName+" "+item.lastName}</span>
                    <span>{item.birthday.slice(0,10)}</span>
                    <span>{item.salary}</span>
                    {item.isActive ? <span>🟢Active</span> : <span>❌Not Active</span>}
                    <button style={{backgroundColor:"rgba(159, 172, 25, 0.823)"}} onClick={()=>{handleEditUpdate(item)}}>Update</button>
                    <button style={{backgroundColor:"rgb(224, 78, 78)" ,justifyContent:"end"}} onClick={()=>{handleDelete(item._id)}} >Delete</button>
                </div>)
            
        })
    }
    </>
  )
}

export default UsersList