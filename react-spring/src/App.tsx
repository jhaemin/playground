import React from 'react';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import './App.css';

function PullRelease() {
  const [props, set] = useSpring(() => ({
    transform: `translateX(0px) translateY(0px)`,
  }));

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    set({
      transform: down
        ? `translateX(${mx}px) translateY(${my}}px)`
        : `translateX(0px) translateY(0px)`,
    });
  });

  // Bind it to a component
  return (
    <animated.div
      {...bind()}
      style={{
        touchAction: 'none',
        width: 100,
        height: 100,
        borderRadius: 15,
        backgroundColor: 'red',
        ...props,
      }}
    />
  );
}

function App() {
  return (
    <div className="App">
      <PullRelease />
    </div>
  );
}

export default App;
