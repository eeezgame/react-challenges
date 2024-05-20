import { useImmer } from 'use-immer'
import Background from './Background.tsx';
import Box from './Box.tsx';

const initialPosition = {
  x: 0,
  y: 0
};

export default function Canvas() {
  const [shape, updateShape] = useImmer({
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx: number, dy: number) {
    updateShape((shape)=> {
        shape.position.x += dx;
        shape.position.y += dy;
    })
  }

  function handleColorChange(e: React.ChangeEvent<HTMLSelectElement>) {
    updateShape((shape)=> {
        shape.color = e.target.value;
    })
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </Box>
    </>
  );
}
