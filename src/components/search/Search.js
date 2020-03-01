import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';
import ImageResults from '../image-results/ImageResults';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchText: '',
        amount: 10,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '10377222-0f40dccc23fe8d67ffa15eacb',
        images: []
      };
    }

      onTextChange = e => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val }, () => {
          if (val === '') {
            this.setState({ images: [] });
          } else {
            axios
              .get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                  this.state.searchText
                }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
              )
              .then(res => this.setState({ images: res.data.hits }))
              .catch(err => console.log(err));
          }
        });
      };
    
      onAmountChange = e => {
        const value = e.target.value;
        this.setState({ amount: value });
      }
      render() {
      
        const styleInput={marginTop:'1rem', marginLeft:'0.5rem'};
       
        console.log(this.state.images);
        return (
          <div>
            <TextField
              name="searchText"
              value={this.state.searchText}
              onChange={this.onTextChange}
              label="Search For Images"
              fullWidth={true}
            />
            <br />        
            <FormControl style={styleInput}>
              <Select             
              name="amount"
              value={this.state.amount}
              onChange={this.onAmountChange}
               >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={50}>50</MenuItem>

            </Select>
            <FormHelperText>Amount</FormHelperText>
            </FormControl>
          
            <br />
            
            {this.state.images.length > 0 ? (
              <ImageResults images={this.state.images} />
            ) : null}
          </div>
        );
      }
    }
    
    export default Search;