import { FiSunrise } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";

const SessionTime = () => {
    return (
        <div className="">
            <div className=" py-6 ">
                {/* Session Time out section */}
                <h1 className="text-black text-[18px] font-medium text-center"> Session Timeout in</h1>
                <div className="flex justify-center gap-5 p-6">
                    <div>
                        <div className="p-2 px-3 bg-[#eb1933] rounded-md  text-white">
                            <h1 className="text-white text-2xl">16</h1>
                        </div>
                        <div>
                            <h1 className="text-black text-center">min</h1>
                        </div>

                    </div>
                    <span className="text-[#eb1933] text-3xl"> :</span>
                    <div>
                        <div className="p-2 px-3 bg-[#eb1933] rounded-md  text-white">
                            <h1 className="text-white text-2xl">56</h1>
                        </div>
                        <div>
                            <h1 className="text-black text-center">sec</h1>
                        </div>

                    </div>


                </div>

                {/* oneway price seciton */}
                <div className="border-t-2 border-[#dee2e6] px-5">
                    <div className=" py-4 mt-2  ">
                        <h1 className="text-[#212529] text-[18px]  "> One Way Price</h1>
                    </div>
                    <div className="">
                        <input type="range" min={0} max="100" value="98" className="w-72" />
                    </div>

                    <h1 className="text-[#212529] text-[16px] font-semibold mt-2  "> 3,240 tk 7,314 tk</h1>

                </div>
                <div className="border-t-2 mt-4 border-[#dee2e6] px-5 py-5">
                    <h1 className="text-[#212529] text-[17px] font-semibold mt-3  "> Departure time in Dhaka</h1>
                    <div className="flex justify-around mt-4">
                        <div className="border-2 border-black text-black hover:bg-[#eb1933] rounded-lg">

                            <div className="text-center text-[12px] py-4 px-2">
                                <div className="ms-10">
                                    <MdOutlineWbSunny />
                                </div>

                                <h1 className="mt-2">After Noon</h1>
                                <h1 className="">12:00 - 17:59 (1)</h1>
                            </div>
                        </div>
                        <div className="border-2 border-black text-black hover:bg-[#eb1933] rounded-lg">

                            <div className="text-center  text-[12px] py-4 px-2 ">
                                <div className=" ms-10">
                                    <FiSunrise />
                                </div>

                                <h1 className="mt-2" >Evening</h1>
                                <h1>18:00 - 23:59 (8)</h1>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default SessionTime;