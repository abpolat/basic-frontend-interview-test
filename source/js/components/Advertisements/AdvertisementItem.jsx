import React, { Component } from 'react';
import PropTypes from 'prop-types';

const AdvertisementItem = (props) => {
  const { advertisement } = props;

  let address = {
    city: null,
    street: null,
    postalCode: null,
  };

  if (!advertisement) return null;

  const {
    advertisementAssets,
    realestateSummary,
    title,
    advertisementPrice,
  } = advertisement;

  if (realestateSummary && realestateSummary.address) {
    address = realestateSummary.address;
  }

  return (
    <div className='col-md-4 col-sm-12'>
      <div className='adv-item'>
        <div className='image'>
          <img
            className='img-responsive'
            src={ advertisementAssets[0].advertisementThumbnails.inventory_m.url }
            alt=''
          />
          <div className='status'>{address.city}</div>
        </div>
        <div className='content'>
          <div className='title'>
            <a title={ title } href='#'>
              {title}
            </a>
          </div>
          <div className='sub-title'>
            {address.postalCode}
            {address.street}
            / {address.city}
          </div>
          <div className='bottom-content'>
            <div className='price'>
              {advertisementPrice.baseRent} €
            </div>
            <div className='size-info'>
              <span className='room'>
                {realestateSummary.numberOfRooms + ' Zimmer'}
              </span>
              <span className='space'>
                <span>{parseInt(realestateSummary.space)}</span>
                <span>{' m'}</span><sup>2</sup>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AdvertisementItem.propTypes = {
  advertisement: PropTypes.object.isRequired,
};
AdvertisementItem.defaultProps = {};

export default AdvertisementItem;
