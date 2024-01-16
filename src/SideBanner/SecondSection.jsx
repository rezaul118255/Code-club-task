
import "./SideBanner.css";

const SecondSection = () => {



    return (
        <div className="px-5 text-[#52556f]">
            <div className="border-t-2 border-[#dee2e6]">
                <h1 className="text-[#212529] text-[20px] mt-3"> Stops From Dhaka</h1>
            </div>
            <div className="flex justify-between py-4">
                <div className=" flex">
                    <div className="mt-1">
                        <label className="container ">
                            <input className="border  " type="checkbox" />
                            <span className="checkmark border rounded-sm border-black"></span>
                        </label>

                    </div>
                    <div className="ms-6">
                        <h1>Non Stop (8)</h1>
                    </div>


                </div>
                <div>
                    <h1>BDT 3,240</h1>
                </div>


            </div>
            {/* Check in Baggage Allowance */}
            <div className="border-t-2 border-[#dee2e6]">
                <h1 className="text-[#212529] text-[20px] mt-3"> Check in Baggage Allowance</h1>
            </div>
            <div className="flex justify-between py-4">
                <div className=" flex">
                    <div className="mt-1">
                        <label className="container ">
                            <input className="border  " type="checkbox" />
                            <span className="checkmark border rounded-sm border-black"></span>
                        </label>

                    </div>
                    <div className="ms-6">
                        <h1>20 KG (8)</h1>
                    </div>


                </div>
            </div>
            {/* Refundable section */}

            <div className="border-t-2 border-[#dee2e6]">
                <h1 className="text-[#212529] text-[20px] mt-3">Refundable
                </h1>
            </div>
            <div className="flex justify-between py-4">
                <div className=" flex">
                    <div className="mt-1">
                        <label className="container ">
                            <input className="border  " type="checkbox" />
                            <span className="checkmark border rounded-sm border-black"></span>
                        </label>

                    </div>
                    <div className="ms-6">
                        <h1>Partially Refundable (8)</h1>
                    </div>


                </div>
            </div>
            {/* Departing from */}
            <div className="border-t-2 border-[#dee2e6] flex justify-between ">
                <div>
                    <h1 className="text-[#212529] text-[20px] mt-3"> Departing from
                    </h1>
                </div>
                <div>
                    <h1 className="text-[#212529] text-[20px] mt-3"> Arriving at
                    </h1>
                </div>
            </div>
            <div className="flex justify-between py-4">
                <div className=" flex">
                    <div className="mt-1">
                        <label className="container ">
                            <input className="border  " type="checkbox" />
                            <span className="checkmark border rounded-sm border-black"></span>
                        </label>

                    </div>
                    <div className="ms-6">
                        <h1>DAC</h1>
                    </div>
                </div>

                <div className=" flex">
                    <div className="mt-1">
                        <label className="container ">
                            <input className="border  " type="checkbox" />
                            <span className="checkmark border rounded-sm border-black"></span>
                        </label>

                    </div>
                    <div className="ms-6">
                        <h1>CGP</h1>
                    </div>
                </div>
            </div>
            {/* Airlines */}


            <div className="border-t-2 border-[#dee2e6]">
                <h1 className="text-[#212529] text-[20px] mt-5"> Airlines</h1>
            </div>
            <div className="flex justify-between py-1 mt-2">
                <div className=" flex">
                    <div className="mt-1">
                        <label className="container ">
                            <input className="border  " type="checkbox" />
                            <span className="checkmark border rounded-sm border-black"></span>
                        </label>

                    </div>
                    <div className="ms-6">
                        <h1>Biman Bangladesh Airlines</h1>
                    </div>


                </div>
                <div>
                    <h1>BDT 3,240</h1>
                </div>




            </div>
            {/* second Line linn */}

            <div className="flex justify-between py-1">
                <div className=" flex">
                    <div className="mt-1">
                        <label className="container ">
                            <input className="border  " type="checkbox" />
                            <span className="checkmark border rounded-sm border-black"></span>
                        </label>

                    </div>
                    <div className="ms-6">
                        <h1>US Bangla Airlines</h1>
                    </div>
                </div>
                <div>
                    <h1>BDT 3,954</h1>
                </div>
            </div>
            {/* Third Line */}
            <div className="flex justify-between py-1">
                <div className=" flex">
                    <div className="mt-1">
                        <label className="container ">
                            <input className="border  " type="checkbox" />
                            <span className="checkmark border rounded-sm border-black"></span>
                        </label>

                    </div>
                    <div className="ms-6">
                        <h1>Air Astra</h1>
                    </div>
                </div>
                <div>
                    <h1>BDT 3,954</h1>
                </div>
            </div>
            {/* Forth Line */}
            <div className="flex justify-between py-1">
                <div className=" flex">
                    <div className="mt-1">
                        <label className="container ">
                            <input className="border  " type="checkbox" />
                            <span className="checkmark border rounded-sm border-black"></span>
                        </label>

                    </div>
                    <div className="ms-6">
                        <h1>Novo Air</h1>
                    </div>
                </div>
                <div>
                    <h1>BDT 4,139</h1>
                </div>
            </div>


            <div className="border-t-2 border-[#dee2e6]">
                <h1 className="text-[#212529] text-[18px] mt-5"> Transit Time in (Dhaka - Chittagong)</h1>
            </div>
            <div className="flex justify-between py-4">
                <div className=" flex">
                    <div className="mt-1">
                        <label className="container ">
                            <input className="border  " type="checkbox" />
                            <span className="checkmark border rounded-sm border-black"></span>
                        </label>

                    </div>
                    <div className="ms-6">
                        <h1>No Transit Time (8)</h1>
                    </div>


                </div>




            </div>


            {/* button */}
            <div className="py-5">
                <button className="text-red-600 hover:text-white rounded-xl py-3 text-xl font-medium  w-full hover:bg-red-600 border border-red-600"> Clear Filters</button>

            </div>






        </div>
    );
};

export default SecondSection;