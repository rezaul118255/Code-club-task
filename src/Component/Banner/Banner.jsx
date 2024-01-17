import { useState } from "react";
import { CiSearch } from "react-icons/ci";

import { FaArrowRightArrowLeft, FaCheck } from "react-icons/fa6";

const Banner = () => {
    const [isInputFrom, setIsInputFrom] = useState(false);


    // const [isInputVisible, setIsInputVisible] = useState(false);

    const handleFrom = () => {
        setIsInputFrom(true);
    };

    const handleInputChange = (event) => {
        // Handle input value changes here
        console.log(event.target.value);
    };

    const handleBlur = () => {
        setIsInputFrom(false);
    };


    const [isInputTo, setIsInputTo] = useState(false);


    const handleTo = () => {
        setIsInputTo(true);
    };

    const handleInputTo = (event) => {
        // Handle input value changes here
        console.log(event.target.value);
    };

    const handleBlurTo = () => {
        setIsInputTo(false);
    };


    const [isInputDate, setIsInputDate] = useState(false);
    const handleDate = () => {
        setIsInputDate(true);
    };

    const handleInputDate = (event) => {
        // Handle input value changes here
        console.log(event.target.value);
    };

    const handleBlurDate = () => {
        setIsInputFrom(false);
    };



    // const [isInputTravel, setIsInputTravel] = useState(false);
    // const handleTravel = () => {
    //     setIsInputTravel(true);
    // };

    // const handleInputTravel = (event) => {
    //     // Handle input value changes here
    //     console.log(event.target.value);
    // };

    // const handleBlurTravel = () => {
    //     setIsInputFrom(false);
    // };











    return (
        <div className=" ">
            <div className="shadow-xl text-[#7c8db0] relative px-6 mt-6 pb-7  ">


                {/* 1st section */}
                <div className="flex gap-2">
                    <div className="flex gap-2 items-center">
                        <input type="radio" name="radio-8" className="radio radio-error h-[1em] w-[1em] " checked />
                        <h1 className="font-semibold">One Way</h1>

                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" name="radio-8" className="radio radio-error h-[1em] w-[1em] " checked />
                        <h1 className="font-semibold">Round Trip</h1>

                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" name="radio-8" className="radio radio-error h-[1em] w-[1em] " checked />
                        <h1 className="font-semibold">Multi City</h1>

                    </div>

                </div>
                <div className="relative hidden lg:block ">
                    <div className="rounded-full cursor-pointer mx-auto absolute border border-[#dee2e6] p-4 mt-[40px] ms-[252px] z-50 text-[#eb1933] ">
                        <div className="h-2 w-3">
                            <FaArrowRightArrowLeft />
                        </div>

                    </div>
                </div>



                {/* 2nd Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  py-4">
                    {/* Repeat this structure for each clickable div */}
                    <div
                        className="border rounded-xl mt-4 md:mt-0 border-[#dee2e6] hover:bg-[#bfdbfe] cursor-pointer relative" // Added 'relative' for positioning
                        onClick={handleFrom}
                    >
                        {/* Original content */}
                        <div className="px-4 py-2">
                            <h1>From</h1>
                            <h1 className="text-xl font-bold">Dhaka</h1>
                            <p className="text-sm">Hazrat shahjalal international Airport</p>
                        </div>

                        {isInputFrom && (
                            <div className="absolute left-0 right-0 p-2 flex gap-2">
                                <CiSearch className="h-6 w-6  text-red-600" />
                                <input onChange={handleInputChange}
                                    onBlur={handleBlur} type="text" placeholder="    type for the airport name" className="border-b-4 w-full max-w-xs" />



                            </div>
                        )}
                    </div>
                    <div
                        className="border rounded-xl mt-4 md:mt-0 border-[#dee2e6] hover:bg-[#bfdbfe]  cursor-pointer relative" // Added 'relative' for positioning
                        onClick={handleTo}
                    >
                        {/* Original content */}
                        <div className="px-10 py-2">
                            <h1>To</h1>
                            <h1 className="text-xl font-bold">Chittagong</h1>
                            <p className="text-sm">Shah Amanat international </p>
                        </div>

                        {isInputTo && (
                            <div className="absolute left-0 right-0 p-2 gap-2 flex">
                                <CiSearch className="h-6 w-6 text-red-600" />
                                <input onChange={handleInputTo}
                                    onBlur={handleBlurTo} type="text" placeholder="    type for the airport name" className="border-b-4 w-full max-w-xs" />


                            </div>
                        )}
                    </div>
                    <div
                        className="border rounded-xl mt-4 md:mt-0 border-[#dee2e6] ms-2 cursor-pointer relative" // Added 'relative' for positioning
                        onClick={handleDate}
                    >
                        <div className="flex">
                            <div className="px-4 py-2 border-r-2 hover:bg-[#bfdbfe] ">
                                <div className="flex gap-2">
                                    <h1>Departure</h1>
                                    <FaCheck></FaCheck>
                                </div>

                                <h1 className="text-xl font-bold">16 Jan 24</h1>
                                <p className="text-sm">Tuseday </p>
                            </div>
                            <div className="px-1 hover:bg-[#bfdbfe] ">
                                <div className="flex mt-2 gap-2">
                                    <h1>return</h1>
                                    <FaCheck></FaCheck>
                                </div>

                                <h1>Tap to book return</h1>



                            </div>

                        </div>
                        {/* Original content */}


                        {isInputDate && (
                            <div className="absolute left-0 right-0 p-2 flex">

                                <input onChange={handleInputDate}
                                    onBlur={handleBlurDate} type="date" className="border-b-4 w-full max-w-xs" />


                            </div>
                        )}
                    </div>
                    <div
                        className="border rounded-xl mt-4 md:mt-0 hover:bg-[#bfdbfe] ms-2  border-[#dee2e6] cursor-pointer relative" // Added 'relative' for positioning

                    >
                        {/* Original content */}
                        <div className="px-4 py-2">
                            <h1>Travels & Booking Class</h1>
                            <h1 className="text-xl font-bold">1 traveler</h1>
                            <p className="text-sm">Economy </p>
                        </div>




                    </div>

                </div>
                {/* 3rd Section */}
                <div className="flex gap-4 py-1">
                    <div className="mt-2">
                        <h1 className="font-bold">Fare Type:</h1>

                    </div>
                    <div className="items-center px-4 py-2 bg-[#fff4f6] rounded-md">
                        <input type="radio" name="radio-8" className="radio p-2  radio-error h-[1em] w-[1em] " checked /> <span className="mb-2">Regular Fares</span>
                    </div>
                    <div className="px-4 py-2 bg-[#fff4f6]">
                        <input type="radio" name="radio-8" className="radio p-2 radio-error h-[1em] w-[1em] " checked /> <span>Seaman Fares</span>

                    </div>
                </div>


                {/* buttton section */}


                <div className="  ms-[480px] z-0 absolute hidden lg:block  ">
                    <button className="bg-[#eb1933] font-bold   hover:bg-white text-white hover:text-[#eb1933] px-6 py-3 border-solid border-[1px] border-[#eb1933] rounded-lg">Modify Search</button>

                </div>



            </div>

        </div>


    );
};

export default Banner;



