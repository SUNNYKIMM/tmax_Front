import React, {useState} from 'react';

export default function Subject3(){
    const [textTest, setTextTest] = useState(["HTML", "React"]);
    return(
        <article>
            <h2>HTML?</h2>
            <p>HTML이 제일 쉬웠어요. 그-짓말 ㅡㅡ;</p>
        </article>
    );
}