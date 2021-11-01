import React from 'react';
import ReactDOM from 'react-dom';
import Bio from './Bio';

const App = () => {
    return (
        <div>
            <h1 id="my-brand">Adopt Me!</h1>
            <Bio name="Sukumar" gender="male" age={28}/>
            <Bio name="Venkata" gender="male" age={27}/>
            <Bio name="Devi" gender="female" age={25} />
        </div>
    )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
