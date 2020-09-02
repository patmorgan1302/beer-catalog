import React, { Component } from 'react';
import axios from 'axios';

export default class Catalog extends Component {
  constructor(){
    super();
    this.state = {
      search : null,
      beers : []
    }
  };

  componentDidMount() {
    axios.get(`https://api.punkapi.com/v2/beers?page=2&per_page=80`)
      .then(res => {
        const beers = res.data;
        console.log(res.data)
        this.setState({ beers });
      }
    )
  };

  searchSpace = e => {
    this.setState({ search: e.target.value })
  };

  render(){
    let NewBeers = this.state.beers;
    const items = NewBeers.filter((data) => {
      if(this.state.search == null)
          return data
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.tagline.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    })
    .map(data=>{
      return(
        <div>
          <ul>
            <li key={data.id} style={{listStyle:'none'}}>
              <span>{data.name}</span>
              <span>{data.tagline}</span>
              <span>{data.first_brewed}</span>
            </li>
          </ul>
        </div>
        )
      })

    return (
      <div>
        <input style={{ marginBottom: '35px', marginTop: '25px' }}className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>this.searchSpace(e)} />
        <button className ="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        {items}
      </div>
    )
  }
}

