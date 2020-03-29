import React, {Fragment} from 'react'

export default function Temperature(props) {
    return (
        <Fragment>
            <h2>Cold or Hot?</h2>
            <h4>
                {
                    props.temperature > 10 ? 'Hot' : 'Cold'
                }
            </h4>
        </Fragment>
    )
}
