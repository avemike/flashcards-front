import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addFlashcard } from '../../actions';

class AddFlashcard extends Component {
    render() {
        return (
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addFlashcard">
                Dodaj fiszkę
</button>
        )
    }
}

export default connect(null, { addFlashcard })(AddFlashcard)