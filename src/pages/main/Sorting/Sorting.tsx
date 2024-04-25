import classNames from 'classnames';
import { useState, useRef, ChangeEvent } from 'react';
import { useDetectOutsideClick } from '../../../hooks/useDetectOutsideClick/useDetectOutsideClick';
import { ORDER } from './constants';
import { Order } from './interfaces';

export function Sorting() {
  const [order, setOrder] = useState(Order.Popular);
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen((prev) => !prev);
  };

  const listRef = useRef<HTMLDivElement>(null);

  useDetectOutsideClick(listRef, isOpen, setIsOpen);

  const changeOrder = (event: ChangeEvent<HTMLInputElement>) => {
    setOrder(event.target.value as Order);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggleList}>
        {order}
        <svg className="places__sorting-arrow" width="7" height="4" >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen &&
              <div ref={listRef} className="places__options places__options--custom places__options--opened">
                {ORDER.map((item) => (
                  <>
                    <input key={item} className="visually-hidden" name="rating" value={item} id={`places__option--${item}`} type="radio" onChange={changeOrder} />
                    <label className={classNames('places__option', { 'places__option--active': order === item })} htmlFor={`places__option--${item}`} >
                      {item}
                    </label>
                  </>
                ))}
              </div>}
    </form>
  );
}
