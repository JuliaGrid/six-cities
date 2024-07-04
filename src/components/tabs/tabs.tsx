import { generatePath, Link } from 'react-router-dom';
import { AppRoutes } from '../../constants';

export function Tabs() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item">
            <Link className="locations__item-link tabs__item" to={generatePath(AppRoutes.City, { name: 'Paris' })}>
              <span>Paris</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link className="locations__item-link tabs__item" to={generatePath(AppRoutes.City, { name: 'Cologne' })}>
              <span>Cologne</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link className="locations__item-link tabs__item" to={generatePath(AppRoutes.City, { name: 'Brussels' })}>
              <span>Brussels</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link className="locations__item-link tabs__item tabs__item--active" to={generatePath(AppRoutes.City, { name: 'Amsterdam' })}>
              <span>Amsterdam</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link className="locations__item-link tabs__item" to={generatePath(AppRoutes.City, { name: 'Hamburg' })}>
              <span>Hamburg</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link className="locations__item-link tabs__item" to={generatePath(AppRoutes.City, { name: 'Dusseldorf' })}>
              <span>Dusseldorf</span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
