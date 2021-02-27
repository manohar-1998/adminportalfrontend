import React from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper/index";
import { Link } from "react-router-dom";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
const AdminDashBoard = () => {
  const {
    user: { name, email, role },
  } = isAutheticated();
  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/create/category" className="nav-link text-success">
              Create Categories
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/categories" className="nav-link text-success">
              Manage Categories
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/create/product" className="nav-link text-success">
              Create Product
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/products" className="nav-link text-success">
              Manage Products
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/orders" className="nav-link text-success">
              Manage Orders
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  const LeftGraph = () => {
    const chart = am4core.create("middleBoxleftGraphArea", am4charts.PieChart);
    chart.data = [
      {
        fruit: "Apple",
        Kilo: 22,
        color: am4core.color("#E41B17"),
      },
      {
        fruit: "Mango",
        Kilo: 40,
        color: am4core.color("#f9fc00"),
      },
      {
        fruit: "Water Melon",
        Kilo: 24,
        color: am4core.color("#e2886b"),
      },
      {
        fruit: "Musk Melon",
        Kilo: 19,
        color: am4core.color("#B2C248"),
      },
      {
        fruit: "Green Grapes",
        Kilo: 26,
        color: am4core.color("#12fe08"),
      },
      {
        fruit: "Papaya",
        Kilo: 19,
        color: am4core.color("#fcc300"),
      },
    ];
    const pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "Kilo";
    pieSeries.dataFields.category = "fruit";
    pieSeries.slices.template.propertyFields.fill = "color";
  };
  const adminRightSide = () => {
    return (
      <>
        {LeftGraph()}
        <div className="middleBox" style={{ position: "relative" }}>
          <div className="card mb-4">
            <h4 className="card-header bg-dark text-white">
              Analysis Information
            </h4>

            <ul className="list-group">
              <li
                style={{
                  listStyle: "none",
                  position: "relative",
                  paddingTop: "77px",
                  paddingBottom: "77px",

                  transform: "translate(3.4%,0)",
                }}
              >
                <div
                  className="middleBoxleftGraphArea"
                  style={{
                    width: "390px",
                    height: "90px",
                  }}
                ></div>
              </li>
              <li className="list-group-item">
                Products Analysis Part Goes Here..
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  };
  const RightGraph = () => {
    const chart = am4core.create("middleBoxRightGraphArea", am4charts.PieChart);
    chart.data = [
      {
        fruit: "Apple",
        Kilo: 2,
        color: am4core.color("#E41B17"),
      },
      {
        fruit: "Mango",
        Kilo: 4,
        color: am4core.color("#f9fc00"),
      },
      {
        fruit: "Water Melon",
        Kilo: 6,
        color: am4core.color("#e2886b"),
      },
      {
        fruit: "Musk Melon",
        Kilo: 3,
        color: am4core.color("#B2C248"),
      },
      {
        fruit: "Green Grapes",
        Kilo: 4,
        color: am4core.color("#12fe08"),
      },
      {
        fruit: "Papaya",
        Kilo: 5,
        color: am4core.color("#fcc300"),
      },
    ];
    const pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "Kilo";
    pieSeries.dataFields.category = "fruit";
    pieSeries.slices.template.propertyFields.fill = "color";
  };
  const adminRightSide1 = () => {
    return (
      <>
        {RightGraph()}
      <div className="card mb-4">
        <h4 className="card-header bg-dark text-white">Analysis Information</h4>
        <ul className="list-group">
        <li
                style={{
                  listStyle: "none",
                  position: "relative",
                  paddingTop: "77px",
                  paddingBottom: "77px",

                  transform: "translate(3.4%,0)",
                }}
              >
                <div
                  className="middleBoxRightGraphArea"
                  style={{
                    width: "390px",
                    height: "90px",
                  }}
                ></div>
              </li>
          <li className="list-group-item">
            WasteAge Analysis Part Goes Here..
          </li>
        </ul>
      </div>
      </>
    );
  };
  return (
    <Base
      title="Welcome to Admin Portal"
      description="Manage all of your products here"
      className="container bg-success p-4"
    >
      <div className="row">
        <div className="col-3">{adminLeftSide()}</div>
        <div className="col-4">{adminRightSide()}</div>
        <div className="col-4">{adminRightSide1()}</div>
      </div>
    </Base>
  );
};
export default AdminDashBoard;
