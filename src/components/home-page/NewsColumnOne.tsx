import * as React from 'react';

interface INewsColumnOneProps {
}

const NewsColumnOne: React.FunctionComponent<INewsColumnOneProps> = (props) => {
  return (
    <div className='width-fill'>
      This is the first column
    </div>
  )
};

export default NewsColumnOne;
