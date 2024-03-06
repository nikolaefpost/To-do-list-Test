import React from 'react'
import * as ReactDOM from 'react-dom'

const portalRoot = document.querySelector('#portal')

export default class Portal extends React.Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('div')
    }

    componentDidMount() {
        portalRoot.append(this.el)
    }

    componentWillUnmount() {
        this.el.remove()
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        )
    }
}
