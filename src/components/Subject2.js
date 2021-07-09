import { lighten } from '@material-ui/core';
import React, {Component, useState, Fragment} from 'react';

export default function Subject2(){
    const [urlName, setUrlName] = useState([
        'Google', 'Naver', 'Instagram', 'FaceBook'
    ]);

    console.log(urlName);
    return(
        <Fragment>
            <navi>
                <ul>
                    {
                        urlName.map((item, index) => {
                            return(
                                <li key={index}> {item} </li>
                            );
                        })
                    }

                </ul>
            </navi>
        </Fragment>
    );
}