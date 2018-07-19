import React from 'react'
import { ProgressCircle }  from 'react-native-svg-charts'

export default class PollenProgressCircle extends React.PureComponent {

    render() {

        return (
            <ProgressCircle
                style={ { height: 100 } }
                progress={ 4/5 }
                progressColor={'#7d31e9'}
                strokeWidth={ 8 }
                backgroundColor={'none'}
            />
        )
    }

}
