import React from 'react';
import TableRow from './TableRow';

const Table = ({data, ...props}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Верхнее</th>
                    <th>Нижнее</th>
                    <th>Пульс</th>
                    <th>Дата</th>
                </tr>
            </thead>
            <tbody>
                {data.map(pressure => 
                    <TableRow pressure={pressure} key={pressure.id}></TableRow>
                )}
            </tbody>
        </table>
    );
}

export default Table;
