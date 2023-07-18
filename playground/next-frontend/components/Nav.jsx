'use client'

import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import {useState, useEffect} from "react";
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {
    const isUserLogged = true;
    const [providers, setProviders] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders()

            setProviders(response)
        }
        setProviders();
    }, [])

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center">
                <Image src="/assets/images/logo.svg"
                       alt="logo.image"
                       width={30}
                       height={30}
                       className="object-contain"
                />
                <p className="logo_text">
                    Promtopia
                </p>
                {/* Desctop Nav*/}
                <div className="sm:flex hidden">
                    {isUserLogged ? (
                        <div className="flex gap-3 md:gap-5">
                            <Link href="/create-prompt" className="black_btn">
                                Create Post
                            </Link>

                            <button type="button"
                                    onClick={signOut}
                                    className="outline_btn">
                                Sign Out
                            </button>
                            <Link href="/profile">
                                <Image
                                    src="/assets/images/logo.svg"
                                    alt="profile"
                                    width={37}
                                    height={37}
                                    className="rounded-full"
                                />
                            </Link>
                        </div>
                    ) : (
                        <>
                            {providers && Object.values(providers).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    className="black_btn"
                                    onClick={() => signIn()}
                                >
                                    Sign In
                                </button>
                            ))}
                        </>
                    )}
                </div>
            </Link>
            {/* Mobile Navigation */}
            <div className="sm:hidden flex relative">
                {isUserLogged
                    ? (<div className="flex">
                        <Link href="/profile">
                            <Image
                                src="/assets/images/logo.svg"
                                alt="profile"
                                width={37}
                                height={37}
                                className="rounded-full"
                                onClick={() => setToggleDropdown(prev => !prev)}
                            />

                            {toggleDropdown && (
                                <div className="dropdown">
                                    <Link href='/profile'
                                          className="dropdown_link"
                                          onClick={() => setToggleDropdown(false)}
                                    >
                                        My Profile
                                    </Link>
                                    <Link href="/create-prompt"
                                          className="dropdown_link"
                                          onClick={() => toggleDropdown(false)}
                                    >
                                        Create Prompt
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => {
                                        setToggleDropdown(false)
                                        signOut()
                                    }}
                                        className="mt-5 w-full black_btn"
                                    >

                                    </button>
                                </div>
                            )}
                        </Link>
                    </div>)
                    : (<>{providers && Object.values(providers).map((provider) => (
                        <button
                            type="button"
                            key={provider.name}
                            className="black_btn"
                            onClick={() => signIn()}
                        >
                            Sign In
                        </button>
                    ))}</>)
                }
            </div>
        </nav>
    )
}
export default Nav
