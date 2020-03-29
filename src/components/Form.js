import React, {Fragment, useState} from 'react'

export default function Form() {

    const [inputsForm, setInputsForm] = useState({
        name: '',
        fullName: ''
    })

    const handleInputChange = (e) => {
        setInputsForm({
            ...inputsForm,
            [e.target.name] : e.target.value 
        })
    }

    const sendDate = (e) => {
        e.preventDefault()
        console.log(`${inputsForm.name} ${inputsForm.fullName}`)
    }



    return (
        <Fragment>
            <h1>Form</h1>
            <form className="row" onSubmit={sendDate}>
                <div className="col-md-3 form-group">
                    <input onChange={handleInputChange} placeholder="Name" name="name" className="form-control" type="text"/>
                </div>
                <div className="col-md-3 form-group">
                    <input onChange={handleInputChange} placeholder="Fullname" name="fullname" className="form-control" type="text"/>
                </div>
                <div className="col-md-3 form-group">
                    <button className="btn btn-primary" type="submit">Save</button>
                </div>
            </form>
            <h3>{inputsForm.name} - {inputsForm.fullName}</h3>
        </Fragment>
    )
}
