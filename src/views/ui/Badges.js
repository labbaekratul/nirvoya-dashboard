import axios from "axios";
import CheckboxTree from "react-checkbox-tree";
import { useEffect, useState } from "react";
import { Card, makeStyles } from "@material-ui/core";
import "react-checkbox-tree/src/scss/react-checkbox-tree.scss";
import {
  IoIosCheckboxOutline,
  IoIosCheckbox,
  IoIosArrowForward,
  IoIosArrowDown,
} from "react-icons/io";

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
    <div>
      {categories && (
        <Card className="p-2">
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
        </Card>
      )}
    </div>
  );
};

export default Badges;
