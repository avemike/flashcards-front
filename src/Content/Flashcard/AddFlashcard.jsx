import React, { Component } from 'react'


export default class AddFlashcard extends Component {
    render() {
        console.log("w add")
        console.log(this.props.categories)
        return (
            <div className='row col-3'>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addFlashcard">Dodaj fiszkę + </button>
            </div>

        )
    }
}

