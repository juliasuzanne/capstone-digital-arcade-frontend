import { Modal } from "../Modal";
import axios from "axios";

export function Catalog(props) {
  return (
    <div>
      {props.items.map((item) => (
        <button
          onClick={() => {
            props.handleCatalog();
            props.setCurrentItem(item.image_url);
            props.setDescription(item.description);
            console.log(props.currentItem);
          }}
        >
          <img src={item.image_url} width="200px" />
        </button>
      ))}
      <Modal show={props.show} onClose={props.handleNoCatalog}>
        <ul>
          {props.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form onSubmit={props.handleNewArtifact}>
          <div>
            Name:
            <input name="name" id="myform" type="string" />
          </div>
          <div>
            Price:
            <input id="myform" name="price_in_points" type="integer" />
          </div>
          <div>
            <p>Description:</p>
            <textarea
              className="myform"
              name="description"
              width="500px"
              type="string"
              defaultValue={props.description}
            />
          </div>
          <div>
            <input hidden name="image_url" type="string" defaultValue={props.currentItem}></input>
          </div>
          <img src={props.currentItem} className="myimage" width="300px" />
          <div>
            <button className="submitbutton" type="submit">
              submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
