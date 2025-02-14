import React, {Component} from 'react';
import methodRequests from '../data/LogData';
import {PieChart, Pie, Cell, Legend, Tooltip} from 'recharts';
import {generateComplementaryColors} from '@stephencweiss/generate-complementary-colors';
import rca, {pastel} from 'rainbow-colors-array';


const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
                  {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]

const data02 = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
                  {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
                  {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];


class LogList extends Component {
    render() {
      const colors = rca(data01.length, "hex", pastel).map(a => '#'+a.hex);
        return (
            <div>
              <PieChart width={800} height={400}>
                <Pie isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label>
                {
      data01.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index]}/>
      ))
    }
    </Pie>
 {/*                <Pie data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
  */}               <Tooltip/>
              </PieChart>

            </div>
          );
    }
}


export default LogList;