import { useRef, useEffect } from 'react';
import h337 from 'heatmapjs';

export function HeatMap({ data }) {
  const containerRef = useRef();
  const h337InstanceRef = useRef();

  useEffect(() => {
    h337InstanceRef.current = h337.create({ container: containerRef.current, height: 960, width: 1100 });
  }, []);

  useEffect(() => {
    if (!data) {
      return
    }
    h337InstanceRef.current.setData(data);
  }, [data])

  return <div style={{width: 300, height: 400}} ref={containerRef}></div>;
}
