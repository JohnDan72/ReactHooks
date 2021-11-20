import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomProvider } from 'rsuite';

// hooks components
import HookApp from "./HookApp";
import CounterApp from './components/01-useState/CounterApp';
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
import SimpleForm from './components/02-useEffect/SimpleForm';
import SimpleFormWithCustomHook from './components/02-useEffect/SimpleFormWithCustomHook';
import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks';
import FocusScreen from './components/04-useRef/FocusScreen';
import RealExampleRef from './components/04-useRef/RealExampleRef';
import Layout from './components/05-layoutEffect/Layout';
import Memorize from './components/06-memo/Memorize';
import MemoHook from './components/06-memo/MemoHook';
import CallbackHook from './components/06-memo/CallbackHook';
import Padre from "./components/07-tareaMemo/Padre";
import TodoApp from './components/08-useReducer/TodoApp';

// notfound
import NotFound from './components/NotFound';

// context components
import ContextApp from './components/09-useContext/ContextApp';
import HomeScreen from './components/09-useContext/HomeScreen';
import AboutScreen from './components/09-useContext/AboutScreen';
import LoginScreen from './components/09-useContext/LoginScreen';
import { UserContext } from './components/09-useContext/UserContext';


// data context
// import data from './userData.json';


const MainRouter = () => {
    const [user, setUser] = useState({})
    const [theme, setTheme] = useState('dark');

    return (
        <UserContext.Provider value={{
            user, setUser
        }}>
            <CustomProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path="/hooks" element={<HookApp setTheme={setTheme} />} >
                            <Route path="" element={<h2>Home</h2>} />
                            <Route path="counter" element={<CounterApp />} />
                            <Route path="counterHook" element={<CounterWithCustomHook />} />
                            <Route path="useEffect" element={<SimpleForm />} />
                            <Route path="useEffectHook" element={<SimpleFormWithCustomHook />} />
                            <Route path="useFetch" element={<MultipleCustomHooks />} />
                            <Route path="useRef" element={<FocusScreen />} />
                            <Route path="useRefReal" element={<RealExampleRef />} />
                            <Route path="useLayoutEffect" element={<Layout />} />
                            <Route path="memorize" element={<Memorize />} />
                            <Route path="memoHook" element={<MemoHook />} />
                            <Route path="useCallback" element={<CallbackHook />} />
                            <Route path="tareaMemo" element={<Padre />} />
                            <Route path="useReducer" element={<TodoApp />} />
                        </Route>
                        <Route path="/context" element={<ContextApp setTheme={setTheme} />}>
                            <Route path="" element={<HomeScreen />} />
                            <Route path="about" element={<AboutScreen />} />
                            <Route path="login" element={<LoginScreen />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>
            </CustomProvider>
        </UserContext.Provider>
    );
}

export default MainRouter;