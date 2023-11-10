import {Input, Textarea } from '@mantine/core'
import React from 'react'

const page = () => {
    return (
    <>
    <div className="py-6"/>
    <div className="mt-14 p-5 w-full max-w-md mx-auto overflow-hidden bg-white border rounded-lg">
        <div className="px-6 py-4">
            <h2 className="text-2xl font-bold text-center text-sky-950">Create Task</h2>
            <form>
                <div className="w-full mt-4">
                    <Input
                        variant="default"
                        name="title"
                        placeholder="Title"
                        required
                    />
                </div>

                <div className="w-full mt-4">
                    <Textarea
                        autosize
                        minRows={6}
                        name="note"
                        placeholder="Your note"
                    />
                </div>
                <button className="mt-4 w-full p-3 rounded-md leading-5 text-white transition-colors duration-200 transform bg-sky-900 hover:bg-sky-950  focus:outline-none">Create Task</button>
                </form>
            </div>
        </div>
    </>
    )
}

export default page