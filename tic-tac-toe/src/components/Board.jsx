import PropTypes from 'prop-types';
import { Box } from "./Box";

export const Board = ({board, onClick}) => {
  return (
    <div className='grid grid-cols-3'>
      {
        board.map((val, index) => {
          return <Box value={val} key={index} onClick={() => onClick(index)} />
        })  
      }
    </div>
  )
}

Board.propTypes = {
  board: PropTypes.array,
  onClick: PropTypes.func
}