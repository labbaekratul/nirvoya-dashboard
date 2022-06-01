import { useState } from "react";
import cameraImage from "../../assets/images/icons/camera.png";
import Select from "react-select";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const AddProduct = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const statuses = [
    { value: "processing", label: "Processing" },
    { value: "pendding", label: "Pendding" },
    { value: "published", label: "Published" },
  ];

  const [image, setImage] = useState({
    profile: cameraImage,
  });

  const uploadImage = (e) => {
    const uploadIcon = document.getElementById("uploadIcon");
    const variationPrv = document.getElementById("variationPrv");

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        uploadIcon.style.display = "none";
        variationPrv.style.display = "block";
        setImage({ profile: reader.result });
      } else {
        setImage({ profile: "" });
        uploadIcon.style.display = null;
        variationPrv.style.display = null;
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Form>
      <Card className="p-3 mb-3">
        <CardTitle tag="h4">Product Information</CardTitle>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="productName">Product Name</Label>
              <Input type="text" id="productName" placeholder="product name" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="productCategory">Product Category</Label>
              <Input
                type="text"
                id="productCategory"
                placeholder="Product Category"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="status">Status</Label>
              <Select id="status" options={statuses} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="mainCategory">Category Main</Label>
              <Select id="mainCategory" options={options} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="category">Category</Label>
              <Select id="category" options={options} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subCategory">Sub Category</Label>
              <Select id="subCategory" options={options} />
            </FormGroup>
          </Col>
        </Row>
      </Card>
      <Card className="p-3 mb-3">
        <CardTitle tag="h4">Product Detail</CardTitle>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="pricePerItem">Price per Item</Label>
              <Input type="text" id="pricePerItem" placeholder="USD" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="productWeight">Weight</Label>
              <Input type="text" id="productWeight" placeholder="Gram(gr)" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="stock">Stock</Label>
              <Input type="text" id="stock" placeholder="Pcs" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="discountPrice">Discount Price</Label>
              <Input
                type="number"
                id="discountPrice"
                placeholder="discount price "
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="discountPeriod">Discount Period</Label>
              <Input
                type="text"
                id="discountPeriod"
                placeholder="discount period "
              />
            </FormGroup>
            <Card>
              <Row>
                <Col>
                  <FormGroup>
                    <Label htmlFor="color">Color</Label>
                    <Input type="color" id="color" />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label htmlFor="productCode">Product Code</Label>
                    <Input type="text" id="productCode" />
                  </FormGroup>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Card>
      <Card className="p-3 mb-3">
        <Row style={{ gap: "24px" }}>
          <Col>
            <Card className="p-3">
              <CardTitle>Variation</CardTitle>
              <CardBody>
                Set your variation on your products, so it can make buyers
                easily choose the product without writing the notes
                <br />
                <Button color="primary" size="sm" className="px-3 my-3">
                  Set Variation
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card
              className="p-3"
              style={{
                width: "300px",
                height: "300px",
              }}
            >
              <div
                className="w-100 h-100 d-flex flex-column justify-content-center align-items-center"
                style={{ border: "2px dashed black" }}
              >
                <img
                  src={image.profile}
                  className="variationPrv w-100"
                  id="variationPrv"
                  alt=""
                  style={{ objectFit: "cover", display: "none" }}
                />
                <Input
                  onChange={(e) => uploadImage(e)}
                  type="file"
                  id="inputFile"
                  accept="image/*"
                  placeholder="variation image"
                  style={{ display: "none" }}
                />
                <label htmlFor="inputFile" className="d-flex flex-column w-75">
                  <img
                    src={image.profile}
                    className="uploadIcon"
                    id="uploadIcon"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                  Browse Image form drive
                </label>
              </div>
            </Card>
          </Col>
          <Col>
            <Card
              className="p-3"
              style={{
                width: "300px",
                height: "300px",
              }}
            ></Card>
          </Col>
        </Row>
      </Card>
      <Row>
        <Col>
          <Card className="p-3">
            <CardTitle>Product Description</CardTitle>
          </Card>
        </Col>
        <Col>
          <Card className="p-3">
            <CardTitle>Good's Grouping</CardTitle>
            <CardBody>
              <FormGroup>
                <Label htmlFor="metaTags">Meta Tags</Label>
                <Input type="text" name="metaTag" id="metaTags" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Input
                  type="textarea"
                  name="metaDescription"
                  id="metaDescription"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="sku">SKU</Label>
                <Input type="text" name="sku" id="sku" />
              </FormGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <div className="d-flex justify-content-end">
        <div className="w-45 d-flex" style={{ gap: "15px" }}>
          <Button type="button" color="primary" outline>
            Save to Draft
          </Button>
          <Button type="button" color="primary" outline>
            Sell and Add Another
          </Button>
          <Button type="button" color="primary">
            Sell
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default AddProduct;
