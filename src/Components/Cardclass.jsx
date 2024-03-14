import PropTypes from 'prop-types';

function ClassCard({ className, teacherName, creatorName, backgroundImage, creatorIcon }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={backgroundImage} alt="Class Background" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{className}</div>
        <p className="text-gray-700 text-base mb-2">Teacher: {teacherName}</p>
        <p className="text-gray-700 text-base mb-2">Creator: {creatorName}</p>
      </div>
      <div className="px-6 py-4">
        <img className="w-10 h-10 rounded-full" src={creatorIcon} alt="Creator Icon" />
      </div>
    </div>
  );
}

ClassCard.propTypes = {
  className: PropTypes.string.isRequired,
  teacherName: PropTypes.string.isRequired,
  creatorName: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  creatorIcon: PropTypes.string.isRequired,
};

export default ClassCard;
