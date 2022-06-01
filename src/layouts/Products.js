import { Table } from "reactstrap";
import ContentHeader from "./ContentHeader";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import { useEffect, useState } from "react";
import axios from "axios";

const nav = [
  {
    title: "All Item",
    value: 100,
  },
  {
    title: "For Sale",
    value: 70,
  },
  {
    title: "Not For Sale",
    value: 10,
  },
  {
    title: "Drafts",
    value: 20,
  },
];

const Products = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const getProductList = async () => {
      const { data } = await axios.get(
        "https://oikko-online-shopping.herokuapp.com/api/products"
      );
      setProducts(data.products);
    };
    getProductList();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "image",
      headerName: "Image",
      width: 170,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="dashboard-product-img">
            <img src={params.row.image} alt="" className="dasg-img" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 170,
      editable: true,
    },

    {
      field: "category",
      headerName: "Category",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
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
      field: "countInStock",
      headerName: "CountInStock",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      width: 170,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            // onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            // onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  let rows = [];

  products?.map((x) =>
    rows.push({
      id: x._id,
      image: x?.displayImage?.data?.url,
      name: x?.name,
      category: x?.category || "default",
      price: x?.sellPrice,
      countInStock: x?.countInStock || 0,
      action: "delete",
    })
  );

  return (
    <>
      <ContentHeader header="Product List" nav={nav} />
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

export default Products;
