import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'

export default function Score(props){
    const [isOpen, setIsOpen] = useState(false)
    
    const splitSet = (set) => {
        try {
            var [teamA, teamB] = set.split('-');
        return [teamA, teamB]
        }
        catch (err) {
            return null
        }
    }
    

    const set1 = splitSet( props.set1 )
    const set2 = splitSet( props.set2 )
    const set3 = splitSet( props.set3 )
    const set4 = splitSet( props.set4 )
    const set5 = splitSet( props.set5 )

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return(
            <div className='grid grid-cols-3 gap-x-5 my-12 bg-red-900 border-2 border-gold rounded-3xl p-3 md:p-5 text-center align-center px-auto'>
                <div className="font-bold rounded-3xl lg:p-10 justify-center mx-auto">
                    <div className="bg-gray-900 text-[10px] xl:text-3xl md:text-lg xl:rounded-2xl rounded-lg p-1 md:p-2 lg:p-3 grid place-items-center py-auto xl:h-[95px] h-[70px] lg:h-[90px] xl:h-[110px] w-fit">{props.team1}</div>
                    <div className="md:text-3xl lg:text-5xl xl:text-7xl xl:mt-12 mt-3">{props.score1}</div>
                </div>
                <div className="text-3xl lg:text-7xl font-bold rounded-3xl align-middle my-auto">VS <br/> 
            <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black bg-opacity-20 px-2 md:px-10 lg:px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
            Match Details
            </button>
            <Transition show={isOpen} as={Fragment} className=''>
                <Dialog as='div' className='relative z-10' onClose={() => setIsOpen(false)}>
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
                        <div className='flex min-h-full items-center justify-center p-32 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                            >
                            <Dialog.Panel className="lg:w-full w-fit max-w-lg  overflow-hidden rounded-2xl bg-gray-900 border-2 border-yellow-400 border-md md:p-6 p-1 text-center align-middle shadow-xl transition-all">
                                <Dialog.Overlay/>
                                <Dialog.Title
                                    as="h3"
                                    className="md:text-2xl text-base grid justify-self-center font-black leading-6 text-white"
                                >
                                    Match Details
                                </Dialog.Title>
                                <div className="flex justify-center mt-2 ">
                                    <p className="text-sm text-gray-500">
                                    <div className='grid grid-rows-3 gap-x-5 lg:gap-y-0 gap-y-1 my-1 rounded-3xl'>
                                    { set1 ? (
                                        <div className='grid grid-cols-3 md:gap-x-5'>
                                            <div className="font-bold rounded-3xl lg:p-10 justify-center mx-auto">
                                                <div className={`${parseInt(set1[0]) > parseInt(set1[1]) ? 'bg-red-700 text-white' : 'text-red-700'} text-xl sm:text-2xl lg:text-5xl xl:text-5xl   rounded-lg p-1 grid place-items-center py-auto w-fit align-middle`}>{ set1[0] }</div>   
                                            </div>
                                            <div className="lg:text-xl text-md text-white font-bold rounded-3xl grid place-items-center ">
                                                <div>- 1 -</div>
                                            </div>
                                            <div className="font-bold rounded-3xl lg:p-10 justify-center mx-auto">
                                                <div className={`${parseInt(set1[1]) > parseInt(set1[0]) ? 'bg-red-700 text-white' : 'text-red-700'} text-xl sm:text-2xl lg:text-5xl xl:text-5xl   rounded-lg p-1 grid place-items-center py-auto w-fit align-middle`}>{ set1[1] }</div>
                                            </div>   
                                        </div>
                                        ) : ''}
                                        { set2 ? (
                                        <div className='grid grid-cols-3 md:gap-x-5'>
                                            <div className="font-bold rounded-3xl lg:p-10 justify-center mx-auto">
                                                <div className={`${parseInt(set2[0]) > parseInt(set2[1]) ? 'bg-red-700 text-white' : 'text-red-700'} text-xl sm:text-2xl lg:text-5xl xl:text-5xl   rounded-lg p-1 grid place-items-center py-auto w-fit align-middle`}>{ set2[0] }</div>   
                                            </div>
                                            <div className="lg:text-xl text-md text-white font-bold rounded-3xl grid place-items-center ">
                                                <div>- 2 -</div>
                                            </div>
                                            <div className="font-bold rounded-3xl lg:p-10 justify-center mx-auto">
                                                <div className={`${parseInt(set2[1]) > parseInt(set2[0]) ? 'bg-red-700 text-white' : 'text-red-700'} text-xl sm:text-2xl lg:text-5xl xl:text-5xl   rounded-lg p-1 grid place-items-center py-auto w-fit align-middle`}>{ set2[1] }</div>
                                            </div>   
                                        </div>
                                        ) : ''}
                                        { set3 ? (
                                        <div className='grid grid-cols-3 md:gap-x-5'>
                                            <div className="font-bold rounded-3xl lg:p-10 justify-center mx-auto">
                                                <div className={`${parseInt(set3[0]) > parseInt(set3[1]) ? 'bg-red-700 text-white' : 'text-red-700'} text-xl sm:text-2xl lg:text-5xl xl:text-5xl   rounded-lg p-1 grid place-items-center py-auto w-fit align-middle`}>{ set3[0] }</div>   
                                            </div>
                                            <div className="lg:text-xl text-md text-white font-bold rounded-3xl grid place-items-center ">
                                                <div>- 3 -</div>
                                            </div>
                                            <div className="font-bold rounded-3xl lg:p-10 justify-center mx-auto">
                                                <div className={`${parseInt(set3[1]) > parseInt(set3[0]) ? 'bg-red-700 text-white' : 'text-red-700'} text-xl sm:text-2xl lg:text-5xl xl:text-5xl   rounded-lg p-1 grid place-items-center py-auto w-fit align-middle`}>{ set3[1] }</div>
                                            </div>   
                                        </div>
                                        ) : ''}
                                        { set4 ? (
                                        <div className='grid grid-cols-3 md:gap-x-5'>
                                            <div className="font-bold rounded-3xl lg:p-10 justify-center mx-auto">
                                                <div className={`${parseInt(set4[0]) > parseInt(set4[1]) ? 'bg-red-700 text-white' : 'text-red-700'} text-xl sm:text-2xl lg:text-5xl xl:text-5xl   rounded-lg p-1 grid place-items-center py-auto w-fit align-middle`}>{ set4[0] }</div>   
                                            </div>
                                            <div className="lg:text-xl text-md text-white font-bold rounded-3xl grid place-items-center ">
                                                <div>- 4 -</div>
                                            </div>
                                            <div className="font-bold rounded-3xl lg:p-10 justify-center mx-auto">
                                                <div className={`${parseInt(set4[1]) > parseInt(set4[0]) ? 'bg-red-700 text-white' : 'text-red-700'} text-xl sm:text-2xl lg:text-5xl xl:text-5xl   rounded-lg p-1 grid place-items-center py-auto w-fit align-middle`}>{ set4[1] }</div>
                                            </div>   
                                        </div>
                                        ) : ''}
                                        { set5 ? (
                                        <div className='grid grid-cols-3 md:gap-x-5'>
                                            <div className="font-bold rounded-3xl lg:p-10 justify-center mx-auto">
                                                <div className={`${parseInt(set5[0]) > parseInt(set5[1]) ? 'bg-red-700 text-white' : 'text-red-700'} text-xl sm:text-2xl lg:text-5xl xl:text-5xl   rounded-lg p-1 grid place-items-center py-auto w-fit align-middle`}>{ set5[0] }</div>   
                                            </div>
                                            <div className="lg:text-xl text-md text-white font-bold rounded-3xl grid place-items-center ">
                                                <div>- 5 -</div>
                                            </div>
                                            <div className="font-bold rounded-3xl lg:p-10 justify-center mx-auto">
                                                <div className={`${parseInt(set5[1]) > parseInt(set5[0]) ? 'bg-red-700 text-white' : 'text-red-700'} text-xl sm:text-2xl lg:text-5xl xl:text-5xl   rounded-lg p-1 grid place-items-center py-auto w-fit align-middle`}>{ set5[1] }</div>
                                            </div>   
                                        </div>
                                        ) : ''}
                                        

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
                {/* <div className="lg:text-9xl md:text-4xl text-2xl font-bold rounded-3xl align-middle my-auto">VS <br/> <div className="text-[7px] mt-3 p-2 xl:text-xl md:text-[8px] xl:mt-3 justify-center mx-auto xl:w-56 w-14">
                        <p className="bg-gray-900 lg:rounded-2xl rounded-lg mt-1 md:mt-2">{props.set1}</p>
                        <p className="bg-gray-900 lg:rounded-2xl rounded-lg mt-1 md:mt-2">{props.set2}</p>
                        <p className="bg-gray-900 lg:rounded-2xl rounded-lg mt-1 md:mt-2">{props.set3}</p>
                        <p className="bg-gray-900 lg:rounded-2xl rounded-lg  mx-auto justify-center mt-1 md:mt-2">{props.set4}</p>
                        <p className="bg-gray-900 lg:rounded-2xl rounded-lg mt-1 md:mt-2">{props.set5}</p>
                    </div>
                </div> */}
                <div className="font-bold rounded-3xl lg:p-10 justify-center mx-auto">
                    <div className="bg-gray-900 text-[10px] xl:text-3xl md:text-lg xl:rounded-2xl rounded-lg p-1 md:p-2 lg:p-3 grid place-items-center py-auto xl:h-[95px] h-[70px] lg:h-[90px] xl:h-[110px] w-fit">{props.team2}</div>
                    <div className="md:text-3xl lg:text-5xl xl:text-7xl xl:mt-12 mt-3">{props.score2}</div>
                </div>         
            </div>      
    )
}