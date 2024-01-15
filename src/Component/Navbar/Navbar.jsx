

const Navbar = () => {
    return (
        <div className="flex  justify-between p-4">
            <div >
                <img className="h-[45px] w-200px" src="https://flightexpert.com/_next/static/media/fe-logo.712b9c71.svg" alt="" />
            </div>
            <div >

                <button className="bg-[#eb1933] hover:bg-white text-white hover:text-[#eb1933] h-[48px] w-[89px] border-solid border-[1px] border-[#eb1933] rounded-lg">Sign In</button>


            </div>
        </div>
    );
};

export default Navbar;