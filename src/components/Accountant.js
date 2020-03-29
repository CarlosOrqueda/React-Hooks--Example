import React, {useState, Fragment} from 'react'
import Temperature from './Temperature'

export default function Accountant() {

    const [num, setNum] = useState(0);

    const increase = () => {
        setNum(num + 1);
    }

    return (
        <Fragment>
            <h3>My First Component {num}</h3>
            <button className="btn btn-primary" onClick={increase}>Increase</button>
            <hr/>
            <Temperature temperature={num}/>
        </Fragment>
    )
}