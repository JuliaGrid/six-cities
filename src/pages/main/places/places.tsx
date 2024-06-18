
import { useAppSelector } from '../../../hooks/useAppDispatch/useAppDispatch';
import { PlacesProps } from './interfaces';
import { PlacesItem } from './PlacesItem/PlacesItem';

export function Places(props: PlacesProps) {
  const { onListItemHover } = props;
  const placesInfo = useAppSelector((state) => state.hotels);

  return <>{placesInfo.map((item) => <PlacesItem item={item} key={item.id} onListItemHover={onListItemHover} />)}</>;
}
