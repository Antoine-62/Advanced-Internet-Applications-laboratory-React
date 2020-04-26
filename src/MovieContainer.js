import React, {Component} from "react"

import MovieComponent from "./MovieComponent"
import NavBar from "./NavBar"
import Form from "./FormContainer"
import disneyMoviesData from "./disneyMoviesData"
import Card from "react-bootstrap/Card"


class Movie extends Component {
    constructor() {
        super()
        this.state = {
            Sort: "",
            Search: "",
            movies: disneyMoviesData
            
        }
        this.clickChange = this.clickChange.bind(this)
        this.clickDelete = this.clickDelete.bind(this)
        this.clickEdit = this.clickEdit.bind(this)
        this.handleChangeEdit = this.handleChangeEdit.bind(this)
        this.handleChangeSearch = this.handleChangeSearch.bind(this)
        this.handleChangeSort = this.handleChangeSort.bind(this)
    }

    handleChangeSort(event){
            const {name, value} = event.target
            
            if(isNaN(value))
            {
                alert("Please don't enter letters")
            }
            else
            {
                this.setState({
                    [name]: value
                })
                let value2 = parseFloat(value)
                this.setState(prevState => {
                    const movies = prevState.movies.map((movie) => {
                    let rat=parseFloat(movie.rating)
                    if (rat < value2) {
                        movie.checkSort=false;
                      return movie;
                    }
                movie.checkSort=true;
                return movie;
                });
                return {
                  movies,
                };
              });
            }
        }

    handleChangeSearch(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
        let value2 = value.toLowerCase()
        let val = value2.split("")
        this.setState(prevState => {
            const movies = prevState.movies.map((movie) => {
            let nam1=movie.name.toLowerCase()
            let nam=nam1.split("")
            for(var i=0; i<val.length;i++)
            {
                console.log("val :"+val[i])
                console.log("name :"+nam[i])
                if (val[i] !== (nam[i])) {
                    movie.check=false;
                  return movie;
                } 
            }
            movie.check=true;
            return movie;
            });
            return {
              movies,
            };
          });

    }
    

    handleChangeEdit(event) {
        const {id, value} = event.target
        let nid=parseFloat(id);
        if(isNaN(value))
        {
            alert("Please don't enter letters")
        }
        else
        {
            this.setState(prevState => {
                const movies = prevState.movies.map((movie) => {
                let movId=movie.id
                if(movId === nid)
                {
                    movie.newRating = value;
                }
                return movie;
                });
                return {
                  movies,
                };
              });
    }
    }
    

    getNewId(){
        var newId=0;
        this.state.movies.map(movie =>
            {
                if(movie.id>newId)
                {
                    newId=movie.id;
                }
            })
        newId = newId+1;
        return newId;

    }

    //add a new element
    clickChange(nameC, descriptionC, ratingC, imageC){
          var idC = this.getNewId()
          var imageC2="Images/"+imageC
          const movie = {
            id: idC,
            check:true,
            checkSort: true,
            name: nameC,
            description: descriptionC,
            image: imageC2,
            rating: ratingC,
            newRating: ""
          }
          this.setState(prevState => {
            return {
                movies: prevState.movies.concat(movie)
            }
        })
    }

    clickEdit(id, newRating){
        this.setState(prevState => {
            const movies = prevState.movies.map((movie) => {
              if (movie.id === id) {
                  movie.rating=newRating;
                  movie.newRating="";
                return movie;
              } else {
                return movie;
              }
            });
            return {
              movies,
            };
          });
        };
       


    clickDelete(id){
        this.setState(prevState => {
          return {
              movies: prevState.movies.filter(movie => movie.id !== id)
          }
      })
    }


    render() {
    const movieComponents = this.state.movies.map(movie =>
        
            movie.check & movie.checkSort ?
         <MovieComponent 
            key={movie.id} 
            id={movie.id} 
            name={movie.name}
            description={movie.description} 
            image={movie.image}
            rating={movie.rating}
            newRating={movie.newRating}
            clickDelete={this.clickDelete}
            clickEdit={this.clickEdit}
            handleChangeEdit={this.handleChangeEdit}
        /> : null
        


        
    )

    
    return (
        <div>
            <NavBar
                Sort={this.state.Sort}
                Search={this.state.Search}
                handleChangeSearch={this.handleChangeSearch}
                handleChangeSort={this.handleChangeSort}
            />        
            <Card bg="secondary" style={{ width: '100%' }}>
                {movieComponents}     
            </Card>  
          
            <Form 
                clickChange={this.clickChange}
            />
        </div>
       
    )
    }
}

export default Movie