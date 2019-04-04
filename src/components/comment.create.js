//create.comment

export default class CommentCreate extends Component {
  render() { 
    return (
      <div className="container">
        <h2>Add a comment!</h2>
        <form class="card">
          <div className="form-group">
            <label>Throw sunshine, not shade!</label>
            <input className="form-control" type="text"></input>
          </div>
        </form>
      </div>
    );
  }
}
