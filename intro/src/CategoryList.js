import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }



  getCategories = () => {
    fetch('http://localhost:3000/categories')
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }))
  }

  render() {
    return (
      <div className='cursor-pointer '>
        <h5 className='fs-5 fw-bold'>{this.props.title}</h5>

        <ListGroup className='text-bg-dark mb-5 hover cursor-pointer '>
          {this.state.categories.map(category => (
            <ListGroupItem className='list-group-item list-group-item-action list-group-item-primary' active={category.categoryName===this.props.currentCategory?true:false}
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              <a href='#' className='fs-6 w-50 p-3 badge badge-success text-dark fst-italic fw-bold'>
            {category.categoryName}
              </a>
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    )
  }
}
