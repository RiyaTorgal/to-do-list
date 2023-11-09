import { Input, PasswordInput } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
    <>
    <div className="py-6"/>
    <div className="mt-14 p-4 w-full max-w-md mx-auto overflow-hidden bg-white border rounded-lg">
        <div className="px-6 py-6 justfy-center">
            <h2 className="text-2xl font-bold text-center text-sky-950">Signup</h2>
            <h3 className="mt-1 text-md font-medium text-center text-sky-900">Create Account</h3>
            <form>
                    <div className="w-full mt-4 text-sm">
                        <Input
                            variant="unstyled"
                            name="email" type="email"
                            placeholder="Email Address"
                            className='p-1'
                            required 
                        />
                    </div>

                    <div className="w-full mt-4 text-sm">
                        <Input
                            variant="default"
                            name="username"
                            placeholder="User Name"
                            className='p-1'
                            required 
                            />
                    </div>

                    <div className="w-full mt-4 text-sm">
                        <PasswordInput
                            name="password"
                            minLength={3}
                            maxLength={16}
                            placeholder="Password"
                            className='p-1'
                            required
                        />
                    </div>
                    <button className="mt-4 w-full px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-sky-900 hover:bg-sky-950 focus:outline-none" type="submit">Sign in</button>
                </form>
            </div>
            <div className="flex items-center justify-center py-4 text-center bg-sky-100 rounded-sm">
                <span className="text-sm text-gray-600">Already have an account? </span>
                <Link href="/login" ><div className="mx-2 text-sm font-bold text-sky-900 hover:underline">Login</div></Link>
            </div>
        </div>
    </>
    )
}

export default page