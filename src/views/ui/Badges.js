import axios from "axios";
import CheckboxTree from "react-checkbox-tree";
import { useEffect, useState } from "react";
import { Card } from "@material-ui/core";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
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
            }}
          />
        </Card>
      )}
    </div>
  );
};

export default Badges;
