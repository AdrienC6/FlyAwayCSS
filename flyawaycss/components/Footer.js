import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="flyaway-footer">
            <div className="flyaway-footer-copyright">
                <p className="flyaway-footer-title">
                    FlyAwayCSS
                </p>
                <p className="flyaway-footer-content">
                    Designed & Built with &hearts; by &copy; <a href="https://sonofcoffee.fr">Son of Coffee</a><br />
                    &copy; 2021 - All rights reserved
                </p>
                <p className="flyaway-footer-content">
                    Current version : v1.0
                </p>
            </div>
            <div className="flyaway-footer-section">
                <div className="flyaway-footer-list">
                    <p>Links</p>
                    <Link href="/">Home</Link>
                    <Link href="/getstarted">Get Started</Link>
                    <Link href="/layouts">Layouts</Link>
                    <Link href="/components">Components</Link>
                    <Link href="/others">Others</Link>
                    <Link href="/getstarted">Get Started</Link>
                </div>
                <div className="flyaway-footer-list">
                    <p>Resources</p>
                    <Link href="/getstarted">Stylesheet</Link>
                    <Link href="/getstarted">Javascript</Link>
                    <Link href="/getstarted">GitHub</Link>
                    <Link href="/getstarted">NPM</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;