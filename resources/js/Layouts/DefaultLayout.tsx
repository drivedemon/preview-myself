import { useState, PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton";

export default function Authenticated({ header, action, children }: PropsWithChildren<{ header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink href={route('personal_information')} active={route().current('personal_information')}>
                                    Personal Information
                                </NavLink>
                                <NavLink href={route('education')} active={route().current('education')}>
                                    Education
                                </NavLink>
                                <NavLink href={route('skill')} active={route().current('skill')}>
                                    Skill
                                </NavLink>
                                <NavLink href={route('work_experience')} active={route().current('work_experience')}>
                                    Work Experience
                                </NavLink>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('personal_information')} active={route().current('personal_information')}>
                            Personal Information
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('education')} active={route().current('education')}>
                            Education
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('skill')} active={route().current('skill')}>
                            Skill
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('work_experience')} active={route().current('work_experience')}>
                            Work Experience
                        </ResponsiveNavLink>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="flex justify-between max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <span>{header}</span>
                        <PrimaryButton onClick={action}>Edit</PrimaryButton>
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
