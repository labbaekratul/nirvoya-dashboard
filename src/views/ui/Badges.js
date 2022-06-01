import axios from "axios";
import CheckboxTree from "react-checkbox-tree";
import { useEffect, useState } from "react";
import { Card, makeStyles } from "@material-ui/core";
import Select from "react-select";
import "react-checkbox-tree/src/scss/react-checkbox-tree.scss";
import {
  IoIosCheckboxOutline,
  IoIosCheckbox,
  IoIosArrowForward,
  IoIosArrowDown,
} from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const statuses = [
  { value: "processing", label: "Processing" },
  { value: "pendding", label: "Pendding" },
  { value: "published", label: "Published" },
];

const Badges = () => {
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  const onCheck = (checked) => {
    setChecked({ checked });
  };

  // onExpand = expanded => {
  //   this.setState({ expanded });
  // };

  useEffect(() => {
    const getCategory = async () => {
      const { data } = await axios.get(
        "https://oikko-online-shopping.herokuapp.com/api/category"
      );
      setCategories(data);
    };
    getCategory();
  }, []);

  const renderCategories = (categoriess) => {
    let myCategoriess = [];
    categoriess?.forEach((category) => {
      myCategoriess.push({
        label: category.name,
        value: category._id,
        children:
          category?.children?.length > 0 &&
          renderCategories(category?.children),
      });
    });
    return myCategoriess;
  };

  return (
    <div style={{ height: "90vh" }}>
      <Row style={{ gap: "5px" }} className="h-100">
        <Col>
          <Card className="p-2 h-100">
            <div className="d-flex">
              <Button color="primary" size="sm" className="px-3 mb-2">
                Collapse
              </Button>
              <Button color="primary" size="sm" className="px-3 mb-2 ms-2">
                <FaPlus /> Category
              </Button>
            </div>
            {categories && (
              <CheckboxTree
                nodes={renderCategories(categories?.categoryList)}
                checked={checked}
                expanded={expanded}
                onCheck={(checked) => setChecked(checked)}
                onExpand={(expanded) => setExpanded(expanded)}
                icons={{
                  check: <IoIosCheckbox />,
                  uncheck: <IoIosCheckboxOutline />,
                  halfCheck: <IoIosCheckboxOutline />,
                  expandClose: <IoIosArrowForward />,
                  expandOpen: <IoIosArrowDown />,
                  // expandAll: <span className="rct-icon rct-icon-expand-all" />,
                  // collapseAll: <span className="rct-icon rct-icon-collapse-all" />,
                  // parentClose: <span className="rct-icon rct-icon-parent-close" />,
                  // parentOpen: <span className="rct-icon rct-icon-parent-open" />,
                  // leaf: <span className="rct-icon rct-icon-leaf" />,
                }}
              />
            )}
          </Card>
        </Col>
        <Col>
          <Card className="p-2 h-100">
            <Form>
              <FormGroup>
                <Label htmlFor="categoryName">
                  Name <span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  name="categoryName"
                  id="categoryName"
                  placeholder="name"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="parentCategory">
                  Parent <span style={{ color: "red" }}>*</span>
                </Label>
                <Select
                  name="parentCategory"
                  id="parentCategory"
                  options={statuses}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="categoryDescription">Description</Label>
                <Input
                  type="textarea"
                  name="categoryDescription"
                  id="categoryDescription"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="categoryDescription">Order</Label>
                <Input
                  type="number"
                  name="categoryDescription"
                  id="categoryDescription"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="status">
                  Status <span style={{ color: "red" }}>*</span>
                </Label>
                <Select
                  name="categoryStatus"
                  id="categoryStatus"
                  options={statuses}
                />
              </FormGroup>
              <Button className="d-inline-block" color="info">
                Save
              </Button>
              <Button className="d-inline-block ms-3" outline>
                Save & Edit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Badges;
