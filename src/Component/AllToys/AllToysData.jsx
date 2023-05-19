import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AllToysData = ({ data, index }) => {
    // eslint-disable-next-line react/prop-types
    const { toyName, sellerName, subCategory, price, availableQuantity, _id } = data;
  return (
    <tbody>
      <tr>
        <th>{index}</th>
        <td>{sellerName}</td>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{availableQuantity}</td>
        <Link to={`/detailsPage/${_id}`}><button className="btn btn-primary">View Details</button></Link>
      </tr>
    </tbody>
  );
};

export default AllToysData;
