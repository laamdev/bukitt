import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedAreaSeries,
  Tooltip,
  XYChart,
} from '@visx/xychart';
import { LinearGradient } from '@visx/gradient';

import ParentSize from '@visx/responsive/lib/components/ParentSize';

const accessors = {
  xAccessor: (d) => d.x,
  yAccessor: (d) => d.y,
};

const tickLabelXProps = (tickValue, tickIndex) => ({
  textAnchor: 'start',
  angle: -45,
  fill: '#2f7e84',
  fontSize: 12,
  // // dy: tickIndex % 2 === 0 ? '-0.5em' : '0.5em',
  dy: '-0.5em',
});

const tickLabelYProps = (tickValue, tickIndex) => ({
  textAnchor: 'end',
  fill: '#2f7e84',
  fontSize: 12,
  dx: '1em',
});

const labelProps = {
  y: -50,
  fill: '#2f7e84',
  fontSize: 18,
  fontWeight: 'bold',
  strokeWidth: 0,
  stroke: '#fff',
  paintOrder: 'stroke',
  fontFamily: 'sans-serif',
  textAnchor: 'middle',
};

export default function ElevationChart({ data, className }) {
  const dataSize = data.length;
  const bandValues = data.map((elm) => elm.x);
  const linearValues = data.map((elm) => elm.y);
  return (
    <div className={`relative mx-auto h-[480px] w-[1440px]${className}`}>
      <ParentSize>
        {({ width, height }) => (
          <XYChart
            width={width}
            height={height}
            xScale={{
              type: 'band',
            }}
            yScale={{
              type: 'linear',
            }}
            margin={{ top: 150, right: 100, bottom: 50, left: 100 }}
          >
            <LinearGradient from="#2f7e84" to="#fff" id="gradient" />
            {/* --- Background --- */}
            <AnimatedGrid
              rows={false}
              lineStyle={{
                stroke: '#2f7e84',
                strokeLinecap: 'round',
                strokeWidth: 1,
              }}
              strokeDasharray="0, 4"
            />
            {/* X Axis */}
            <AnimatedAxis
              hideAxisLine
              hideTicks
              orientation="top"
              strokeWidth={1}
              stroke="#2f7e84"
              tickLabelProps={tickLabelXProps}
              numTicks={dataSize}
            />
            {/* Y Axis */}
            <AnimatedAxis
              hideAxisLine
              hideTicks
              numTicks={3}
              orientation="left"
              strokeWidth={1}
              stroke="#2f7e84"
              tickLabelProps={tickLabelYProps}
              label="Elevation (ft.)"
              labelProps={labelProps}
            />
            {/* Area (lines and fill) */}
            <AnimatedAreaSeries
              dataKey="Elevation"
              data={data}
              stroke="#2f7e84"
              style={{ fill: "url('#gradient')" }}
              fillOpacity={0.4}
              {...accessors}
            />
            <Tooltip
              snapTooltipToDatumX
              snapTooltipToDatumY
              showSeriesGlyphs
              showVerticalCrosshair
              verticalCrosshairStyle={{
                stroke: '#2f7e84',
                strokeWidth: 1,
              }}
              glyphStyle={{
                fill: '#2f7e84',
                strokeWidth: 1,
              }}
              renderTooltip={({ tooltipData, colorScale }) => (
                <div className="flex flex-col space-y-1 text-xs">
                  {/* <div
                    style={{
                      color: colorScale(tooltipData.nearestDatum.key),
                    }}
                  >
                    {tooltipData.nearestDatum.key}
                  </div> */}
                  <p className="text-brand">
                    {accessors.xAccessor(tooltipData.nearestDatum.datum)}
                  </p>
                  <p>
                    {accessors.yAccessor(tooltipData.nearestDatum.datum)} ft.
                  </p>
                </div>
              )}

              // // renderTooltip={({ tooltipData }) => {
              // //   return (
              // //     <div className="rounded-md py-2 px-4 text-lg text-gray-500">
              // //       {Object.entries(tooltipData).map((lineDataArray) => {
              // //         const [key, value] = lineDataArray;

              // //         return (
              // //           <div className="row" key={key}>
              // //             <div className="mb-2 text-lg font-semibold text-gray-700">
              // //               {accessors.xAccessor(value)}
              // //             </div>
              // //             {/* <div className="flex items-center font-normal text-black">
              // //               <div className="mr-2 inline-block h-3 w-3 rounded-md bg-brand text-brand" />
              // //               {accessors.yAccessor(value)}
              // //             </div> */}
              // //           </div>
              // //         );
              // //       })}
              // //     </div>
              // //   );
              // // }}
            />
          </XYChart>
        )}
      </ParentSize>
    </div>
  );
}
