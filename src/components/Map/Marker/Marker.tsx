import { Popup, Marker as LeafletMarker } from 'react-leaflet';
import { MarkerProps } from './interfaces';
import { Icon } from 'leaflet';


export function Marker(props: MarkerProps) {
  const { position, name, selectedPoint } = props;

  const isSelectedPoint = selectedPoint === name;

  const defaultCustomIcon = new Icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = new Icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  return (
    <LeafletMarker position={position} icon={isSelectedPoint ? currentCustomIcon : defaultCustomIcon}>
      <Popup>
        {name}
      </Popup>
    </LeafletMarker>
  );
}
