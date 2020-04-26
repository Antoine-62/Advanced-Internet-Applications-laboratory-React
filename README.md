# Advanced Internet Applications – laboratory - React

Description : The aim of the exercice was to write a React app allowing me to store, rank and search throughof my collection of Disney movies.  
In this description, I will explain how to handle the application, then I will describe some functions, and finally the problems I met and the conclusion.


## Handle the application

When you will run the application, it will be display as following :  
* On the top, a navbar which contains the search bar. When you'll type in the search bar, it will directly search and display the movies which begin by what you have typed. For instance, if you typed "a", it will display all the movies begining by "a". If you add "l", it will display all the movies which begin by "al", and so on. It doesn't take into account the case, so if you type "a", it will display all movies begining by "a" or "A".
* Under the navbar, you have another navbar which contains the "sorting bar". When you enter a number, it will display only the movies for which their rating is equal or above to the number you have indicated. Of course, you can only enter number (it would make no sense if you enter a letter).
* Under the 2 navbars, there are the movies cards. For each displayed movie, you can either delete it, or edit his rating. If you want to udapte its rating, you could only enter numbers, if you try to enter something else, the application will say you that you can't do it
* Of course, when the search bar and "sorting bar" are empty, all the movies will be displayed
* Finally, we have a form to add new movie in the collection. Please notice that to add the image, you must add yourself your image in the folder "Images", located in the public folder of the project. Then enter the name of your image in the appropriate field.
* Sadly, I didn't have time to make the app responsive.

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
  First, we will retrieve the value contained in bar, then we put all char to lower case, then we transform the string in char array. Secondly, we will compare each movie name with our array. Of course, before to compare, we transform the movie name into char array to be able to compare each letter. If the 2 letters are differents, we set the variable "check" of the movie as false. After we did this opeation, we will only display the movie for wich "check" is true.
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
  ```
  
  In the begining of the function, we check if the user enter a numbeer. If he didn't enter a number, we don't take into account what he typed, and say him to only enter number.  
  Then, such as for the search bar, we will first retrieve the value if the sorting bar, and then compare it with the rating of each movie. If the movie rating is below, we define its "checkSort" as false. Such as we did we with the search, we'll only display the movies for which their checkSort is true.
  
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
  As you can notify, in the if we add the logic operator "&" to take into account the 2 bars. For instance, if you set the minimum rating as 5, and you type a movie name which has a rating under 5, the app won't display the movie.
  
  ## Problems met
  
 * The main problem I met in this task was to add an image. As you can see, I have bypassed the problem by cheating (I ask to user to add himself his image in a folder...shame on me). Honnestly I don't really know how we can resolve this problem since we need to upload the file in our folder to define a path. We have only access to the public folder of the project.  
   
* Other problems I met are the syntax errors : because we must define component in different files, I made too many syntax errors because when I updated a variable name somewhere, I must changed it everywhere, and each time I forgot to updated a variable somewhere in the project. If you know the time I spent to solve stupid errors like this...

* It's all, no other problems met
 
## Conclusion

In this exercice, I learned to create a project from scratch with React, and I saw there is a lot of advantadges by using it.  I met some problems which took me a lot of time, but almost all of them were stupid erros (stupid = syntax). Honnestly, I am really exiting to the idea to be able to use it with a backend to create a website.  
I thank my teacher, sir Piernik, for this exercice and new skills acquired.
