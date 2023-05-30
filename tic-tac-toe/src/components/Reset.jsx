import PropTypes from 'prop-types';

export const Reset = ({onClick}) => {
  return (
    <button className='bg-cyan-600 w-full my-3 p-5 rounded-2xl text-white text-2xl font-bold hover:bg-cyan-700' onClick={onClick} >Reset</button>
  )
}

Reset.propTypes = {
  onClick: PropTypes.func
}