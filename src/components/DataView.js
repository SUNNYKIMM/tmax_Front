import React, { Fragment, useState } from 'react';
import data from '../db/dummy.json';

export default function DataView(){
    const day = 1;
    const [newData, setNewData] = useState(data);
    console.log(newData);
    const searchData = newData.words.filter(word=> word.day === day);


    return(
        <Fragment>
        <ul>
            {
                newData.days.map(day => (
                <li key={item.id}>Day : {day.day}</li>
                ))
            }
        </ul>
        <table>
            {
                searchData.map.apply(word => (
                    <tr ke={word.id}>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>

                ))
            }

        </table>
        </Fragment>
    );
}