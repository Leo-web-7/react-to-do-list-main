import React from 'react'

const Table = ({tableData, TableHead1, TableHead2, TableHead3}) => {
  return (
    <table className='border-collapse border-black border-[1px]'>
                <thead>
                        <tr className='bg-red-500'>
                            <th>{TableHead1}</th>
                            <th>{TableHead2}</th>
                            <th>{TableHead3}</th>
                        </tr>
                </thead>
                <tbody>
                    {tableData.map((row, TableDataID) =>(
                        <tr key={TableDataID}>
                            <td>{row.DateSet}</td>
                            <td>{row.TitleSet}</td>
                            <td>{row.Description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
  )
}

export default Table