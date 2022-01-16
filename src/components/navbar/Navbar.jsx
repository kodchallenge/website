import React from 'react'

const Navbar = () => {
    return (
        <nav id='top-navbar' className='top-navbar'>
            <div className='p-2'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-3'>
                            <h1><span className='text-primary'>Kod</span>Challenge</h1>
                        </div>
                        <div className='col-md-6'>
                            <ul className='navbar align-items-center justify-content-start'>
                                <li>
                                    <a href='#'>Anasayfa</a>
                                </li>
                                <li>
                                    <a href='#'>Problemler</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-3 text-end'>
                            <ul>
                                <li className='p-0'>Test</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default React.memo(Navbar)
