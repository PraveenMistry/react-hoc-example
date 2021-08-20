import React, { useState } from 'react'

const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                textHover: false,
                textColor: '#888'
            }
        }

        hoverOn = () => {
            this.setState( prevState => {
                return {textHover : true}
            })
        }
        hoverOff = () => {
            this.setState( prevState => {
                return {textHover : false}
            })
        }

        setTextColor = () => {
            this.setState( prevState => {
                return {textColor : "#" + ((1<<24)*Math.random() | 0).toString(16)}
            })
        }

        render(){
            return <OriginalComponent textHover = {this.state.textHover} textColor = {this.state.textColor} hoverOn ={this.hoverOn} hoverOff={this.hoverOff} setTextColor = {this.setTextColor}/>
        }
    }

    return NewComponent
}


export default UpdatedComponent