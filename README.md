# Advanced Internet Applications – laboratory - React

Description : The aim of the exercice was to write a React app allowing me to keep track of my collection of Disney movies.  
In this description, I will explain how to handle the application, then I will describe some functions, and finally the problems I met and the conclusion.


## Handle the application

When you will run the application, it will be display as following :  
* On the top, a navbar which contains the search bar. When you'll type on the search bar, it will directly search and display the movies which begin by what you have typed. For instance, if you typed "a", it will display all the movies begining by "a". If you add "l", it will display all the movies which begin by "al", and so on. It doesn't take into account the case, so if you type "a", it will display all movies begining by "a" or "A".
* Under the navbar, you have another navbar which contains the "sorting bar". When you enter a number, it will display only the movies for which their rating is equal or above to the number you have indicated.
* Under the 2 navbars, there are the movies cards. For each displayed movie, you can either delete it, or edit his rating. If you want to udapte its rating, you could only enter numbers, if you try to enter something else, the application will say you that you can't do it
* Of course, when the search bar and "sorting bar" are empty, all the movies will be displayed
* Finally, we have a form to add new movie in the collection. Please notice that to add the image, you must add yourself your image in the folder "Images", located in the public folder of the project. Then enter the name of your image in the appropriate field.

## Search bar

The function to display only movies which begining by the content of the serach bar is the following (I don't show the code for the component) :
```
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
  ```
  First, we will retrieve the value contained in bar, then we put all char to lower case, then we transform the string in char array. Secondly, we will compare each movie name with our array. Of course, before to compare, we transform the movie name into char array to be able to compare each letter. If the 2 letters are differents, we set the varible "check" of the movie as false. After we did this opeation, we will only display the movie for wich "check" is true.
 ``` 
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
  
  ```
  
  ## Sorting bar
  
  The function to filter only the movies which have a rating above or equal to the number in the bar is the following :
  
   ```
  handleChangeSort(event){
            const {name, value} = event.target
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
  ```
  
  As for the search bar, we will first retrieve the value if the sorting bar, and then compare it with the rating of each movie. If the movie rating is below, we define its "checkSort" as false. Such as we did we with the search, we'll only display the movies for which their checkSort is true.
  
   ``` 
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
  
  ```
  As you can notify, in the if we add the logic operator "&" to take into account the 2 bars. For instance, if you set the minimum rating as 5, and you type a movie name which has a rating under 5, the app won't display movie.
  
  ## Problems met
