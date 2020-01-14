import React, {Component} from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }
  render() {
    const { seo_title } = this.state;
    return (<form id="article-form">
      <Input text="SEO title"
        label="sea_title"
        type="text"
        id="seo_title"
        value={seo_title}
        handleChange={this.handleChange} />
    </form>)
  }
}

export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;