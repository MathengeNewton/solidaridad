import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-white rounded-lg shadow m-4">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">© {year} <Link href="https://www.solidaridadnetwork.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">brought to you by...</Link>. All Rights Reserved.
        </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                <li>
                    <Link href="#"><div className="hover:underline me-4 md:me-6">About</div></Link>
                </li>
                <li>
                    <Link href="#"><div className="hover:underline me-4 md:me-6">Privacy Policy</div></Link>
                </li>
                <li>
                    <Link href="#"><div className="hover:underline me-4 md:me-6">Licensing</div></Link>
                </li>
                <li>
                    <Link href="#"><div className="hover:underline">Contact</div></Link>
                </li>
            </ul>
        </div>
        </footer>
    );
}

export default Footer;
