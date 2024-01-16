import SecondSection from "../../SideBanner/SecondSection";
import SessionTime from "../../SideBanner/SessionTime";


const Sidebar = () => {
    return (
        <div className="relative">
            <div className="absolute  shadow-xl ">
                <SessionTime></SessionTime>
                <SecondSection></SecondSection>
            </div>

        </div>
    );
};

export default Sidebar;