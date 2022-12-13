import React, { useState } from "react"
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
        <div className='fixed w-full items-center py-4 md:px-10 md:flex md:justify-between'>
            {/* Logo */}
            <div className='px-7 cursor-pointer md:px-0'>
                <img src='../images/logo.png' alt='Logo' class='h-8 md:object-contain md:h-11 transition-all duration-100'></img>
            </div>

            {/* Menu Items */}
            <div className="hidden md:flex">
                <ul className="flex">
                    <li className="text-fontprimary px-4 text-2xl my-3 cursor-pointer hover:text-navhover"><Link to='Home' smooth={true} duration={500}>Home</Link></li>
                    <li className="text-fontprimary px-4 text-2xl my-3 cursor-pointer hover:text-navhover"><Link to='About' smooth={true} duration={500}>About</Link></li>
                    <li className="text-fontprimary px-4 text-2xl my-3 cursor-pointer hover:text-navhover"><Link to='Experience' smooth={true} duration={500}>Experience</Link></li>
                    <li className="text-fontprimary px-4 text-2xl my-3 cursor-pointer hover:text-navhover"><Link to='Projects' smooth={true} duration={500}>Projects</Link></li>
                    <button className="text-fontprimary bg-buttoncolor hover:bg-buttonhover my-1 px-4 text-2xl rounded ml-5"><Link to='Contact' smooth={true} duration={500}>Contact</Link></button>
                </ul>
            </div>

            {/* Burger Menu Icon */}
            <div className="text-3xl absolute right-5 top-4 cursor-pointer md:hidden">
                <button onClick={() => setOpen(!open)}>
                    {open ? (<HiX size='1em' color="rgb(194 65 12)" />)
                        : (<HiMenuAlt3 size='1em' color="rgb(229 231 235)" />)}
                </button>
            </div>

            {/* Mobile Menu */}
            <ul className={`absolute z-[-1] w-full text-center bg-[#363636] pb-5
                md:hidden md:items-center md:pb-0 md:static md:z-auto md:w-auto md:pl-0
                transition-all duration-500 ${open ? 'top-16' : 'top-[-490px]'}`}>
                <li className="text-fontprimary px-4 text-2xl my-3 cursor-pointer hover:text-navhover"><Link to='Home' smooth={true} duration={500}>Home</Link></li>
                <li className="text-fontprimary px-4 text-2xl my-3 cursor-pointer hover:text-navhover"><Link to='About' smooth={true} duration={500}>About</Link></li>
                <li className="text-fontprimary px-4 text-2xl my-3 cursor-pointer hover:text-navhover"><Link to='Experience' smooth={true} duration={500}>Experience</Link></li>
                <li className="text-fontprimary px-4 text-2xl my-3 cursor-pointer hover:text-navhover"><Link to='Projects' smooth={true} duration={500}>Projects</Link></li>
                <li className="text-fontprimary px-4 text-2xl my-3 cursor-pointer hover:text-navhover"><Link to='Contact' smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
