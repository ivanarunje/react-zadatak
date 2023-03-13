import { Component } from "react";

export default class DrugaKompa extends Component {
  render(props) {
    return (
      <div>
        <p>
          Korisnik {this.props.ime} ima {this.props.godine} godina!
        </p>
      </div>
    );
  }
}
