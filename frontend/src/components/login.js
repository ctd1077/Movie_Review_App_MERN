import React, {useState} from "react";
import Form from 'react-bootstrap/Form';

import Button from "react-bootstrap/esm/Button";
// or this oneimport Button from "react-bootstrap/Button";

const Login = props => {

    const [name, setName] = useState("")
    const [id, setId] = useState("")

    const onChangeName = e => {
        const name = e.target.value
        setName(name);
    }

    const onChangeId = e => {
        const id = e.targetvalue
        setId(id);
    }

    const login = () => {
        props.login({name: name, id: id})
        props.history.push('/')
    }

    return(
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={onChangeName}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Enter id"
                    value={id}
                    onChange={onChangeId}
                    />
                </Form.Group>
                <Button variant="primary" onClick={login}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Login;