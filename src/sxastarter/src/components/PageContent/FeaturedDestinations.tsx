import React from 'react';
import { 
    Field, 
    ImageField, 
//    Image, 
  //  Text 
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

interface Fields {
  Quote: Field<string>;
  AuthorName: Field<string>;
  AuthorPosition: Field<string>;
  Image: ImageField;
}

export type PromoCtaProps = ComponentProps & {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: PromoCtaProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  console.log(id);

  return (
    <section className="hgv-section" style={{ width: "100%" }}>
        <div className="hgv-row">
            <header className="hgv-header hgv-header--carousel">
                <h2 className="hgv-title">Featured resorts and vacation destinations</h2>
                <a className="hgv-btn hgv-btn--link pl-0 pt-0 pb-0" href="https://hilton-2eyf6y550esadnitddvbbw-financial.vercel.app/en/resorts-and-destinations/">VIEW ALL DESTINATIONS</a>
            </header>
        </div>
        <div className="slider">
            <div className="slider-container is--multiple slick-initialized slick-slider">
                <div className="slick-list draggable">
                    <div className="slick-track">
                        <div className="slider__item slick-slide slick-cloned slick-active">
                            <div className="resorts-tile">
                                <div className="resorts-tile__container is--full">
                                    <a href="https://hilton-2eyf6y550esadnitddvbbw-financial.vercel.app/en/resorts-and-destinations/new-york/the-hilton-club-new-york" className="resorts-tile__wrapper">
                                        <div className="resorts-tile__media">
                                            <img src="https://www.hiltongrandvacations.com/-/media/images/main/resorts/01-tile-thumbs/ny-thc-ext-002.jpg?h=450&amp;iar=0&amp;w=367&amp;hash=7B580705AB8ACB76377AC5AC6907C981" className="resorts-tile__image lazyload" alt="The Hilton Club Vacation Ownership in New York City" width="367" height="450" loading="lazy" />
                                        </div>
                                        <div aria-hidden="true" className="resorts-tile__content">
                                            <p className="resorts-tile__title">The Hilton Club – New York</p>
                                            <p className="resorts-tile__time"></p>
                                            <dd className="resorts-tile__details">
                                                <dl className="resorts-tile__list">
                                                    <dt className="resorts-tile__location">New York, New York</dt>
                                                    <dd className="resorts-tile__description">Make a break for the Big Apple.</dd>
                                                </dl>
                                            </dd>
                                        </div>
                                    </a>
                                    <nav className="resorts-tile__media--dots">
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="slider__item slick-slide slick-current slick-active slick-center">
                            <div className="resorts-tile">
                                <div className="resorts-tile__container is--full">
                                    <a href="https://hilton-2eyf6y550esadnitddvbbw-financial.vercel.app/en/resorts-and-destinations/hawaii/oahu/grand-waikikian-a-hilton-grand-vacations-club" className="resorts-tile__wrapper">
                                        <div className="resorts-tile__media">
                                            <img src="https://www.hiltongrandvacations.com/-/media/images/main/resorts/01-tile-thumbs/hi-gw-ext-007-thumb.jpg?h=450&amp;iar=0&amp;w=367&amp;hash=41E724C6F7E3537534D0DEB62FD8CDD8" className="resorts-tile__image lazyload" alt="The Grand Waikikian Vacation Resort in Waikiki Oahu" width="367" height="450" loading="lazy" />
                                        </div>
                                        <div className="resorts-tile__content">
                                            <p className="resorts-tile__title">Grand Waikikian, a Hilton Grand Vacations Club</p>
                                            <p className="resorts-tile__time"></p>
                                            <dd className="resorts-tile__details">
                                                <dl className="resorts-tile__list">
                                                    <dt className="resorts-tile__location">Waikiki Beach, Oahu</dt>
                                                    <dd className="resorts-tile__description">Point yourself toward paradise</dd>
                                                </dl>
                                            </dd>
                                        </div>
                                    </a>
                                    <nav className="resorts-tile__media--dots">
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="slider__item slick-slide slick-active">
                            <div className="resorts-tile" data-name="" data-locationname="">
                                <div className="resorts-tile__container is--full">
                                    <a href="https://hilton-2eyf6y550esadnitddvbbw-financial.vercel.app/en/resorts-and-destinations/florida/central/seaworld-orlando-a-hilton-grand-vacations-club" className="resorts-tile__wrapper" aria-label="SeaWorld® Orlando, a Hilton Grand Vacations Club Orlando, Florida, Slide 2 of 5" >
                                        <div className="resorts-tile__media">
                                            <img src="https://www.hiltongrandvacations.com/-/media/images/main/resorts/01-tile-thumbs/fl-sw-ext-004-thumb.jpg?h=450&amp;iar=0&amp;w=367&amp;hash=B4E9C26272338C0362750D0BC9D73D82" className="resorts-tile__image lazyload" alt="Hilton Grand Vacations Resort At SeaWorld, Orlando" width="367" height="450" loading="lazy" />
                                        </div>
                                        <div aria-hidden="true" className="resorts-tile__content">
                                            <p className="resorts-tile__title">SeaWorld® Orlando, a Hilton Grand Vacations Club</p>
                                            <p className="resorts-tile__time"></p>
                                            <dd className="resorts-tile__details">
                                                <dl className="resorts-tile__list">
                                                    <dt className="resorts-tile__location">Orlando, Florida</dt>
                                                    <dd className="resorts-tile__description">Find your happy place</dd>
                                                </dl>
                                            </dd>
                                        </div>
                                    </a>
                                    <nav className="resorts-tile__media--dots">
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider-nav">
                <button type="button" role="presentation" className="slick-prev slider-nav__prev __img-carousel-prev slick-arrow" data-component="resort-carousel" aria-label="Previous Slide" >Previous Slide</button>
                    <span className="slick__paging" aria-hidden="true">1 | 5</span>
                    <span aria-live="polite" className="sr-only slick__alert">Slide 1 of 5</span>
                <button type="button" role="presentation" className="slick-next slider-nav__next __img-carousel-next slick-arrow" data-component="resort-carousel" aria-label="Next Slide">Next Slide</button>
            </div>
        </div>
    </section >
  );
};
