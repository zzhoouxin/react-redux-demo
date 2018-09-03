import React, {Component} from "react";
import PropTypes from 'prop-types'

class ClickDom extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {value, add, less} = this.props;
        return (
            <p>
                点击了: {value} 次
                {' '}
                <button onClick={add}>
                    +
                </button>
                {' '}
                <button onClick={less}>
                    -
                </button>
            </p>
        )


    }

}

//这边是作为类型检查的
ClickDom.propTypes = {
    value: PropTypes.number.isRequired,
    add: PropTypes.func.isRequired,
    less: PropTypes.func.isRequired
}

export default ClickDom