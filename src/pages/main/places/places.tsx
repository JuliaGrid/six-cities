
import { PLACES_INFO } from '../../../mocks/mocks';
import { PlacesProps } from './interfaces';
import { PlacesItem } from './PlacesItem/PlacesItem';

export function Places(props: PlacesProps) {
  const { onListItemHover } = props;

  return <>{PLACES_INFO.map((item) => <PlacesItem item={item} key={item.id} onListItemHover={onListItemHover} />)}</>;
}
