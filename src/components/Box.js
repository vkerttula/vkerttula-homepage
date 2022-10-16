import React from 'react';

const Box = () => {
  return (
    <mesh rotation={[90, 0, 30]}>
        <dodecahedronGeometry 
            args={[3, 1]}
        />
        <meshNormalMaterial
          wireframe={true}
        />
    </mesh>
  )
};

export default Box;
