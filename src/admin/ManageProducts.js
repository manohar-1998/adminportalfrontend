import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { getProducts, deleteProduct } from "./helper/adminapicall";
import {
  Table,
  Container,
  Button,
  Icon,
  Divider,
  Segment,
} from "semantic-ui-react";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const { user, token } = isAutheticated();

  const preload = () => {
    getProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisProduct = (productId) => {
    deleteProduct(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
      console.log("Deleted Successfully")
    });
  };

  return (
    <Base title="Welcome admin" description="Manage products...">
      <h2 className="mb-4">All products:</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          <Container style={Styling}>
      <Segment>
        <header style={headerstyle}>
          <b>Product Management </b>
        </header>
        <Divider />
          <Container style={Addbuttonuse}>
          <Table padded celled selectable>
            <Table.Header>
              <Table.Row className="text-white text-left" textAlign="center">
                <Table.HeaderCell>S No</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Grade</Table.HeaderCell>
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {products.map((product) => {
                return (
                  <Table.Row
                    className="text-white text-left"
                    textAlign="center"
                  >
                    <Table.Cell>{products.indexOf(product) + 1}</Table.Cell>
                    <Table.Cell>{product.name}</Table.Cell>
                    <Table.Cell>{product.grade}</Table.Cell>
                    <Table.Cell>{product.category}</Table.Cell>
                    <Table.Cell>
                      <Link
                        className="btn btn-success"
                        to={`/admin/product/update/${product._id}`}
                      >
                        <span className="">Update</span>
                      </Link>
                      <Button
                        onClick={() => {
                          deleteThisProduct(product._id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
          </Container>
          </Segment>
    </Container>
        </div>
      </div>
    </Base>
  );
};
export default ManageProducts;
const Styling = {
  marginTop: "1rem",
  width: "80%",
};
const Addbuttonuse = {
  marginBottom: "2em",
  width: "100%",
};
const headerstyle = {
  textAlign: "center",
  color: "grey",
  fontSize: "24px",
};