 import React, {useRef, useEffect} from 'react'
 import { Container } from 'reactstrap'
 import'./header.css'

const navLinks = [
    {
        display:'Home',
        url:'#home'
    },

    {
        display:'About',
        url:'#about'
    },

    {
        display:'Services',
        url:'#services'
    },

    {
        display:'Portfolio',
        url:'#portfolio'
    },

    {
        display:'Contact',
        url:'#contact'
    },
]


 const Header = () => {
    const headerRef = useRef(null);

    const menuRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('header_shrink')
            } else{
                headerRef.current.classList.remove('header_shrink')
        }
    });

     return () => {
        window.removeEventListener("scroll", null);
     };
    
    }, []);

    const menuToggle = ()=> menuRef.current.classList.toggle('menu_active')

    const handleClick = e=>{
        e.preventDefault()
        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop

        window.scrollTo({
            left: 0,
            top: location - 70,
        })
    }



   return (
    <header className="header" ref={headerRef}>
    <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
            <div className="logo"><h5>Qayyum Ibrahim</h5></div>

            <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
            <ul className="nav_list">
                {
                    navLinks.map((item, index) =><li className="nav_item" key={index}>
                    <a href={item.url} onClick={handleClick}>{item.display}</a>
                    </li>)
                }
            </ul>   
        </div>


        <div className="nav_right d-flex align-items-center gap-4">
            <button className='btn'>Let's Talk</button>
            <span className="mobile_menu">
                <i class="ri-menu-5-line" onClick={menuToggle}></i>
            </span>
        </div>
        </div>
    </Container>
</header>
   )
   
 } 
 export default Header 