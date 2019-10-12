import React from 'react';


const MemberArray = props => {
    return (
        <div>
            {props.memList.map(mem => {
                return (
                    <div key={mem.id}>
                        <h2>{mem.fName + ' '+ mem.lName}</h2>
                        <p>{mem.email}</p>
                        <p>{mem.role}</p>
                    </div>
                );
            }
                
            )}
            
        </div>
    )

}


export default MemberArray;