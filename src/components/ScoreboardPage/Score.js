import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'



export default function Score(props){
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
    setIsOpen(true)
    }

    return(
        <div className='grid grid-cols-3 gap-x-5 my-12 bg-red-900 border-2 border-gold rounded-3xl p-5'>
            <div className="font-bold rounded-3xl lg:p-10">
                <div className="bg-gray-900 text-3xl rounded-2xl p-3 h-[95px]">{props.team1}</div>
                <div className="text-7xl mt-12">{props.score1}</div>
            </div>
            <div className="text-9xl font-bold rounded-3xl align-middle my-auto">VS <br/> 
            <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
            Match Details
            </button>
            <Transition show={isOpen} as={Fragment} className=''>
                <Dialog className='relative z-10' onClose={() => setIsOpen(false)}>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="min-h-screen px-4 text-center" />
                    </Transition.Child>
                    <div className='fixed inset-0 overflow-y-auto'>
                        <div>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                            >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Overlay/>
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg grid justify-self-start font-black leading-6 text-gray-900"
                                >
                                    Match Details
                                </Dialog.Title>
                                <div className="flex justify-center mt-2">
                                    <p className="text-sm text-gray-500">
                                    <div className='grid grid-cols-3 gap-x-5 my-12 rounded-3xl p-5'>
                                        <div className="font-bold rounded-3xl lg:p-10">
                                            
                                        </div>
                                        <div className="text-xl font-bold rounded-3xl align-middle my-auto">Set 1 <br/>
                                        </div>
                                        <div className="font-bold rounded-3xl lg:p-10">
                                            <div className="text-7xl mt-12">{props.scoreSetB1}</div>
                                        </div>   
                                    </div>      
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <button
                                    type="button"
                                    className="inline-flex justify-center px-4 py-2 text-sm text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 duration-300"
                                    onClick={closeModal}
                                    >
                                    Close
                                    </button>
                                </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
                </Transition>
            </div>
            <div className="font-bold rounded-3xl lg:p-10">
                <div className="bg-gray-900 text-3xl rounded-2xl p-3 h-[95px]">{props.team2}</div>
                <div className="text-7xl mt-12">{props.score2}</div>
            </div>        
        </div>
    )
}