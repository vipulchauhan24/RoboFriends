    import React from 'react';

    const card = (props) => {
        var imgSrc ='https://robohash.org/'+ props.id;
        return (
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt='img' src={imgSrc}/>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>            
        )
    }
    export default card; 