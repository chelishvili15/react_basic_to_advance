import PropTypes from 'prop-types';

export const Scores = ({xScore, oScore, isActiveX = false}) => {
  const style = 'w-1/2 flex items-center justify-center p-3 my-5 rounded-lg border-b-4 border-r-4 bg-white'

  return (
    <div className='flex w-full gap-2'>
      <div className={`${style} ${isActiveX && 'border-red-700'}`}> {xScore}</div>
      <div className={`${style} ${!isActiveX && 'border-green-700'}`}> {oScore}</div>
    </div>
  )
}

Scores.propTypes = {
  xScore: PropTypes.number,
  oScore: PropTypes.number,
  isActiveX: PropTypes.bool
}