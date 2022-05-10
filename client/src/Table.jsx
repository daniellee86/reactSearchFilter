import React from 'react'

const Table = ({ data }) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>NAME</th>
                <th>SURNAME</th>
                <th>EMAIL</th>
            </tr>
            {data.map((item) => (
                    <tr key={item.id}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                   </tr>
            ))}
        
        </tbody>
    </table>
  )
}

export default Table


