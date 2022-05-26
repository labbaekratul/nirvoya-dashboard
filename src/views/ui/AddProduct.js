import { useState } from "react";
import cameraImage from "../../assets/images/icons/camera.png";
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
        <FormGroup className="w-50">
          <Label htmlFor="productName">Product Name</Label>
          <Input type="text" id="productName" placeholder="product name" />
        </FormGroup>
        <FormGroup className="w-50">
          <Label htmlFor="productCategory">Product Category</Label>
          <Input
            type="text"
            id="productCategory"
            placeholder="Product Category"
          />
        </FormGroup>
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
              <Label htmlFor="minimumPurchase">Minimum Purchase</Label>
              <Input type="text" id="minimumPurchase" placeholder="Pcs" />
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>Product Condition</legend>
              <FormGroup check>
                <Input name="condition" type="radio" />{" "}
                <Label id="conditonNew" check>
                  New
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input name="condition" type="radio" />{" "}
                <Label id="conditonSecondhand" check>
                  Secondhand
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>Imported Item (optional)</legend>
              <FormGroup check>
                <Input name="imported" type="radio" />{" "}
                <Label id="YesImported" check>
                  Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input name="imported" type="radio" />{" "}
                <Label id="noImported" check>
                  No
                </Label>
              </FormGroup>
            </FormGroup>
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
                <Label htmlFor="etalage">Good’s Etalage</Label>
                <Input type="text" name="etalnage" id="etalage" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="tags">Tags</Label>
                <Input type="text" name="tag" id="tag" />
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
