import { Component } from "react";
import './Modal.scss'

export class Modal extends Component {
    render() {
        return <div className="overlay">
            <div className="modal">
                <img src="#" alt="" />
            </div>
        </div>
    }
}