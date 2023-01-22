import axios from "axios";
import { Modal } from "../Modal";
import { useState, useEffect } from "react";
import { Catalog } from "./Catalog";

export function Painting(props) {
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
      axios.get(`https://moon--egg.fly.dev/items.json?cat=painting`).then((response) => {
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
        .post("https://moon--egg.fly.dev/artifacts", params)
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
      <Catalog
        handleCatalog={handleCatalog}
        setCurrentItem={setCurrentItem}
        setDescription={setDescription}
        show={show}
        handleNoCatalog={handleNoCatalog}
        items={items}
        currentItem={currentItem}
        errors={errors}
        handleNewArtifact={handleNewArtifact}
        setShow={setShow}
        description={description}
      />
    );
  }
}
