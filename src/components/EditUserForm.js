import React from 'react'
import {useForm} from 'react-hook-form'

const EditUserForm = props => {

    const {register,errors,handleSubmit, setValue} = useForm({
        defaultValues: props.userEdit
    })

    setValue('name', props.userEdit.name)
    setValue('username', props.userEdit.username)

    const onSubmit = (data, e) => {
        data.id = props.userEdit.id
        props.updateUser(props.userEdit.id, data)
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" name="name" ref={
            register({required: {value: true, message: 'Obligatory field'}
        })
        }/>
        <div>{errors?.name?.message}</div>
        <label>Username</label>
        <input type="text" name="username" ref={
            register({required: {value: true, message: 'Obligatory field'}
        })
        }/>
        <div>{errors?.username?.message}</div>
        <button>Edit user</button>
        </form>
    )
}

export default EditUserForm