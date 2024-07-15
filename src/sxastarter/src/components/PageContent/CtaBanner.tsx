import React from 'react';
import {
  Field,
  ImageField,
  Image,
  RichTextField,
  Text,
  RichText,
  Link,
  LinkField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import useVisibility from 'src/hooks/useVisibility';
import { ComponentProps } from 'lib/component-props';
import { DottedAccent } from 'components/NonSitecore/DottedAccent';
import { IconAccent } from 'components/NonSitecore/IconAccent';

interface Fields {
  Eyebrow: Field<string>;
  Title: Field<string>;
  Text: RichTextField;
  Link: LinkField;
  Image: ImageField;
  Icon: ImageField;
}

export type CtaBannerProps = ComponentProps & {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: CtaBannerProps): JSX.Element => {
  return (
    <>
      <div className={`hgv-row ${props.params.styles.trimEnd()}`}>
        <div className="full-width-cta ">
          <div className="full-width-cta__wrapper">
            <figure className="full-width-cta__figure">
              <span className="full-width-cta__callout full-width-cta__callout--pink">LIMITED TIME OFFER</span>
              <Image
                  field={props.fields.Image}
                  className="lazyload full-width-cta__image"
                ></Image>
            </figure>
            <div className="full-width-cta__promo">
              <a href="https://www.hiltongrandvacations.com/en/offers/lp/web/ny" className="full-width-cta__link">
                <p className="full-width-cta__eyebrow"><Text field={props.fields.Title} /></p>
                <RichText field={props.fields.Text} className="text-content" />
                <Link field={props.fields.Link} className="full-width-cta__offer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const LargeImage = (props: CtaBannerProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;
  const [isVisible, domRef] = useVisibility();

  return (
    <div
      className={`component cta-banner component-spaced with-large-image with-dotted-accents ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
      ref={domRef}
    >
      <div className="container container-widest-fluid">
        <div className="row row-gap-4 main-content align-items-center">
          <div className="col-lg-6">
            <div className="content-column">
              <IconAccent image={props.fields.Icon} inverted />
              <div className="content-wrapper">
                <h6 className="eyebrow-accent">
                  <Text field={props.fields.Eyebrow} />
                </h6>
                <h1 className="display-4 fw-bold mb-3">
                  <Text field={props.fields.Title} />
                </h1>
                <div className="fs-5">
                  <RichText field={props.fields.Text} className="text-content" />

                  {(isPageEditing || props.fields?.Link?.value?.href) && (
                    <Link field={props.fields.Link} className="button button-main mt-3" />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 mx-auto col-lg-6 mx-lg-0">
            <div className="image-wrapper">
              <DottedAccent className="dotted-accent-top" />
              <Image
                field={props.fields.Image}
                className={`d-block mx-lg-auto img-fluid ${
                  !isPageEditing ? `fade-section ${isVisible ? 'is-visible' : ''}` : ''
                }`}
              ></Image>
              <DottedAccent className="dotted-accent-bottom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
