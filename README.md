# bookStore-mmahendra001

# React BookStore
This is react bookStore app.

We are using , react hooks like useState for state and context api to pass data down to child components.

We are using useEffect hooks for those lifecycle methods.

We have also created some custom hooks like , useForm for form state and useLocalStorage to store and manage localStorage.

Comments in our source code is just for learning purpose.

# Local Development

## To Start

### `Frontend`

Execute `npm install`

Get into bookStore main directory : `cd bookStore-mmahendra001`

To run front end  app in developent : `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### No of pages :
home/login :[http://localhost:3000](http://localhost:3000)

booklist : [http://localhost:3000/list](http://localhost:3000/list)

booksingle : [http://localhost:3000/book/:id](http://localhost:3000/book/:id)

addbook : [http://localhost:3000/add](http://localhost:3000/add)

updatebook : [http://localhost:3000/update/:id](http://localhost:3000/update/:id)

You will see live changes as you make any updates.

You can test all CRUD operations here at front end and it will update our database too.


Run Backend at the same time


### `Backend`

Get into backend  directory : `cd bookStore-mmahendra001/backend`

Execute `npm install`

Global install `npm install -g nodemon`

To run backend in developent : `nodemon server`

read backend/README.md for more info about backend


# Production
### `npm run build`

Done with developement then go ahead and build it : `npm run build`

Builds the app for production to the `build` folder.

Your app is ready to be deployed!

I am still working on this project but here are some links :

This is Vercel Deploy  [link ](https://great-read.vercel.app/ )

This is Netlify Deploy [link](https://great-reads-mmahendra001.netlify.app/)
