'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Sorry for what?';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Oh shit i\'m sorry'
    );
  }
}

const domContainer = document.querySelector('#react_container');ReactDOM.render(e(LikeButton), domContainer);