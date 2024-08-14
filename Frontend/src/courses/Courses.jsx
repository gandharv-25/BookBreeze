import React from 'react'
import Course from '../components/Course'
import Footer from '../components/Footer'
import Nav from '../components/Nav';
function Courses() {
    return (
        <>
            <Nav />
            <div className='min-h-screen'>
                <Course />
            </div>
            <Footer />
        </>
    )
}

export default Courses
