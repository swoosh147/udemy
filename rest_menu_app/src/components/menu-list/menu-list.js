import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';

import './menu-list.scss';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested} from '../../actions/';
import Spinner from '../spinner/';

class MenuList extends Component {

    componentDidMount(){
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenuItesm()
        .then(res => this.props.menuLoaded(res));
    }

    render() {

        const {menuItems, loading} = this.props;

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
        loading: state.loading
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));