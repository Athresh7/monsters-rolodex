import React from 'react';

import SHOP_DATA from './shop.data';

import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collection.component';

import { selectCollections } from '../../redux/shop/shop.selectors';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import {connect} from 'react-redux';

import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
           <Route exact path={`${match.path}`} component={CollectionsOverview} />
           <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>)

const mapStateToProps = createStructuredSelector({
    collections : selectCollections
})
    

export default connect(mapStateToProps)(ShopPage);