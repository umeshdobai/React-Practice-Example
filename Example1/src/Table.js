import React from 'react'

function Table(props) {
    console.log(props); 

    return (
        <div>
                <table>
                <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
               
               
              </thead>
              <tbody>
                 {
                  props.value.map(data => {
                    return(
                      <tr>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
              <tbody>
                  
              </tbody>
                </table>
            </div>
    )
}

export default Table
