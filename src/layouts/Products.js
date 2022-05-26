import { Table } from "reactstrap";
import ContentHeader from "./ContentHeader";

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
  return (
    <>
      <ContentHeader header="Product List" nav={nav} />
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Products;
