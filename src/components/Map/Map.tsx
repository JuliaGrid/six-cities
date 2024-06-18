import { MapContainer, TileLayer } from 'react-leaflet';
import { MapProps } from './interfaces';
import { Marker } from './Marker/Marker';

export function Map(props: MapProps) {
  const {city, points, selectedPoint} = props;

  return (
    <MapContainer
      style={{ height: '100%', width: '100%' }}
      center={city.center} zoom={12} scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
      />
      {points.map((item) => <Marker position={item.position} name={item.title} selectedPoint={selectedPoint} key={item.id} />)}
    </MapContainer>
  );
}
