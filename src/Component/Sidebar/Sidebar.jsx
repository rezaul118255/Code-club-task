import SecondSection from "../../SideBanner/SecondSection";
import SessionTime from "../../SideBanner/SessionTime";


const Sidebar = () => {
    return (
        <div className="relative">
            <div className="absolute  shadow-xl hidden lg:block ">
                <SessionTime></SessionTime>
                <SecondSection></SecondSection>
            </div>

        </div>
    );
};

export default Sidebar;