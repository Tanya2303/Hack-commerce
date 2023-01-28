import { useState } from 'react';
import DonateImg1 from "../assets/cloth1.jpg"
import DonateImg2 from "../assets/cloths2.jpg"
import DonateImg3 from "../assets/toy1.webp"
import DonateImg4 from "../assets/toy2.jpeg"
import DonateImg5 from "../assets/toy3.jpeg"
import DonateImg6 from "../assets/toy4.jpeg"
import { HiX } from "react-icons/hi"

export default function Donate() {

    const [showDonateDetails, setShowDonateDetails] = useState(false);

    return (
        <div>
            <div className='text-center text-6xl font-base text-white'>Items to Donate</div>

            <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 space-x-4" >

                <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                    <div class="overflow-x-hidden rounded-2xl relative">
                        <img class="h-40 rounded-2xl w-full object-cover" src={DonateImg1} />
                    </div>
                    <div className='grid place-items-center'>
                        <button type="submit" onClick={() => setShowDonateDetails(true)} class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Contact Owner</button>
                        {showDonateDetails ? (
                            <div>
                                <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none items-center justify-center w-screen">
                                    <div className="relative my-6 mx-auto w-screen">
                                        <div className="ml-[25rem] border-0 rounded-xl  shadow-lg relative flex flex-col w-128 bg-primary outline-none focus:outline-none ">
                                            <div className="flex items-start justify-between p-5 border-solid rounded-t">
                                                <div>
                                                    <div className="text-2xl font-base tracking-wide cursor-pointer text-white">
                                                        Owner Details
                                                    </div>
                                                </div>

                                                <button
                                                    className="absolute right-6"
                                                    onClick={() => setShowDonateDetails(false)}
                                                    aria-hidden="false"
                                                    aria-label="button"
                                                >
                                                    <HiX
                                                        className="h-7 w-7 text-white"
                                                        aria-hidden="false"
                                                    />
                                                </button>
                                            </div>

                                            <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4 text-white">
                                                <div className="py-2">Name: Smith</div>
                                                <div className="py-2">Email: smith@exa.com</div>
                                                <a href="mailto:smith@exa.com"><button className="bg-blue-600 text-white py-2 px-8 rounded-md ml-2">
                                                    Email user
                                                </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
                            </div>
                        ) : null}
                    </div>
                </div>

                <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                    <div class="overflow-x-hidden rounded-2xl relative">
                        <img class="h-40 rounded-2xl w-full object-cover" src={DonateImg2} />
                    </div>
                    <div className='grid place-items-center'>
                        <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Contact Owner</button>
                    </div>
                </div>

                <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                    <div class="overflow-x-hidden rounded-2xl relative">
                        <img class="h-40 rounded-2xl w-full object-cover" src={DonateImg3} />
                    </div>
                    <div className='grid place-items-center'>
                        <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Contact Owner</button>
                    </div>
                </div>

                <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                    <div class="overflow-x-hidden rounded-2xl relative">
                        <img class="h-40 rounded-2xl w-full object-cover" src={DonateImg4} />
                    </div>
                    <div className='grid place-items-center'>
                        <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Contact Owner</button>
                    </div>
                </div>

                <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                    <div class="overflow-x-hidden rounded-2xl relative">
                        <img class="h-40 rounded-2xl w-full object-cover" src={DonateImg5} />
                    </div>
                    <div className='grid place-items-center'>
                        <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Contact Owner</button>
                    </div>
                </div>

                <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                    <div class="overflow-x-hidden rounded-2xl relative">
                        <img class="h-40 rounded-2xl w-full object-cover" src={DonateImg6} />
                    </div>
                    <div className='grid place-items-center'>
                        <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Contact Owner</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
