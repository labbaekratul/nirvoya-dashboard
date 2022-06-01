import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ContentHeader from "../../layouts/ContentHeader";

const Orders = () => {
  const [orders, setOrders] = useState();
  useEffect(() => {
    const getOrderList = async () => {
      const { data } = await axios.get(
        "https://oikko-online-shopping.herokuapp.com/api/products"
      );
      setOrders(data.products);
    };
    getOrderList();
  }, []);
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: "Product Name",
      width: 170,
    },
    {
      field: "price",
      headerName: "Price",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      width: 170,
    },
    {
      field: "userName",
      headerName: "User Name",
      sortable: true,
      width: 170,
    },
    {
      field: "payment",
      headerName: "Payments",
      sortable: true,
      width: 170,
    },
    {
      field: "countInStock",
      headerName: "CountInStock",
      sortable: true,
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: true,
      editable: true,
      width: 170,
    },
  ];

  let rows = [];

  orders?.map((x) =>
    rows.push({
      id: x._id,
      name: x?.name,
      price: x?.sellPrice,
      userName: x?.userName || "kalacan miya",
      payment: x?.payment || "unpaid",
      countInStock: x?.countInStock || 0,
      status: x?.status || "delivery",
    })
  );

  return (
    <>
      <ContentHeader header="Orders List" />
      <div>
        {rows ? (
          <div className="product-list">
            <div style={{ width: "90%" }}>
              <DataGrid
                autoHeight
                rows={rows}
                columns={columns}
                getRowId={(rows) => rows.id}
                components={{ Toolbar: GridToolbar }}
                checkboxSelection
                disableSelectionOnClick
              />
            </div>
          </div>
        ) : (
          "loading"
        )}
      </div>
    </>
  );
};

export default Orders;
