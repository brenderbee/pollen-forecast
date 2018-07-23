import React from 'react';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts';
import { View } from 'react-native';
import { LinearGradient } from 'expo';

export default class HistoryChart extends React.PureComponent {

    render() {

        let data = [ 5, 2, 3, 3, 4, 4, null ];

        const contentInset = { top: 20, bottom: 20 }

        return (
          <View style={{ height: 200, flexDirection: 'row', borderWidth: 1 }}>
              <YAxis
                data={ data }
                contentInset={ contentInset }
                svg={{
                    fill: 'rgba(115, 63, 224, 0.5)',
                    fontSize: 10,
                }}
                numberOfTicks={ 3 }
                formatLabel={ (value) => `${value}` }
              />
              <LineChart
                style={{ flex: 1, marginLeft: 20, marginRight: 20 }}
                data={ data }
                svg={{ stroke: '#7d31e9', strokeWidth: 3, strokeLinecap: 'round' }}
                contentInset={ contentInset }
              >
                <Grid/>
              </LineChart>
          </View>
        );
    }

}
