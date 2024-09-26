import React from 'react';

function WithoutJSXComponent(){
    return React.createElement(
        'p',
        {},
        [
            'This statement is written by use of jsx. and Please visit',
            React.createElement(
                'a',
                {href:"https://www.google.com/"},
                'google',
            )
            

        ]
    );
};

export default WithoutJSXComponent