

const Banner = () => {
    return (
        <div className="shadow-xl text-[#7c8db0]">
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
            <div>
                <input type="text" placeholder="From  " className="input input-bordered h-[72px] " />
                <input type="text" placeholder="Type here" className="input input-bordered  " />
                <input type="text" placeholder="Type here" className="input input-bordered  " />
                <input type="text" placeholder="Type here" className="input input-bordered  " />



            </div>

        </div>
    );
};

export default Banner;