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
     overflow-hidden w-[30%] bg-white 
     rounded-xl justify-around pb-3
     '>

            {/* Header Row */}
            <div className='px-3 flex justify-between'>
                {/* Title */}
                <div className='pt-1 px-2'>
                    {title}
                </div>

                {/* Icon */}
                <div>
                    {Icon && <Icon />}

                </div>

            </div>


            {/* Mini graph + value  */}
            <div className='position-relative mx-auto'>
                {children}
            </div>


        </div>
    );
};

export default CardContainer;
