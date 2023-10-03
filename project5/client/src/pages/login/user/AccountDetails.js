import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Loading from '../../../components/messages/Loading';
import Error from '../../../components/messages/Error';
import { updateProfile } from '../../../Redux/Actions/UserAction';
import Toast from '../../../components/messages/Toast';
import { toast } from 'react-toastify';

function AccountDetails() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const toastId = useRef(null)

    const Toastobject = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000
    }

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { loading: updateLoading } = userUpdateProfile;

    useEffect(() => {
        if (user) {
            setName(user.name)
            setEmail(user.email)
        }
    }, [dispatch, user])

    const handleSubmit = (e) => {
        e.preventDefault();

        //Password match
        if (password !== confirmPassword) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Password don't match!", Toastobject)
            }
        } else {
            //UPDATE PROFILE
            dispatch(updateProfile({ id: user._id, name, email, password }))
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Profile Updated", Toastobject)
            }
        }
    }
    return (
        <>
            <Toast />
            {error && <Error>{error}</Error>}
            {loading && <Loading />}
            {updateLoading && <Loading />}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type='text'
                        placeholder='Enter full name...'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type='email'
                        placeholder='Change email...'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type='password'
                        placeholder='Enter password...'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        type='password'
                        placeholder='Confirm password...'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button>Update Account</button>
            </form>
        </>
    )
}

export default AccountDetails
