import React from 'react';

const BoxGenerator = (props) => {
    const { colors } = props;

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
                colors.map((color, i) => {
                    return (
                        <div key={i} className="box" style={{ backgroundColor: color.color, margin: '10px' }}>{i}
                    </div>
                    )
                })
            }
        </div>
    );
}

export default BoxGenerator;