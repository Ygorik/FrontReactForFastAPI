import React from 'react';

const TableRow = ({pressure, ...props}) => {
    function getRealDate(dateTime){
        var options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour:'numeric',
            minute: 'numeric',
            timezone: 'UTC'
        };
        console.log(dateTime);  
        return new Date(dateTime).toLocaleString("ru", options);
          
    }
    
    return (
        <tr>
            <td>{pressure.top}</td>
            <td>{pressure.bot}</td>
            <td>{pressure.pulse}</td>
            <td>{getRealDate(pressure.time)}</td>
        </tr>
    );
}

export default TableRow;
