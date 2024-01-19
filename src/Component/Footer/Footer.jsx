import logo from "../../assets/Airlogo.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import banks from "../../assets/bankss.jpg"
import basis from "../../assets/basis.png"
import certificate from "../../assets/2ndcerticicate.png"
import iata from "../../assets/iata.png"
import google from "../../assets/Google_2011_logo-600x206.png"
const Footer = () => {
    return (
        <div className="relative ">
            <div className=" absolute mt-6 md:mt-[1350px]">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 px-6">
                    <div className="text-[#eb1933] text-sm ">
                        <img src={logo} alt="" />
                        <h1 className="mt-2">Flight Expert Dhaka (Main branch)</h1>
                        <h1 className="mt-2">90/1 Motijheel City Centre Level 25-</h1>
                        <h1 className="mt-2">B-1, Lift 26 Dhaka 1000, Bangladesh</h1>
                        <div className="text-[#eb1933] text-2xl gap-4 justify-between flex mt-4 w-24 ">
                            <div>
                                <FaFacebook ></FaFacebook>
                            </div>
                            <div>
                                <FaInstagram />
                            </div>
                            <div>
                                <FaXTwitter />
                            </div>
                            <div>
                                <FaLinkedin />
                            </div>
                            <div>
                                <FaPinterest />
                            </div>
                        </div>

                    </div>
                    <div className="text-[#6e7491] text-md ms-4 px-4">
                        <h1 className="text-xl py-4">About</h1>
                        <h1 className="text-md mt-2 hover:text-[#eb1933]">About Flight Expert</h1>
                        <h1 className="text-md mt-2 hover:text-[#eb1933]">Best Price Guarantee</h1>
                        <h1 className="text-md mt-2 hover:text-[#eb1933]">Terms and Conditions</h1>
                        <h1 className="text-md mt-2 hover:text-[#eb1933]">Privacy Policy</h1>
                        <h1 className="text-md mt-2 hover:text-[#eb1933]">Cookie Policy</h1>
                        <h1 className="text-md mt-2 hover:text-[#eb1933]">Blog</h1>

                    </div>
                    <div>
                        <div className="text-[#6e7491] text-md ms-4 px-4">
                            <h1 className="text-xl py-4">Help</h1>
                            <h1 className="text-md mt-2 hover:text-[#eb1933]">FAQS</h1>
                            <h1 className="text-md mt-2 hover:text-[#eb1933]">Easy EMI</h1>
                            <h1 className="text-md mt-2 hover:text-[#eb1933]">Payment Methods</h1>
                            <h1 className="text-md mt-2 hover:text-[#eb1933]">Contact Us</h1>


                        </div>

                    </div>
                    <div>
                        <div className="text-[#6e7491] text-md ms-4 px-4">
                            <h1 className="text-xl py-4">Have Questions?</h1>
                            <h1 className="text-md mt-2 text-[#eb1933]">+88-09617-111-888</h1>
                            <h1 className="text-md mt-2 text-[#eb1933]">sales@flightexpert.com</h1>
                            <h1 className="text-m text-black mt-2 hover:text-[#eb1933]">Dedicated Customer</h1>
                            <h1 className="text-md text-black mt-2 hover:text-[#eb1933]">Support</h1>
                            <p className="text-sm  mt-2 hover:text-[#eb1933]">Sat-Thurs: 9AM-9PM <br />
                                Friday/Govt. Holidays: 10AM-6PM</p>



                        </div>

                    </div>
                    <div>
                        <div className="text-[#6e7491] text-md ms-4 px-4">
                            <h1 className="text-xl py-4">Have Questions?</h1>
                            <div >
                                <img className="h-[200px] w-[300px]" src={banks} alt="" />
                            </div>




                        </div>

                    </div>
                </div>

                <div className="mt-10 border-y-2 border-[#dee2e6] px-6">
                    <div className="text-[#6e7491] py-7 grid grid-cols-2 md:grid-cols-4 gap-6" >
                        <div>
                            <h1 className="text-xl  py-4">About</h1>
                            <img className="h-[60px] w-[150px]" src={basis} alt="" />


                        </div>
                        <div>
                            <h1 className="text-xl  py-4">Registered att</h1>
                            <img className="h-[60px] w-[150px]" src={certificate} alt="" />


                        </div>
                        <div>
                            <h1 className="text-xl  py-4">Authorised by</h1>
                            <img className="h-[60px] w-[150px]" src={iata} alt="" />


                        </div>
                        <div>
                            <h1 className="text-xl  py-4">Our Partners</h1>
                            <img className="h-[60px] w-[150px]" src={google} alt="" />


                        </div>

                    </div>

                </div>
                <div className="mt-8 mx-auto ms-0 md:ms-[400px] px-6 pb-10">
                    <h1 className="text-md mx-auto text-[#6e7491] font-semibold  py-4">Copyright @2024 Rezaul Karim.. All rights reserved by Flight Expert</h1>

                </div>

            </div>

        </div>
    );
};

export default Footer;