import { useState } from "react"
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

const Work = () => {
    //[{id: String, title : string, description: string}]
    const [task, setTask] = useState([]);
    const [showTask, setShowTasks] = useState(true);

    const createTask = (e) => {
        e.preventDefault();
    }
    
    return(<Container>
        <Row>
            <Col md={6} xs={12}>
            <h3>task</h3>
            <Form onSubmit={createTask}>
                <Form.Group>
                    <Form.Label>Titulo de la tarea</Form.Label>
                    <Form.Control placeholder="Tarea" name="title" /> 
                </Form.Group>
            </Form>

            <Form>
                <Form.Group>
                    <Form.Label>Descripcion de la tarea</Form.Label>
                    <Form.Control 
                    name="description"
                    as="textarea"
                    rows={3}
                    placeholder="Descripcion de la tarea" /> 
                </Form.Group>
                <Button type="button">Crear tarea</Button>
            </Form>
            </Col>
        </Row>
    </Container>

    );
};

export default Work;