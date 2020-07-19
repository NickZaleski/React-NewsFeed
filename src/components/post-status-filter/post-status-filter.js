import React, {Component} from 'react';
import './post-status-filter.css';
import { Button } from 'reactstrap';

export default  class  PostStatusFilter extends Component {
    constructor(props){
        super(props);
        this.buttons = [
            {name: 'all', label: 'All Posts'},
            {name: 'like', label: 'Liked'}
        ]
    }

    render(){
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelected} = this.props
            const active = filter === name;
            const clas = active ? 'btn-info' : 'btn-outline-secondary'
            return (

                <button 
                key={name} 
                className={`btn ${clas}`} 
                type="button"
                onClick={() => onFilterSelected(name)}>{label}</button>

            )
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )

    }
    
}

