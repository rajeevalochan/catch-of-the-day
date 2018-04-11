import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInputRef = React.createRef();

  goToStore = event => {
    event.preventDefault();
    const storeName = this.myInputRef.value.value;
    this.props.history.push(`store/${storeName}`);
  };

  render() {
    return (
      <React.Fragment>
        <h2>Please Enter a Store</h2>
        <form className="store-selector" onSubmit={this.goToStore}>
          <input
            type="text"
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
            ref={this.myInputRef}
          />
          <button type="submit">Visit Store --></button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
