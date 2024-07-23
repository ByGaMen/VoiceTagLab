import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './Components/Nabvar/Navbar'
import { useContext, useState } from 'react'
import Form from './Components/Form/Form'
import { ScreenContex } from './Contex/ScreenContex'


function App() {
    const { formVisibility } = useContext(ScreenContex)

    return (
        <div className='app'>
            {formVisibility
                ? <Form />
                : <></>}
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}
export default App
