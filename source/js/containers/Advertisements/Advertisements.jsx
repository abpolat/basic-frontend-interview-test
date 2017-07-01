import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AdvertisementItem from '../../components/Advertisements/AdvertisementItem';
import {loadAdvertisements} from '../../actions/app';

class Advertisements extends Component {

  componentDidMount() {
    this.props.loadAdvertisements();
  }

  render() {
    const { advertisements } = this.props;

    console.log(advertisements);

    const items = advertisements.map((advertisement) =>
      <AdvertisementItem advertisement={advertisement} key={advertisement._id.$id } />);

    return (
      <div className='row adv-list'>
        {items}
      </div>
    );
  }
}

Advertisements.propTypes = {
  advertisementsMeta: PropTypes.object,
  advertisements: PropTypes.array,
};

Advertisements.defaultProps = {
  advertisementsMeta: {},
  advertisements: [],
};

function mapStateToProps(state) {
  return {
    advertisementsMeta: state.app.meta,
    advertisements: state.app.advertisements,
  };
}

export default connect(mapStateToProps, {
  loadAdvertisements
})(Advertisements);
