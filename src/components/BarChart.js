import React from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

class BarChart extends React.Component {
   componentDidMount() {
      this.createBarChart();
   }
   componentDidUpdate() {
      this.createBarChart();
   }

   // Traditional DOM manipulation with D3. We're using Babel which allows us to drop the contructor function.
   createBarChart = () => {
      const mySvg = this.mySvg
      const dataMax = max(this.props.data); // Passed in from app.
      const yScale = scaleLinear()
         .domain([0, dataMax])
         .range([0, this.props.size[1]]) // Passed in w/ our app.
      select(mySvg)
         .selectAll('rect')
         .data(this.props.data)
         .enter()
         .append('rect')
      select(mySvg)
         .selectAll('rect')
         .data(this.props.data)
         .exit()
         .remove()
      select(mySvg)
         .selectAll('rect')
         .data(this.props.data)
         .style('fill', '#fe9922')
         .style('stroke', 'black')
         .attr('x', (d,i) => i * 25)
         .attr('y', (d) => this.props.size[1] - yScale(d))
         .attr('height', d => yScale(d))
         .attr('width', 25)
   }

// Render is just returning an SVG element waiting for your D3 code.
render() {
      return <svg width={500} height={500}
         ref={mySvg => this.mySvg = mySvg}
      >
      </svg>
   }
}
export default BarChart