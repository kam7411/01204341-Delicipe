import React from 'react'
import { navbar1, home_detail } from '../components'

const Home = () => (
    <div className='homepage'>
        {/* <topbar design='default' /> */}
        <navbar1 />
        <home_detail />
        {/* <bottombar /> */}
    </div>
)
export default Home 