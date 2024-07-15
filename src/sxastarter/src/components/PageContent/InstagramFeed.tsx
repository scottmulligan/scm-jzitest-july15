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
    <>
        <div className="hgv-row " style={{width: "100%"}}>
            <div className="full-width-cta ">
                <div className="full-width-cta__wrapper">
                </div>
            </div>
        </div>

        <div className={`embed-content__container embed-content__container--full-width ${props.params.styles.trimEnd()}`}>
            <h2 className="embed-content__title">Share Your Vacation Moments With #myHGV</h2>

            <div id="flockler-embed-173a0d42e8e0180729dec1f41d5491ca">
                <div aria-live="polite" className="flockler-embed-content">
                    <div className="flockler-posts flockler-grid-items">
                        <article className="flockler-grid-item flockler-grid-item--instagram flockler-grid-item--no-profile-details is-visible" style={{opacity: 1}}>
                            <div className="flockler-grid-item__wrapper flockler-grid-item__wrapper--no-profile">
                                <div className="flockler-grid-item__content">
                                    <figure className="flockler-grid-item__media flockler-grid-item__media--video flockler-grid-item__media--video--iframe">
                                        <img src="https://media-api.flockler.com/instagram/video_cover/3403401814669217976" alt="No photo description available." className="flockler-grid-item__media__img" />
                                        <button type="button" aria-label="Play video from Hilton Grand Vacations" className="flockler-grid-item__media__play-button">
                                            <svg aria-hidden="true" viewBox="0 0 60 60">
                                                <path fill="currentColor" d="m24 0c-13.26 0-24 10.74-24 24s10.74 24 24 24 24-10.74 24-24-10.74-24-24-24zm-4.8 34.8v-21.6l14.4 10.8z" transform="translate(6 6)"></path>
                                            </svg>
                                        </button>
                                    </figure>
                                </div>
                                <div className="flockler-grid-item__footer">
                                    <div className="flockler-grid-item__footer__details">
                                        <div aria-label="3 comments" role="img" className="flockler-grid-item__footer__details__stats">
                                            <span title="3 comments" aria-hidden="true" className="flockler-grid-item__footer__details__stat flockler-grid-item__footer__details__stat--comments">
                                                <svg aria-hidden="true" viewBox="0 0 60 60" className="flockler-grid-item__footer__details__stat__icon">
                                                    <path fill="currentColor" d="m31.652.5h-15.304-.0000004c-8.47646002.00000037-15.34800002 6.87154-15.34800002 15.348.00000037 8.47646 6.87154 15.348 15.34800002 15.348h1.652v7.304-.00004c-.0001908.552284.44737 1.000154.999654 1.000346.274722.0000949.537384-.1128352.726318-.312276l7.57-8h4.356-.0000007c8.47646.0000003 15.348-6.87154 15.348-15.348.0000004-8.47646003-6.87154-15.34800003-15.348-15.34800003z" fill-rule="evenodd" transform="translate(6 10)"></path>
                                                </svg>
                                                3
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="flockler-grid-item flockler-grid-item--instagram flockler-grid-item--no-profile-details is-visible" style={{ opacity: 1 }}>
                            <div className="flockler-grid-item__wrapper flockler-grid-item__wrapper--no-profile">
                                <div className="flockler-grid-item__content">
                                    <figure className="flockler-grid-item__media flockler-grid-item__media--image flockler-grid-item__media--loaded">
                                        <img src="https://media-api.flockler.com/instagram/image/3402676124286098531" alt="No photo description available." className="flockler-grid-item__media__img" />
                                        <a href="https://www.instagram.com/p/C84u-gpxpxj/" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1} className="flockler-grid-item__media__source-link"></a>
                                    </figure>
                                </div>
                                <div className="flockler-grid-item__footer">
                                    <div className="flockler-grid-item__footer__details">
                                        <div aria-label="11 comments" className="flockler-grid-item__footer__details__stats">
                                            <span title="11 comments" aria-hidden="true" className="flockler-grid-item__footer__details__stat flockler-grid-item__footer__details__stat--comments">
                                                <svg aria-hidden="true" viewBox="0 0 60 60" className="flockler-grid-item__footer__details__stat__icon">
                                                    <path fill="currentColor" d="m31.652.5h-15.304-.0000004c-8.47646002.00000037-15.34800002 6.87154-15.34800002 15.348.00000037 8.47646 6.87154 15.348 15.34800002 15.348h1.652v7.304-.00004c-.0001908.552284.44737 1.000154.999654 1.000346.274722.0000949.537384-.1128352.726318-.312276l7.57-8h4.356-.0000007c8.47646.0000003 15.348-6.87154 15.348-15.348.0000004-8.47646003-6.87154-15.34800003-15.348-15.34800003z" fill-rule="evenodd" transform="translate(6 10)"></path>
                                                </svg>
                                                11
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="flockler-grid-item flockler-grid-item--instagram flockler-grid-item--no-profile-details is-visible" style={{ opacity: 1 }}>
                            <div className="flockler-grid-item__wrapper flockler-grid-item__wrapper--no-profile">
                                <div className="flockler-grid-item__content">
                                    <figure className="flockler-grid-item__media flockler-grid-item__media--video flockler-grid-item__media--video--iframe">
                                        <img src="https://media-api.flockler.com/instagram/video_cover/3399852517306474905" alt="No photo description available." className="flockler-grid-item__media__img" />
                                        <button type="button" aria-label="Play video from Hilton Grand Vacations" className="flockler-grid-item__media__play-button">
                                            <svg aria-hidden="true" viewBox="0 0 60 60">
                                                <path fill="currentColor" d="m24 0c-13.26 0-24 10.74-24 24s10.74 24 24 24 24-10.74 24-24-10.74-24-24-24zm-4.8 34.8v-21.6l14.4 10.8z" transform="translate(6 6)"></path>
                                            </svg>
                                        </button>
                                    </figure>
                                </div>
                                <div className="flockler-grid-item__footer">
                                    <div className="flockler-grid-item__footer__details">
                                        <div aria-label="7 comments" role="img" className="flockler-grid-item__footer__details__stats">
                                            <span title="7 comments" aria-hidden="true" className="flockler-grid-item__footer__details__stat flockler-grid-item__footer__details__stat--comments">
                                                <svg aria-hidden="true" viewBox="0 0 60 60" className="flockler-grid-item__footer__details__stat__icon">
                                                    <path fill="currentColor" d="m31.652.5h-15.304-.0000004c-8.47646002.00000037-15.34800002 6.87154-15.34800002 15.348.00000037 8.47646 6.87154 15.348 15.34800002 15.348h1.652v7.304-.00004c-.0001908.552284.44737 1.000154.999654 1.000346.274722.0000949.537384-.1128352.726318-.312276l7.57-8h4.356-.0000007c8.47646.0000003 15.348-6.87154 15.348-15.348.0000004-8.47646003-6.87154-15.34800003-15.348-15.34800003z" fill-rule="evenodd" transform="translate(6 10)"></path>
                                                </svg>
                                                7
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="flockler-grid-item flockler-grid-item--instagram flockler-grid-item--no-profile-details is-visible" style={{opacity: 1}}>
                            <div className="flockler-grid-item__wrapper flockler-grid-item__wrapper--no-profile">
                                <div className="flockler-grid-item__content">
                                    <figure className="flockler-grid-item__media flockler-grid-item__media--image flockler-grid-item__media--loaded">
                                        <img src="https://media-api.flockler.com/instagram/image/3398434327241777238" alt="No photo description available." className="flockler-grid-item__media__img" />
                                        <a href="https://www.instagram.com/p/C8pqgPTvWBW/" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1} className="flockler-grid-item__media__source-link"></a>
                                        <div className="flockler-grid-item__media__post-type-icon">
                                            <svg aria-hidden="true" viewBox="0 0 60 60">
                                                <g transform="translate(9 9)" fill="currentColor">
                                                    <path d="m19.84675 8.1480175c1.53769 1.53769 1.53769 4.030775 0 5.568465s-4.030775 1.53769-5.568465 0-1.53769-4.030775 0-5.568465 4.030775-1.53769 5.568465 0m9.75625 7.0944825c-.3112952-.5967605-.929936-.9695664-1.6029999-.9660253-.6735891.0153419-1.2794916.4133894-1.5610001 1.0255253l-2.7265 6.0095001c-.0986015.2195323-.3564995.3175637-.57603.2189634-.0634541-.0285001-.1191631-.0717772-.1624693-.1262128l-1.435-1.7920001c-.3440098-.431347-.8712917-.6752078-1.42275-.658-.5503488.0196555-1.0598683.295456-1.3772501.7455l-5.4564999 7.79275c-.2802923.3936573-.1883894.9400021.2052679 1.2202926.1495071.1064518.3287025.1631968.512232.1622195h21c.3030056-.0001596.5843688-.1570607.74375-.4147627.1591887-.2577225.1737523-.5794477.0385001-.8505z"></path>
                                                    <path d="m38.5 0h-28.87500015c-1.9329975 0-3.5 1.56700425-3.5 3.5v28.875.0000006c0 1.9329975 1.56700425 3.4999999 3.5 3.4999999h28.87499995c1.9329974 0 3.4999999-1.5670024 3.4999999-3.4999999v-28.8750006c0-1.93299697-1.5670042-3.5-3.5-3.5zm-.25375 32.1195c-.1644137.1639992-.3872768.2559147-.6195.2555013h-27.12675c-.4832485 0-.87499999-.3917528-.87499999-.8750012v-27.12500014c0-.48324837.39175149-.87499988.87499999-.87499988h27.125c.4832485 0 .875.39175151.875.87500001v27.12500001c-.0005089.2301606-.0916773.450846-.2537535.6142541z"></path>
                                                    <path d="m34.125 38.5h-29.75c-.48324854 0-.87500004-.3917515-.87500004-.875v-29.75c0-.96649875-.78350125-1.75-1.75-1.75s-1.75.78350125-1.75 1.75v30.625.0000005c0 1.9329975 1.56700425 3.5 3.5 3.5h30.62500004c.9664986 0 1.7499998-.7835012 1.7499998-1.7499999 0-.9664988-.7835012-1.7500001-1.7499999-1.7500001z"></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </figure>
                                </div>
                                <div className="flockler-grid-item__footer">
                                    <div className="flockler-grid-item__footer__details">
                                        <div aria-label="4 comments" role="img" className="flockler-grid-item__footer__details__stats">
                                            <span title="4 comments" aria-hidden="true" className="flockler-grid-item__footer__details__stat flockler-grid-item__footer__details__stat--comments">
                                                <svg aria-hidden="true" viewBox="0 0 60 60" className="flockler-grid-item__footer__details__stat__icon">
                                                    <path fill="currentColor" d="m31.652.5h-15.304-.0000004c-8.47646002.00000037-15.34800002 6.87154-15.34800002 15.348.00000037 8.47646 6.87154 15.348 15.34800002 15.348h1.652v7.304-.00004c-.0001908.552284.44737 1.000154.999654 1.000346.274722.0000949.537384-.1128352.726318-.312276l7.57-8h4.356-.0000007c8.47646.0000003 15.348-6.87154 15.348-15.348.0000004-8.47646003-6.87154-15.34800003-15.348-15.34800003z" fill-rule="evenodd" transform="translate(6 10)"></path>
                                                </svg>
                                                4
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <a href="#flockler-embed-173a0d42e8e0180729dec1f41d5491ca" role="button" className="flockler-btn-load-more">Load More</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};
