import React from 'react';

const useHomeStack = () => {
  const [first, setfirst] = React.useState(0);
  return {first, setfirst};
};

export default useHomeStack;
