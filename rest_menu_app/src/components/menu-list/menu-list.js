import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';

import './menu-list.scss';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError} from '../../actions/';
import Spinner from '../spinner/';
import Error from '../error';

class MenuList extends Component {

    componentDidMount(){
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenuItesm()
        .then(res => this.props.menuLoaded(res))
        .cathh(error => this.props.menuError());
    }

    render() {

        const {menuItems, loading, error} = this.props;
        if(error){
            return <Error/>
        }

        if(loading){
            return <Spinner/>
        }

        return (
            <ul className="menu__list">
            {
                menuItems.map(menuItem => {
                    return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
                })
            }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));