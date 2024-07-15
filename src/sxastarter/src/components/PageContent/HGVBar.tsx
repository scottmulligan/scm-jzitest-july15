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

export const WithCTA = (props: PromoCtaProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  console.log(id);

  return (
    <section className={`hgv-section hgv-bg--silver ${ props.params.styles.trimEnd() }`}>
        <div className="hgv-row">
            <div className="hgv-row">
                <div className="hilton-bar hilton-bar--multi-cta hgv-bg--silver">
                    <div className="hilton-bar__wrapper">
                        <figure className="hilton-bar__media">
                            <img src="https://www.hiltongrandvacations.com/-/media/project/main/icons/pack-your-bags.png?h=73&amp;iar=0&amp;w=134&amp;hash=0AE4612E6F8C29BF31741340EB1C9CB0" className="hilton-bar__image lazyload" alt="" width="134" height="73" loading="lazy" />
                        </figure>
                        <h2 className="hilton-bar__title">Plan your next adventure</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="hgv-row">
            <div className="hgv-row">
                <div className="multi-cta multi-cta--three">
                    <div className="multi-cta__wrapper">
                        <article className="multi-cta__item">
                            <p className="multi-cta__title">Travel Inspiration</p>
                            <div className="multi-cta__actions">
                                <a className="multi-cta__button multi-cta__button--primary" href="https://www.hiltongrandvacations.com/en/contact-us/newsletter-subscription">Yes, Please</a>
                            </div>
                        </article>
                        <article className="multi-cta__item">
                            <p className="multi-cta__title">Get The Best Experience</p>
                            <div className="multi-cta__actions">
                                <a className="multi-cta__button multi-cta__button--primary" href="https://www.hiltongrandvacations.com/en/sign-in">Log In</a>
                            </div>
                        </article>
                        <article className="multi-cta__item">
                            <p className="multi-cta__title">Interested in membership with Hilton Grand Vacations?</p>
                            <div className="multi-cta__actions">
                                <a className="multi-cta__button multi-cta__button--primary" href="https://www.hiltongrandvacations.com/en/discover-membership">Learn More</a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export const Default = (props: PromoCtaProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  console.log(id);

  return (
    <div className={`hgv-row ${props.params.styles.trimEnd()}`}>
        <div className="hilton-bar  hgv-bg--silver">
            <div className="hilton-bar__wrapper">
                <figure className="hilton-bar__media">
                    <img src="https://www.hiltongrandvacations.com/-/media/images/main/misc/hilton_bar.png?iar=0&amp;hash=603F963EC921A2BE78A7D6052DF6EAAE" className="hilton-bar__image lazyload" alt="Hilton Logo" loading="lazy" />
                    <figcaption className="hilton-bar__caption">As one of Hiltons world-class global brands, Hilton Grand Vacations enjoys the distinction of being a leader in vacation membership and a reputation for delivering a consistently exceptional standard of service synonymous with the Hilton name.</figcaption>
                </figure>
            </div>
        </div>
    </div>
  );
};
