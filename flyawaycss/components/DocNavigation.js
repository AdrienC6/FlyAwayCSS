import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const DocNavigation = () => {
    const router = useRouter();

    return (
        <nav className="navbar" id="navbar-website">
            <p className={router.pathname == '/' ? "nav-item-nomobile active" : "nav-item-nomobile"}>
                <Link href="/">Home</Link>
            </p>
            <p className={router.pathname == '/getstarted' ? "nav-item-nomobile active" : "nav-item-nomobile"}>
                <Link href="/getstarted">Get Started</Link>
            </p>
            <p className={router.pathname == '/layouts' ? "nav-item-nomobile active" : "nav-item-nomobile"}>
                <Link href="/layouts">Layouts</Link>
            </p>
            <p className={router.pathname == '/components' ? "nav-item-nomobile active" : "nav-item-nomobile"}>
                <Link href="/components">Components</Link>
            </p>
            <p className={router.pathname == '/others' ? "nav-item-nomobile active" : "nav-item-nomobile"}>
                <Link href="/others">Others</Link>
            </p>
            <div className="mobile-menu">
                <FontAwesomeIcon icon={faBars} className="mobile-open" />
                <div className="mobile-items">
                    <p className={router.pathname == '/' ? "active" : ""}>
                        <Link href="/">Home</Link>
                    </p>
                    <p className={router.pathname == '/getstarted' ? "active" : ""}>
                        <Link href="/getstarted">Get Started</Link>
                    </p>
                    <p className={router.pathname == '/layouts' ? "active" : ""}>
                        <Link href="/layouts">Layouts</Link>
                    </p>
                    <p className={router.pathname == '/components' ? "active" : ""}>
                        <Link href="/components">Components</Link>
                    </p>
                    <p className={router.pathname == '/others' ? "active" : ""}>
                        <Link href="/others">Others</Link>
                    </p>
                </div>
            </div>
        </nav>
    );
};

export default DocNavigation;