
import { PLACES_INFO } from '../../../mocks/mocks';
import { PlacesItem } from './PlacesItem/PlacesItem';

export function Places() {
  return <>{PLACES_INFO.map((item) => <PlacesItem item={item} key={item.id} />)}</>;
}
