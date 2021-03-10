import React from 'react'


const Footer = () => {
    return (
    <>
        <footer className="page-footer">
            <ul className="social">    
                <li><a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></a></li>
            </ul>
            <nav aria-label="Legal">
                <ul className="legal">
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Accessibility Policy</a></li>
                </ul>
            </nav>
            <p className="copyright">&copy; 2021 by Agathe.</p>
        </footer>

        
    </>)
}

export default Footer