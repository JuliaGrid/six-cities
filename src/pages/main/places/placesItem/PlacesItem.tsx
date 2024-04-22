import { generatePath, Link } from 'react-router-dom';
import { AppRoutes } from '../../../../constants';
import { PlacesItemProps } from './interfaces';

export function PlacesItem(props: PlacesItemProps) {
  const { item } = props;
  const {img, price, name, type, id} = item;

  const path = generatePath(AppRoutes.Room, { id });

  return (
    <article className="cities__card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={path}>
          <img className="place-card__image" src={img} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={path}>{name}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}