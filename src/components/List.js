import React, {useState, Fragment} from 'react'

export default function List() {

    const [arrayList, setArrayList] = useState([1,2,3,4,5])

    const addElement = () => {
        setArrayList([...arrayList, arrayList[arrayList.length -1] + 1])
    }

    return (
        <Fragment>
            <h2>List</h2>
            <button onClick={addElement}>Add</button>
            {
                arrayList.map((num, index) => (
                <p key={index}>
                    {num} - {index}
                </p>
                ))
            }
        </Fragment>
    )
}
