import React, { Fragment } from "react";
import { Card, Form, Button } from "react-bootstrap";
export default function Help() {
    return (
        <Fragment>
            <section className="w-100 d-flex justify-content-center px-5 mt-5">
                <Card className="w-100 ">
                    <Card.Body className="d-flex flex-column">
                        <div className="h2 border-bottom pb-3 text-center">Contact us</div>
                        <div className="pt-3">
                            <div style={{fontSize:'14px',fontWeight:'500'}} className="pb-3 text-center">Let us know how we can help</div>
                            <Form>
                                  
                            <div className="mx-7">
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows="3" placeholder="Let us know if you have any questions or suggestions we could be more happy to help you!"/>
                                </Form.Group>
                            </div>
                            <div className="d-flex justify-content-center">
                                  <Button variant="primary" size="md">Send</Button>
                            </div>
                            </Form>
                        </div>
                    </Card.Body>
                </Card>
            </section>
        </Fragment>
    );
}
