import PropTypes from 'prop-types';

export const Box = ({value, onClick}) => {
  return (
    <div 
      className={`w-20 h-20 flex items-center justify-center bg-white border-2 border-gray-800 text-5xl font-bold rounded-2xl ${value === 'X' ? 'text-red-700' : 'text-green-700' }`} 
      onClick={onClick} 
    >
        {value}
    </div>
  )
}

Box.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
}