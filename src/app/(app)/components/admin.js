'use client'

import Link from 'next/link'

const Admin = () => {
    return (
        <ul
            className={`menu text-accent bg-secondary pt-32 w-full lg:w-56 lg:block
        h-screen z-30 hidden`}>
            <li>
                <Link href={'/admin'} className="menu-title text-accent">
                    Admin
                </Link>
                <ul>
                    <li>
                        <Link href="/admin/addfilm">Add Film</Link>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default Admin
