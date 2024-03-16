import { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from "../Components/NavbarUtama";
import Accountimage from "../assets/img/Account.jpg";

const Accountteachercomponent = () => {
  const [showComment, setShowComment] = useState(false);
  const [blockComment, setBlockComment] = useState(false);
  const [requestAdmission, setRequestAdmission] = useState(false);
  const [rateStudent, setRateStudent] = useState(false);

  return (
    <div className="font-Jakarta">
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Your Profile</h1>
        <div className="px-4 mt-5">
          <div className="border-2 border-solid border-neutral-300 rounded-lg p-7 flex">
            <img className="w-16 h-16 rounded-full ml-4" src={Accountimage} alt="Account" />
            <h1 className="text-base font-semibold mt-6 ml-5">Robert Richard</h1>
          </div>
        </div>
        <div className="flex gap-6 ml-4 mt-3">
          <button className="text-sm text-indigo-600 font-semibold">Switch Account</button>
          <button className="text-sm text-red-500 font-semibold">Log Out</button>
        </div>
        <div className="ml-4 mt-10">
          <p className="text-base font-semibold">Type</p>
          <p className="text-xs font-semibold text-neutral-400 mt-3">Teacher</p>
          <div className="max-w-md mx-auto rounded-md mt-5">
            <div className="mb-4 mt-7">
              <label htmlFor="school" className="block text-sm font-semibold mb-1">
                School
              </label>
              <input type="text" id="school" name="school" className="w-full border-gray-300 rounded-md px-5 py-3 bg-neutral-200 focus:outline-none text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-semibold mb-1">
                Subject
              </label>
              <input placeholder="Optional" type="text" id="subject" name="subject" className="w-full border-gray-300 rounded-md px-5 py-3 bg-neutral-200 focus:outline-none text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="teacher" className="block text-sm font-semibold mb-1">
                Teacher
              </label>
              <input placeholder="Optional" type="text" id="teacher" name="teacher" className="w-full border-gray-300 rounded-md px-5 py-3 bg-neutral-200 focus:outline-none text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="bio" className="block text-sm font-semibold mb-1">
                Bio
              </label>
              <textarea placeholder="Enter your bio..." id="bio" name="bio" rows="4" className="w-full border-gray-300 rounded-md px-5 py-3 bg-neutral-200 focus:outline-none text-sm resize-none" />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-base font-semibold">Settings</p>
          <ul className="space-y-2">
            <SwitchButton label="Show Comment" checked={showComment} setChecked={setShowComment} />
            <SwitchButton label="Block Comment" checked={blockComment} setChecked={setBlockComment} />
            <SwitchButton label="Request for Class Admission" checked={requestAdmission} setChecked={setRequestAdmission} />
            <SwitchButton label="Rate Student" checked={rateStudent} setChecked={setRateStudent} />
          </ul>
        </div>
      </div>
    </div>
  );
};

const SwitchButton = ({ label, checked, setChecked }) => {
  const toggleSwitch = () => {
    setChecked(!checked);
  };

  return (
    <li className="flex items-center justify-between rounded-md px-4 py-2 mt-5">
      <span className='text-sm font-semibold'>{label}</span>
      <div
        className={`switch w-10 h-6 rounded-full ${checked ? 'bg-indigo-600' : 'bg-gray-300'} transition-all duration-300`}
        onClick={toggleSwitch}
      >
        <div className={`slider w-4 h-4 mt-[0.25rem] ml-1 rounded-full ${checked ? 'transform translate-x-full bg-white' : 'bg-white'} transition-all duration-300`} />
      </div>
    </li>
  );
};

SwitchButton.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  setChecked: PropTypes.func.isRequired,
};

export default Accountteachercomponent;
