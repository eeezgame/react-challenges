import { useState } from 'react';
interface Pointer {
  x: number,
  y: number,
}
export default function Box({
  children,
  color,
  position,
  onMove
}: {
  children: string,
  color: string,
  position: Pointer,
  onMove: Function
}) {
  const [
    lastCoordinates,
    setLastCoordinates
  ] = useState<Pointer | null>(null);

  function handlePointerDown(e:React.PointerEvent) {
    // @ts-ignore
    e.target.setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handlePointerMove(e:React.PointerEvent) {
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      onMove(dx, dy);
    }
  }

  function handlePointerUp(e:React.PointerEvent<HTMLElement>) {
    setLastCoordinates(null);
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: 'grab',
        backgroundColor: color,
        position: 'absolute',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
      }}
    >{children}</div>
  );
}