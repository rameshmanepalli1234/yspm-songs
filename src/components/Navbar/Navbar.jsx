import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import $ from 'jquery';
import './Navbar.scss';

const Navbar = () => {

    function animation() {
        var tabsNewAnim = $('#navbarSupportedContent');
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            'height': activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px",
        });
        $("#navbarSupportedContent").on("click", "li", function(e) {
           $('#navbarSupportedContent ul li').removeClass("active");
           $(this).addClass('active');
           var activeWidthNewAnimHeight = $(this).innerHeight();
           var activeWidthNewAnimWidth = $(this).innerWidth();
           var itemPosNewAnimTop= $(this).position();
           var itemPosNewAnimLeft = $(this).position();
           $(".hori-selector").css({
               "top":itemPosNewAnimTop.top + "px",
               "left":itemPosNewAnimLeft.left + "px",
               "height": activeWidthNewAnimHeight + "px",
               "width": activeWidthNewAnimWidth + "px"
           });
        });
    }

    useEffect(() => {
        animation();
        $(window).on('resize', function (){
            setTimeout(function (){
                animation();
            },500);
        })
    })

    return (
        <nav className='navbar navbar-expand-lg navbar-mainbg'>
            <NavLink to='/' className='navbar-brand navbar-logo'>
                YSPM Ministries
            </NavLink>

            <button
                className='navbar-toggler'
                onClick={function (){
                setTimeout(function (){
                    animation();
                })}
                }
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <i className='fas fa-bars text-white'> </i>
            </button>

            <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
            >
                <ul className='navbar-nav ml-auto'>
                    <div className='hori-selector'>
                        <div className='left'></div>
                        <div className='right'></div>
                    </div>
                    <li className='nav-item active'>
                        <NavLink to='/' className='nav-link'>
                            <i className='fa fa-home'>
                            </i>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/about' className='nav-link'>
                            <i className='far fa-address-book'>
                            </i>
                            About
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/service' className='nav-link'>
                            <i className='fa fa-comments'>
                            </i>
                            Services
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/songs' className='nav-link'>
                            <i className='fas fa-music'>
                            </i>
                            Songs
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/verse' className='nav-link'>
                            <i className='fas fa-book'>
                            </i>
                            Verse of the Day
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/bible' className='nav-link'>
                            <i className='fas fa-bible'>
                            </i>
                            Bible
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/testimonial' className='nav-link'>
                            <i className='far fa-chart-bar'>
                            </i>
                            Testimonial
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/contact' className='nav-link'>
                            <i className='fas fa-address-card'>
                            </i>
                            Contact Us
                        </NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar;