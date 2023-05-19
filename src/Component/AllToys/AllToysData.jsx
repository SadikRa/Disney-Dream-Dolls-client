// eslint-disable-next-line react/prop-types
const AllToysData = ({ data, index }) => {
    const {
         // eslint-disable-next-line react/prop-types
         toyName, sellerName, subCategory, price, availableQuantity
    } = data;
  return (
    <tbody>
      <tr>
        <th>{index}</th>
        <td>{sellerName}</td>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{availableQuantity}</td>
        <td><button className="btn btn-primary">View Details</button></td>
      </tr>
    </tbody>
  );
};

export default AllToysData;
