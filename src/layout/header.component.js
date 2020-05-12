import React, { useState, useEffect } from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import { GET_PROFILE } from '../store/constant';
import { useDispatch, useSelector } from 'react-redux';
import { handleRequest } from '../store/actions';
export default function Header(){
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
      <section className="header d-flex ml-auto w-100">
<div className="d-flex justify-content-end w-100 pr-4 align-items-center">
    {userProfile && 
    <div className="d-flex">
        <div className="d-flex flex-column  text-capitalize mr-3">
        <span className="font-weight-bold text-right" style={{fontSize:'16px'}}>
                                                        {userProfile.userAccountInfo &&
                                                            userProfile
                                                                .userAccountInfo
                                                                .fullName}
                                                    </span>
                                                    <span style={{fontSize:'13px'}} className="text-right">
                                                        {userProfile.userAccountInfo &&
                                                            userProfile
                                                                .userAccountInfo
                                                                .fullName}
                                                    </span>
                                                </div>
        <img
                                                src={
                                                    userProfile.userAccountInfo &&
                                                    userProfile.userAccountInfo
                                                        .profilePictureURL
                                                }
                                                alt="profile"
                                                height={35}
                                                width={35}
                                                className="rounded-circle"
                                            />
    </div>}
</div>
{/* <Navbar bg="light" expand="lg">
    <div className="d-flex ml-auto w-100">
SAMUEL
    </div>
  </Navbar> */}
      </section>
  )
}