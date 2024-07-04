import classNames from 'classnames';
import { useState, MouseEvent } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { AppRoutes } from '../../../../constants';
import { useAppDispatch } from '../../../../hooks/useAppDispatch/useAppDispatch';
import { changeFavoriteAction } from '../../../../store/api-actions';
import { PlacesItemProps } from './interfaces';

export function PlacesItem(props: PlacesItemProps) {
  const { item, onListItemHover } = props;
  const { previewImage, price, title, type, id, isFavorite, isPremium } = item;
  const [isFavoriteState, setIsFavoriteState] = useState<unknown | boolean>(isFavorite);
  const dispatch = useAppDispatch();

  const path = generatePath(AppRoutes.Room, { id: String(id) });

  const changeIsFavorite = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(changeFavoriteAction({ hotelId: id, status: +!isFavoriteState })).then((res) => setIsFavoriteState(res.payload));
    e.currentTarget.blur();
  };

  const listItemHoverHandler = () => {
    onListItemHover(item.title);
  };

  const listItemLeaveHandler = () => {
    onListItemHover('');
  };

  return (
    <article className="cities__card place-card" onMouseEnter={listItemHoverHandler} onMouseLeave={listItemLeaveHandler}>
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={path}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={classNames('place-card__bookmark-button button', { 'place-card__bookmark-button--active': isFavoriteState })} type="button" onClick={changeIsFavorite}>
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
          <Link to={path}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
