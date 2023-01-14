import axios from "axios";
import { Modal } from "../Modal";
import { useState, useEffect } from "react";

export function Media(props) {
  if (props.show) {
    const [errors, setErrors] = useState([]);
    const [items, setItems] = useState([]);
    const [show, setShow] = useState(false);

    const [description, setDescription] = useState("");
    const [currentItem, setCurrentItem] = useState([]);

    // need to add axios request to new backend model of items waiting to become artifacts
    // need to create crud for these items
    // need to create request here to get all
    // connect on item click (use image) to prompt create artifact
    const handleGetItems = () => {
      axios.get(`https://moon-egg.fly.dev/items.json?cat=media`).then((response) => {
        console.log(response);
        setItems(response.data);
      });
    };

    const handleNewArtifact = (event) => {
      event.preventDefault();
      const params = new FormData(event.target);
      handleCreateArtifact(params);
      event.target.reset();
    };

    const handleCreateArtifact = (params) => {
      axios
        .post("https://moon-egg.fly.dev/artifacts", params)
        // .then((window.location.href = "/artifacts/all"))
        .catch((error) => {
          console.log(error.response.data.errors);
          setErrors(error.response.data.errors);
        });
    };

    const handleCatalog = () => {
      setShow(true);
    };

    const handleNoCatalog = () => {
      setShow(false);
    };

    useEffect(handleGetItems, []);

    return (
      <div>
        {items.map((item) => (
          <button
            onClick={() => {
              handleCatalog();
              setCurrentItem(item.image_url);
              setDescription(item.description);
              console.log(currentItem);
            }}
          >
            <img src={item.image_url} width="200px" />
          </button>
        ))}
        <Modal show={show} onClose={handleNoCatalog}>
          <form onSubmit={handleNewArtifact}>
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
              <textarea className="myform" name="description" width="500px" type="string" defaultValue={description} />
            </div>
            <div>
              <input hidden name="image_url" type="string" defaultValue={currentItem}></input>
            </div>
            <img src={currentItem} className="myimage" width="300px" />
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
}
