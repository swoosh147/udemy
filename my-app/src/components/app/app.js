import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {label: 'going to learn react', important: true, id: 1},
                {label: 'that is so good', important: false, id: 2},
                {label: 'i need a breack...', important: false, id: 3}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
    }
deleteItem(id){
    this.setState(({data}) => {
        const index = data.findIndex(elem => elem.id === id);
        // неправильный код
        // data.splice(index,1);
        // return{
        //     data: data
        // }
        const before = data.slice(0, index);
        const after = data.slice(index + 1);
        
        const newArr = [...before, ...after];
        return{
            data: newArr
        }
    })
}

addItem(body){
    const newItem = {
        label: body,
        important: false,
        id: this.maxId++
    }

    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    })
}

render(){
    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList 
                posts={this.state.data}
                onDelete={this.deleteItem}/>
            <PostAddForm
            onAdd={this.addItem}/>
        </div>
    )
}
}
