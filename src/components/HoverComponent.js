import React, { Component } from 'react'
import UpdatedComponent from './withHoverHOC'

class HoverComponent extends Component {
    render() {
        const {textColor, textHover, hoverOn, hoverOff, setTextColor} = this.props

        return (
            <div>
                <h2 onMouseOver= {hoverOn} onMouseLeave = {hoverOff} onClick = {setTextColor} style={{ color: textColor }}>Mouse {textHover ? 'Over' : 'Out'}</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverComponent)