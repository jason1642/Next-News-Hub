import * as React from 'react';
import CardContainer from './CardContainer';
import { GaugeMeter } from 'react-dashboard-meter';
import AirIcon from '@mui/icons-material/Air';


interface IWindCardProps {

    value: number; 
}

const WindCard: React.FunctionComponent<IWindCardProps> = ({ value }) => {
    console.log(value)
    return (
        <CardContainer Icon={AirIcon} title={'Wind'}>
                   <GaugeMeter
                   progressBarOptions={{fillerTriColors: '#60a5fa', emptyAreaColor: '#d1e6ff'}}
                   labelOptions={{labelStyles: {fontSize: '.75rem'}}}
                   
                   titleOptions={
                    {
                        valueTextStyles: {fontSize: '1.3rem', marginRight: '3px'},
                         appendedTextStyles: {fontSize: '1rem'},
                         appendedText: 'Mph'
                    }
                    }
                value={value}
                range={[0,40]}
               
            />

        </CardContainer>
    );
};

export default WindCard;
