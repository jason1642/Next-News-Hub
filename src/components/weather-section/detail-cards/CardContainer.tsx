import * as React from 'react';

interface ICardContainerProps {
    title: string;
    children: React.ReactNode;
    icon: string;
}

const CardContainer: React.FunctionComponent<ICardContainerProps> = ({title, children}) => {
  return (
    <div className='p-4 border-b'>
        
        {/* Header Row */}
        <div className='p-4 '>
            {/* Title */}
            <div className='p-4 '> 
              {title}
            </div>
            {/* Icon */}
         <div>

         </div>

        </div>


        {/* Mini graph + value  */}
        {children}

    </div>
  );
};

export default CardContainer;
