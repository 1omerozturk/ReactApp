import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { Button } from 'reactstrap'

export default class ProductList extends Component {
 

  render() {
    return (
      <div >
        <h3>
          {this.props.title} {this.props.currentCategory}
        </h3>
        <Table className='table-info table-bordered table-hover'>
          <thead>
            <tr >
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>quantity Per Unit</th>
              <th>Unit In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody color='info'>
          {this.props.products.map(product => (
            <tr key={product.id}>
               <th scope="row">{product.id}</th>
              <td>{product.productName}</td>
              <td>{product.unitPrice}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitsInStock}</td>
             <td> <Button  onClick={()=>this.props.addToCart(product)}  color="info">Add</Button></td>
            </tr>
          ))}
          
          </tbody>
        </Table>
      </div>
    )
  }
}
