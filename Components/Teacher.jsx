import Sidebar from "../Components/NavbarUtama";
import Buttonandoverlay from "../Components/Buttonandoverlay";
const Teacher = () => {
  return (
    <div className="h-full lg:overflow-y-hidden">
      <div className="overflow-x-hidden">
        <Sidebar />
      </div>

      <div className="-mt-10 overflow-y-hidden">
        <div>
          <h1 className="mt-20 text-3xl ml-16 font-semibold hidden lg:block">Your Class</h1>
          <Buttonandoverlay />
        </div>

      </div>
    </div>
  );
};

export default Teacher;
