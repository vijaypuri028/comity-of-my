import { PieChart, pieArcLabelClasses } from '@mui/x-charts'
import { navyLogoColor } from '../../Common/constants'

const Chart = ({ data, width, height, innerRadius, cx, isHidden }) => {
    
  return (
    <PieChart
        series={[
            {
                data: data,
                innerRadius: innerRadius,
                paddingAngle: 1,
                cornerRadius: 5,
                cx: cx || '50%',
                // startAngle: -25,
                color: data.color,
                arcLabel: item => `${item.label}`,
                highlightScope: {
                    fade: 'global',
                    highlight: 'item',
                },
                faded: {
                    innerRadius: innerRadius+10,
                    additionalRadius: -10,
                    color: navyLogoColor,
                },
            },
        ]}
        slotProps={{
            legend: {
                hidden: isHidden || true,
            }
        }}
        sx={{
            [`& .${pieArcLabelClasses.root}`]: {
                fill: 'white',
                fontSize: '0.85rem'
            },
            // border: '1px solid red'
        }}
        width={width}
        height={height}
    />
  )
}

export default Chart