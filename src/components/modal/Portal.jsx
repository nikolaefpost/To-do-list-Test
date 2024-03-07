import React from 'react'
import * as ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

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

Portal.propTypes = {
    'children': PropTypes.node.isRequired,
}