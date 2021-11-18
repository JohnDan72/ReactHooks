import { useEffect, useState } from "react";
import { Notification, Tag } from "rsuite";
// const { Paragraph } = Placeholder;

export const Message = () => {
  const [corrds, setCorrds] = useState({x:0,y:0});
  useEffect(() => {
    const getCoors = (e) => {
      const coors = { x: e.x, y: e.y };
      setCorrds(coors);
      console.log(coors);
    }
    window.addEventListener('click',getCoors)
    console.log("Componente montado");

    return () => {
      // removiendo listener para evitar consumo de excesivo de memoria
      console.log("Componente DESMONTADO");
      window.removeEventListener('click',getCoors);
    };
  }, [])


  return (
    <Notification type='info' header='Info :)' closable style={{ width: '340px' }}>
      {/* <Placeholder.Grid rows={3} columns={2} /> */}
      <Tag color="violet">Coords: {corrds.x} , {corrds.y} </Tag>
      {/* <Paragraph width={320} rows={3} /> */}
      {/* <Placeholder.Graph width={350} height={50}/> */}
    </Notification>
  );
}