import React, { Fragment, useState } from 'react'
import {useForm} from 'react-hook-form'

export default function Example1() {

    const {register, errors, handleSubmit} = useForm()

    const [inputs, setInputs] = useState([])

    const onSubmit = (data, e) => {
        setInputs(
            [...inputs, data]
        )
        e.target.reset()
    }

    return (
        <Fragment>
            <h1>Example 1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                name="title"
                type="text" 
                placeholder="Title" 
                className="form-control my-2"
                ref={
                    register({
                        required: {value: true, message: 'Obligatory field'},
                        minLength: {value: 2, message: 'Minimum 2 letters'}
                    })
                }
                />
                {errors.title && 
                <span 
                className="text-danger text-small d-block mb-2"
                >{errors.title.message}
                </span>
                }
                <input 
                name="description"
                type="text" 
                placeholder="Description" 
                className="form-control my-2"
                ref={
                    register({
                        required: {value: true, message: 'Obligatory field'}
                    })
                }
                />
                {errors.description && 
                <span 
                className="text-danger text-small d-block mb-2"
                >{errors.description.message}
                </span>
                }
                <button className="btn btn-primary" type="submit">Save</button>
            </form>
            <ul>
                {
                    inputs.map((item, index) => (
                    <li key={index}>{item.title} - {item.description}</li>
                    ))
                }
            </ul>
        </Fragment>
    )
}
