import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const ContentHeader = ({ header, nav }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2>{header}</h2>
        <div className="d-flex" style={{ gap: "15px" }}>
          <Button size="sm" color="primary" outline>
            View Etalage
          </Button>
          <Button size="sm" color="primary" outline>
            Set at once
          </Button>
          <Button
            size="sm"
            color="primary"
            className="px-4"
            onClick={() => navigate(`/add-product`)}
          >
            Add Product +
          </Button>
        </div>
      </div>
      {nav?.length > 0 && (
        <div className="d-flex my-4" style={{ gap: "15px" }}>
          {nav.map((item) => (
            <span className="d-inline-block text-info">
              {item.title}
              {`(${item.value})`}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentHeader;
