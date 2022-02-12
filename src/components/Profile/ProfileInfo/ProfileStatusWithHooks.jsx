import React from "react";
import { useEffect } from "react";
import { useState } from "react";



const ProfileStatusWithHooks =(props) =>{
  
   let [editMode,SeteditMode]= useState(false);
   let [status,SetStatus]= useState(props.status);
   useEffect(()=>{
    SetStatus(props.status);
   },[props.status])

   const activateEditMode=() =>{
    return SeteditMode(true)
   }
   const deactivateEditMode=()=>{
       SeteditMode(false);
       props.updateStatus(status);
   }
   const onStatusChange=(e)=>{
     SetStatus(e.currentTarget.value)
   }
        return (
            <div>
                { !editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>
                            {props.status || "----------"}
                        </span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input  onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}value={status} />
                    </div>
                }
            </div>
        )
    }


 
export default ProfileStatusWithHooks;