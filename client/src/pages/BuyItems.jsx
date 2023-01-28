import React from 'react'
import Item1 from "../assets/book1.webp"
import Item2 from "../assets/bottle1.jpeg"
import Item3 from "../assets/book2.jpg"
import Item4 from "../assets/bottle2.jpeg"
import Item5 from "../assets/chair1.jpeg"
import Item6 from "../assets/chair2.jpeg"
import Item7 from "../assets/chair3.jpeg"

export default function BuyItems() {
    return (
        <div>
            <div>
                <div className='text-center text-6xl font-base text-white'>Buy Items</div>

                <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 space-x-2" >

                    <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                        <div class="overflow-x-hidden rounded-2xl relative">
                            <img class="h-40 rounded-2xl w-full object-cover" src={Item1} />
                        </div>
                        <div class="mt-4 pl-2 mb-2 flex justify-between ">
                            <div>
                                <p class="text-lg font-semibold text-gray-900 mb-0">Books</p>
                                <p class="text-md text-gray-800 mt-0">Rs. 4445</p>
                            </div>
                            <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                        </div>
                        <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Buy Item</button>
                    </div>

                    <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                        <div class="overflow-x-hidden rounded-2xl relative">
                            <img class="h-40 rounded-2xl w-full object-cover" src={Item2} />
                        </div>
                        <div class="mt-4 pl-2 mb-2 flex justify-between ">
                            <div>
                                <p class="text-lg font-semibold text-gray-900 mb-0">Bottle</p>
                                <p class="text-md text-gray-800 mt-0">Rs. 445</p>
                            </div>
                            <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                        </div>
                        <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Buy Item</button>
                    </div>

                    <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                        <div class="overflow-x-hidden rounded-2xl relative">
                            <img class="h-40 rounded-2xl w-full object-cover" src={Item3} />
                        </div>
                        <div class="mt-4 pl-2 mb-2 flex justify-between ">
                            <div>
                                <p class="text-lg font-semibold text-gray-900 mb-0">Books</p>
                                <p class="text-md text-gray-800 mt-0">Rs. 445</p>
                            </div>
                            <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                        </div>
                        <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Buy Item</button>
                    </div>

                    <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                        <div class="overflow-x-hidden rounded-2xl relative">
                            <img class="h-40 rounded-2xl w-full object-cover" src={Item4} />
                        </div>
                        <div class="mt-4 pl-2 mb-2 flex justify-between ">
                            <div>
                                <p class="text-lg font-semibold text-gray-900 mb-0">Bottle</p>
                                <p class="text-md text-gray-800 mt-0">Rs. 55</p>
                            </div>
                            <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                        </div>
                        <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Buy Item</button>
                    </div>

                    <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                        <div class="overflow-x-hidden rounded-2xl relative">
                            <img class="h-40 rounded-2xl w-full object-cover" src={Item5} />
                        </div>
                        <div class="mt-4 pl-2 mb-2 flex justify-between ">
                            <div>
                                <p class="text-lg font-semibold text-gray-900 mb-0">Chair</p>
                                <p class="text-md text-gray-800 mt-0">Rs. 6666</p>
                            </div>
                            <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                        </div>
                        <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Buy Item</button>
                    </div>

                    <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                        <div class="overflow-x-hidden rounded-2xl relative">
                            <img class="h-40 rounded-2xl w-full object-cover" src={Item6} />
                        </div>
                        <div class="mt-4 pl-2 mb-2 flex justify-between ">
                            <div>
                                <p class="text-lg font-semibold text-gray-900 mb-0">Chair</p>
                                <p class="text-md text-gray-800 mt-0">Rs. 8999</p>
                            </div>
                            <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                        </div>
                        <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Buy Item</button>
                    </div>

                    <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                        <div class="overflow-x-hidden rounded-2xl relative">
                            <img class="h-40 rounded-2xl w-full object-cover" src={Item7} />
                        </div>
                        <div class="mt-4 pl-2 mb-2 flex justify-between ">
                            <div>
                                <p class="text-lg font-semibold text-gray-900 mb-0">Chair</p>
                                <p class="text-md text-gray-800 mt-0">Rs. 8889</p>
                            </div>
                            <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                        </div>
                        <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Buy Item</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
