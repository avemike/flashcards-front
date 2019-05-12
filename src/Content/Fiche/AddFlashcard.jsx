import React, { Component } from 'react'


export default class AddFlashcard extends Component {
    render() {
        return (
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addFlashcard">
                +</button>
        )
    }
}

