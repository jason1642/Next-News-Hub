import * as React from 'react';

interface ICardContainerProps {
    title: string;
    children: React.ReactNode;
    Icon?: any;
}

const CardContainer: React.FunctionComponent<ICardContainerProps> = ({ title, children, Icon }) => {
    return (
        <div
            className='
     flex flex-col 
     overflow-hidden w-[30%] bg-white 
     rounded-xl justify-around py-5 items-center
     '>
            {/* Header Row */}
            <div className='px-3 w-full flex top-[0%]  justify-between'>
                <div className='pt-1 px-2'> {title} </div>
                <div> {Icon && <Icon sx={{backgroundColor: '#60a5fa', borderRadius: '10px', padding: '2px', color: 'white', fontSize: '1.6rem'}} />} </div>
            </div>

            {/* Mini graph w/ value  */}
            <div className='mx-auto w-[95%] relative'>
                {children}
            </div>

        </div>
    );
};

export default CardContainer;
