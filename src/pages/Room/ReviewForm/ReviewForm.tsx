import { ChangeEvent, useState } from 'react';

export function ReviewForm() {
  const [review, setReview] = useState({
    rate: 0,
    text: '',
  });

  const updateRate = (event: ChangeEvent<HTMLInputElement>) => {
    setReview(() => ({
      ...review,
      rate: +event.target.value
    }));
  };

  const updateText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(() => ({
      ...review,
      text: event.target.value,
    }));
  };

  const createRating = () => {
    const rating = [];
    for (let i = 5; i > 0; i--) {
      rating.push(
        <>
          <input key={i} className="form__rating-input visually-hidden" name="rating" value={i} id={`${i}-stars`} type="radio" onChange={updateRate} />
          <label htmlFor={`${i}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </>
      );
    }
    return rating;
  };

  return (
    <form className="reviews__form form" action="#" method="post" >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {createRating().map((item) => item)}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={updateText}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
