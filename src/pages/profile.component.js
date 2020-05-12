import React, { Fragment, useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { handleRequest } from "../store/actions";
import { GET_PROFILE } from "../store/constant";

export default function Profile() {
    const dispatch = useDispatch();
    const [userProfile, setUserProfile] = useState();
    const { profile } = useSelector((state) => ({
        profile: state.user.profile,
    }));

    useEffect(() => {
        dispatch(handleRequest(GET_PROFILE.SUCCESS));
    }, []);

    useEffect(() => {
        if (profile) {
            setUserProfile(profile);
        }
    }, [profile]);
    return (
        <Fragment>
            <section className="profile w-100">
                <div className="d-flex w-100 flex-wrap">
                    <div className="mr-5">
                        {userProfile && (
                            <Card style={{ width: '40rem' }}>
                                <Card.Body>
                                    <div className="d-flex flex-column">
                                        <div className="d-flex justify-content-center">
                                            <img
                                                src={
                                                    userProfile.userAccountInfo &&
                                                    userProfile.userAccountInfo
                                                        .profilePictureURL
                                                }
                                                alt="profile"
                                                height={50}
                                                width={50}
                                                className="rounded-circle"
                                            />
                                        </div>
                                        <div className="d-flex flex-row justify-content-between w-100 border-bottom py-3">
                                            <div className="d-flex flex-column align-items-start">
                                                <div className="d-flex flex-column align-items-start">
                                                    <span className="text-muted">
                                                        Full name
                                                    </span>
                                                    <span>
                                                        {userProfile.userAccountInfo &&
                                                            userProfile
                                                                .userAccountInfo
                                                                .fullName}
                                                    </span>
                                                </div>
                                                <div className="d-flex flex-column align-items-start">
                                                    <span className="text-muted">
                                                        Email
                                                    </span>
                                                    <span>
                                                        {userProfile.userAccountInfo &&
                                                            userProfile
                                                                .userAccountInfo
                                                                .email}
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="text-primary">
                                                Edit Profile
                                            </span>
                                        </div>
                                        <div className="py-4 border-bottom d-flex justify-content-start">
                                            <span className="text-primary">
                                                Change password
                                            </span>
                                        </div>
                                        <div className="py-4 border-bottom d-flex justify-content-start">
                                            {/* <span className="text-primary">
                                                Change password
                                            </span> */}
                                            <Form.Group controlId="exampleForm.ControlSelect1" className="d-flex  align-items-center">
                                                <Form.Label className="text-primary text-nowrap mr-4">
                                                    Select App Language
                                                </Form.Label>
                                                <Form.Control as="select">
                                                    <option>English</option>
                                                    <option>French</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </div>
                                        <div className="py-3 d-flex justify-content-between">
                                            <span className="text-primary">
                                                Logout
                                            </span>
                                            <span>
                                                <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check
                                                        type="checkbox"
                                                        label="Logout on all devices"
                                                    />
                                                </Form.Group>
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        )}
                    </div>
                    <span className="font-weight-bold">Recent Likes</span>
                </div>
            </section>
        </Fragment>
    );
}
