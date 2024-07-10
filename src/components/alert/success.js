'use client'

import { useEffect, useState } from 'react'

const Success = ({ text, className }) => {
    const [isDisplay, setIsDisplay] = useState('on')

    useEffect(() => {
        const handleTimeout = () => {
            return setTimeout(() => {
                setIsDisplay('off')
            }, 3000)
        }

        handleTimeout()

        return () => clearTimeout(handleTimeout())
    }, [isDisplay])

    return (
        <div
            role="alert"
            className={`${className} ${isDisplay === 'off' && 'hidden'} 
            ${isDisplay === 'on' && 'block'} absolute top-32 alert alert-success`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            <span>{text}</span>
        </div>
    )
}

export default Success
