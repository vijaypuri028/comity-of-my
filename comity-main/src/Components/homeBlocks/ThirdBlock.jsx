import { Box } from '@mui/material'
import { cards } from '../../Common/cardBlocks'
import CardBox from '../utils/CardBox'

const gridTempleteCol = (arr) => {
  if(arr.length % 3 === 0)
    return '1fr 1fr 1fr';
  else if (arr.length === 2)
    return '1fr 1fr'
  else if(arr.length % 2 === 0)
    return '1fr 1fr 1fr 1fr';
}

const ThirdBlock = () => {
  return (
    <Box sx={{
      width: '100%',
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        sm: '1fr 1fr',
        md: gridTempleteCol(cards)
      },
      gap: 1,
      justifyContent: 'center',
      p: 1,
      paddingBlock: {
        xs: 1,
        sm: 5,
        md: 10
    },
    }} >
      {
        cards?.map((card, index) => 
          <CardBox key={index} card={card} />
        )
      }
    </Box>
  )
}

export default ThirdBlock