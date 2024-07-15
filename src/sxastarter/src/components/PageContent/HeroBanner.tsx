import React from 'react';
import {
  Field,
  ImageField,
  Image,
  RichTextField,
  Text,
  RichText,
  useSitecoreContext,
  Link,
  LinkField,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { IconAccent } from 'components/NonSitecore/IconAccent';
import { DottedAccent } from 'components/NonSitecore/DottedAccent';

interface Fields {
  Tagline: Field<string>;
  Title: Field<string>;
  Text: RichTextField;
  Image: ImageField;
  Cta1: LinkField;
  Cta2: LinkField;
  Icon: ImageField;
}

export type HeroBannerProps = ComponentProps & {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: HeroBannerProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;

  return (
    <div
      className={`component hero-banner ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container container-wide">
        <div className="hero-row">
          <div className="content-column">
            <h6 className="eyebrow-accent">
              <Text field={props.fields.Tagline} encode={false} />
            </h6>
            <h1 className="display-2 fw-bold">
              <Text field={props.fields.Title} encode={false} />
            </h1>

            <div className="rich-content mb-4">
              <RichText field={props.fields.Text} />
            </div>
            <div className="btn-array pt-3 pb-4">
              {(isPageEditing || props.fields?.Cta1?.value?.href) && (
                <Link field={props.fields.Cta1} className="button button-main" />
              )}
              {(isPageEditing || props.fields?.Cta2?.value?.href) && (
                <Link field={props.fields.Cta2} className="button button-simple mx-4" />
              )}
            </div>
            <div className="row mt-2">
              <Placeholder name="hero-banner" rendering={props.rendering} />
            </div>
            <IconAccent image={props.fields.Icon} />
          </div>
          <div className="img-column">
            <div className="img-wrapper">
              <DottedAccent className="dotted-accent-top" />
              <Image field={props.fields.Image} className="img-fluid"></Image>
              <DottedAccent className="dotted-accent-bottom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HGV = (props: HeroBannerProps): JSX.Element => {
  return (<>
    <section className={`hgv-hero ${props.params.styles.trimEnd()}`} style={{ backgroundImage: `url(${props.fields.Image.value?.src})` }}>
      <div className="hero__wrapper ">
        <div className="hero__row hero__row--content ">
          <div className="hero__content">
            <h1 className="hero__title"><Text field={props.fields.Title} encode={false} /></h1>
              <div className="hero__details">
                <p className="hero__subtitle"><RichText field={props.fields.Text} /></p>
              </div>
            </div>
          </div>
          <div className="hero__row hero__row--promo">
            
          </div>
          <div className="hero__backdrop"></div>
      </div>
    </section></>
  );
}