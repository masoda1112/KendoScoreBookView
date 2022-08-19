import React from 'react';
import firebaseApp from '../Firebase/firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: "/",
    signInOptions: [
        firebaseApp.auth.GoogleAuthProvider.PROVIDER_ID,
        firebaseApp.auth.EmailAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
}


const SignInScreen = (props) => {
    return (
        <div>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    );
}

export default SignInScreen;
