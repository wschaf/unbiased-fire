//  External Modules  //
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//  Internal Modules  //
import Routes from 'Routes';
import useFetchWeatherData from 'api/requests/useFetchWeatherData';

//  Styles  //
import 'styles/App.css';

export const UserContext = React.createContext(null);

export default function App() {
    const router = createBrowserRouter(Routes);
    const [user, setUser] = React.useState(null);

    const weather = useFetchWeatherData('Annapolis');
    console.log('Retrieved weather.\n', weather);

    if (weather.status === 'loading') {
        return (
            <div className="App">
                <h1>Weather's Loading, Yo</h1>
            </div>
        )
    }
    else if (weather.status === 200) {
        return (
            <div className="App">
                <h1>Here's the weather, Yo</h1>
                <h3>{JSON.stringify(weather)}</h3>
            </div>
        )
    }
    else {
        return (
            <div className="App">
                <h1>It failed, Yo</h1>
                <h3>Error code: {weather.status}</h3>
            </div>
        )
    }

    // return (
    //     <div className="App">
    //         <h1>This is the home page.</h1>
    //         <UserContext.Provider value={{ user: user, setUser: setUser }}>
    //             <RouterProvider router={router} />
    //         </UserContext.Provider>
    //     </div>
    // );
}
