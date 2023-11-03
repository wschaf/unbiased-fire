//  External Modules  //
import React from 'react';
import { useNavigate } from 'react-router-dom';

//  Internal Modules  //
import { UserContext } from 'App';

export default function Home() {
    const { user, setUser } = React.useContext(UserContext);
    const navigate = useNavigate();

    return (
        <div>
            <h1>This is the home page.</h1>
            <h2>Username: {JSON.stringify(user)}</h2>

            <button onClick={
                function click(event) {
                    console.log("Button 2 was Clicked\n", event);
                    navigate('/Error');
                }}
            >
                Go to Error Page
            </button>

        </div>
    );
}
