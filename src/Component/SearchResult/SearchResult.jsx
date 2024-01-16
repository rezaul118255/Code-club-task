import { MdPlayArrow } from "react-icons/md";
import { MdOutlineArrowLeft } from "react-icons/md";
import usBangla from '../../assets/us-bangla-airlines-logo.png'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const SearchResult = () => {
    return (
        <div className="top-0 w-11/12 ">

            <div className="flex justify-evenly px-5 me-5  items-center">
                <div className="text-8xl text-[#eb1933]">

                    <MdOutlineArrowLeft />
                </div>
                <div>
                    <h1 className="text-[32px] font-semibold text-center"> Flights from Dhaka to Chittagong</h1>
                </div>
                <div className="text-6xl text-[#eb1933]">

                    <MdPlayArrow />
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 shadow-xl ps-3 justify-items-start  text-[#7c8db0]">
                <div className=" border-r-2 p-4 py-4 hover:bg-gray-200 border-[#dee2e6] ">
                    <h1 className="text-xl font-bold">Cheapest</h1>
                    <p className="text-sm">To get the chepest available flite</p>
                </div>
                <div className="p-4 ms-3 py-3  hover:bg-gray-200">
                    <h1 className="text-xl font-bold">shortest</h1>
                    <p className="text-sm">To get the Shortest available flite</p>

                </div>

            </div>

            <div className="shadow-xl mt-6">

                <div className="flex justify-between text-black">
                    <div className="p-4">
                        <img className="h-16 w-20 " src={usBangla} alt="" />
                        <h1 className="text-[#7c8db0] text-sm mt-4">US Bangla Airlines</h1>
                    </div>
                    <div className="p-4">
                        <h1 className="text-[#7c8db0]">Depart</h1>
                        <h1>20:00</h1>
                        <h1>Tue, 16 Jan 2024</h1>
                        <h1>Dhaka (DAC)</h1>
                    </div>
                    <div className="p-4">
                        <h1 className="text-[#7c8db0] text-sm ">
                            55 minutes
                        </h1>
                        <div className="text-[#eb1933] w-16">
                            <LiaLongArrowAltRightSolid />
                        </div>
                        <div>
                            <p>Non Stop</p>
                        </div>

                    </div>
                    <div className="p-4">
                        <h1 className="text-[#7c8db0] text-sm ">
                            Arrive
                        </h1>
                        <h1>21:35</h1>
                        <h1>Tue, 16 Jan 2024</h1>
                        <h1 className="mt-3"> Chittagong (CGP)</h1>

                    </div>

                </div>
                <div className="flex  p-4 justify-between">
                    <div>
                        <h1 className="text-[#7c8db0]">Price</h1>
                        <h1>BDT 4,139</h1>
                        <h1 className="text-sm text-[#008000]">Partially Refundable</h1>
                    </div>
                    <div>
                        <button className="bg-[#eb1933] hover:bg-white text-white hover:text-[#eb1933] h-[48px] w-[89px] border-solid border-[1px] border-[#eb1933] rounded-lg">Book Now</button>
                        <h1 className="text-[#eb1933]">Flight Details</h1>


                    </div>

                </div>

            </div>


            {/* second Card */}
            <div className="shadow-xl mt-6">

                <div className="flex justify-between text-black">
                    <div className="p-4">
                        <img className="h-16 w-20 " src={usBangla} alt="" />
                        <h1 className="text-[#7c8db0] text-sm mt-4">US Bangla Airlines</h1>
                    </div>
                    <div className="p-4">
                        <h1 className="text-[#7c8db0]">Depart</h1>
                        <h1>20:00</h1>
                        <h1>Tue, 16 Jan 2024</h1>
                        <h1>Dhaka (DAC)</h1>
                    </div>
                    <div className="p-4">
                        <h1 className="text-[#7c8db0] text-sm ">
                            55 minutes
                        </h1>
                        <div className="text-[#eb1933] w-16">
                            <LiaLongArrowAltRightSolid />
                        </div>
                        <div>
                            <p>Non Stop</p>
                        </div>

                    </div>
                    <div className="p-4">
                        <h1 className="text-[#7c8db0] text-sm ">
                            Arrive
                        </h1>
                        <h1>21:35</h1>
                        <h1>Tue, 16 Jan 2024</h1>
                        <h1 className="mt-3"> Chittagong (CGP)</h1>

                    </div>

                </div>
                <div className="flex  p-4 justify-between">
                    <div>
                        <h1 className="text-[#7c8db0]">Price</h1>
                        <h1>BDT 4,139</h1>
                        <h1 className="text-sm text-[#008000]">Partially Refundable</h1>
                    </div>
                    <div>
                        <button className="bg-[#eb1933] hover:bg-white text-white hover:text-[#eb1933] h-[48px] w-[89px] border-solid border-[1px] border-[#eb1933] rounded-lg">Book Now</button>
                        <h1 className="text-[#eb1933]">Flight Details</h1>


                    </div>

                </div>

            </div>

            {/* Third Card */}
            <div className="shadow-xl mt-6">

                <div className="flex justify-between text-black">
                    <div className="p-4">
                        <img className="h-16 w-20 " src={usBangla} alt="" />
                        <h1 className="text-[#7c8db0] text-sm mt-4">US Bangla Airlines</h1>
                    </div>
                    <div className="p-4">
                        <h1 className="text-[#7c8db0]">Depart</h1>
                        <h1>20:00</h1>
                        <h1>Tue, 16 Jan 2024</h1>
                        <h1>Dhaka (DAC)</h1>
                    </div>
                    <div className="p-4">
                        <h1 className="text-[#7c8db0] text-sm ">
                            55 minutes
                        </h1>
                        <div className="text-[#eb1933] w-16">
                            <LiaLongArrowAltRightSolid />
                        </div>
                        <div>
                            <p>Non Stop</p>
                        </div>

                    </div>
                    <div className="p-4">
                        <h1 className="text-[#7c8db0] text-sm ">
                            Arrive
                        </h1>
                        <h1>21:35</h1>
                        <h1>Tue, 16 Jan 2024</h1>
                        <h1 className="mt-3"> Chittagong (CGP)</h1>

                    </div>

                </div>
                <div className="flex  p-4 justify-between">
                    <div>
                        <h1 className="text-[#7c8db0]">Price</h1>
                        <h1>BDT 4,139</h1>
                        <h1 className="text-sm text-[#008000]">Partially Refundable</h1>
                    </div>
                    <div>
                        <button className="bg-[#eb1933] hover:bg-white text-white hover:text-[#eb1933] h-[48px] w-[89px] border-solid border-[1px] border-[#eb1933] rounded-lg">Book Now</button>
                        <h1 className="text-[#eb1933]">Flight Details</h1>


                    </div>

                </div>

            </div>
            {/* Four Card */}

            <div className="shadow-xl mt-6">

                <div className="flex justify-between text-black">
                    <div className="p-4">
                        <img className="h-16 w-20 " src={usBangla} alt="" />
                        <h1 className="text-[#7c8db0] text-sm mt-4">US Bangla Airlines</h1>
                    </div>
                    <div className="p-4">
                        <h1 className="text-[#7c8db0]">Depart</h1>
                        <h1>20:00</h1>
                        <h1>Tue, 16 Jan 2024</h1>
                        <h1>Dhaka (DAC)</h1>
                    </div>
                    <div className="p-4">
                        <h1 className="text-[#7c8db0] text-sm ">
                            55 minutes
                        </h1>
                        <div className="text-[#eb1933] w-16">
                            <LiaLongArrowAltRightSolid />
                        </div>
                        <div>
                            <p>Non Stop</p>
                        </div>

                    </div>
                    <div className="p-4">
                        <h1 className="text-[#7c8db0] text-sm ">
                            Arrive
                        </h1>
                        <h1>21:35</h1>
                        <h1>Tue, 16 Jan 2024</h1>
                        <h1 className="mt-3"> Chittagong (CGP)</h1>

                    </div>

                </div>
                <div className="flex  p-4 justify-between">
                    <div>
                        <h1 className="text-[#7c8db0]">Price</h1>
                        <h1>BDT 4,139</h1>
                        <h1 className="text-sm text-[#008000]">Partially Refundable</h1>
                    </div>
                    <div>
                        <button className="bg-[#eb1933] hover:bg-white text-white hover:text-[#eb1933] h-[48px] w-[89px] border-solid border-[1px] border-[#eb1933] rounded-lg">Book Now</button>
                        <h1 className="text-[#eb1933]">Flight Details</h1>


                    </div>

                </div>

            </div>
            {/* Fifth Card */}






        </div>
    );
};

export default SearchResult;