import { placesInfo } from './constants';
import { PlaceItem } from './placesItem/placeItem';

export function Places() {
  return <>{placesInfo.map((item) => <PlaceItem item={item} key={item.id} />)}</>;
}
