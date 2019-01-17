# xhibit

#### Duration: 1 week

>Project 3 out of 4 during my Web Development Immersive course at General Assembly.

[View xhibit on Heroku](https://xhibit.herokuapp.com/#!/)
[View xhibit on [GitHub Repo](https://github.com/indiaderrick/wdi-project-three)

**Note**
- Due to time limitations, we did not plan to make this mobile responsive. For best experience view on a laptop/computer.

***

## Brief
The course instructors had partnered students with other classmates to design and collaboratively build a MEAN (MongoDB, Express, AngularJS, Node.js) stack app of their own design.

> **Server side**
* Use Mongo, Node & Express to build a server-side API
* API must have at least 2 related models, one of which should be a user
* API should include all RESTFUL actions for at least one of those models.
* Include authentication to restrict access to appropriate users
* Include at least one referenced or embedded sub-document
* Include automated tests

> **Client side**
* Use AngularJS
* Use SCSS
* Use Webpack & Yarn to manage your dependencies and compile your source code

## Concept

A site to list various galleries and the exhibitions that are currently on. Users are able to read reviews, bookmark exhibitions and contribute to comment threads about particular exhibitions.

## How we worked
With only 7 days to fulfil the brief and incorporate our ideas, we made sure we planned everything carefully.

- Time management. MVP focused project management.
- We decided to use Trello Technology to assign tasks and track progress.
- Daily morning stand up and git version control methods were used.

## Technologies Used
| Category | List |
| ---- | --- |
| Languages                            | Javascript (ECMAScript6), CSS3, Sass, HTML5 |
| Front-end Web Application Framework  | AngularJS |
| Server Environment                   | Node.js with Express.js |
| CSS Framework                        | Bulma |
| Third-party APIs                     | OpenStreetMap with Leaflet |
| Project Collaboration Tool           | Trello, Slack |
| REST client                          | Insomnia |
| Typefaces                            | Google Fonts |
| Text Editor                          | Atom |
| Browser                              | Chrome |
| Version control | Git and GitHub


## Visuals

##### All features
> Any user can access:
- Home page: Map interaction, Featured exhibitions filtered by top rated.
- Exhibition index, show and comment threads.
- Gallery index, show.
- Register

> Registered user can access:
- Log in and out
- Create, edit, delete gallery page
- Write exhibition reviews for a specific gallery
- Make comments on exhibition show page
- Bookmark the exhibition review
- View all bookmarks in own user profile page

### Home
![image width="150"](./screenshots/home.gif)

## Exhibitions

#### Index

<p align="center">
  <img height=380 alt="userProfile" src="./screenshots/exhibitionIndex.png">
</p>

#### Show

<p align="center">
  <img height=380 alt="userProfile" src="./screenshots/exhibitionShow.png">
</p>

#### New

<p align="center">
  <img height=380 alt="userProfile" src="./screenshots/exhibitionNew.png">
</p>

## Galleries

#### Index

<p align="center">
  <img height=380 alt="userProfile" src="./screenshots/galleryIndex.png">
</p>

#### Show
<p align="center">
  <img height=380 alt="userProfile" src="./screenshots/galleryShow.png">
</p>

#### New

<p align="center">
  <img height=380 alt="userProfile" src="./screenshots/galleryNew.png">
</p>

## Users

#### Login

<p align="center">
  <img height=380 alt="userProfile" src="./screenshots/login.png">
</p>

#### Profile

<p align="center">
  <img height=380 alt="userProfile" src="./screenshots/profile.png">
</p>


## Featured Piece of Code

As a whole, one of the biggest challenges for me during this project was incorporating a map API and making it interactive. I wanted to make it so that you could click on an exhibition/galley name and it would take you to the location on the map. I came across difficulties when trying to interact with the map with Angular, and decided to use DOM manipulation to resolve these issues. Among other things, the function below uses DOM manipulation to create a pop-up for the selected gallery/exhibition. It then runs a callback function which allows Angular to redirect to the relative page with its usual $state.go.

```[javascript]
  $scope.panMap = function(gallery) {
    const lat = gallery.latlgn.lat;
    const lgn = gallery.latlgn.lgn;
    mapLib.panTo([lat, lgn]);
    mapLib.clearMarkers();
    console.log('this is....', [lat, lgn]);
    const myDiv = document.createElement('div');
    myDiv.innerHTML = `${gallery.name}🏛`;
    myDiv.addEventListener('click', () => galleryPopUpClick(gallery));
    mapLib.addMarker([lat, lgn], myDiv);
};
```
###### callback function

```[javascript]
function galleryPopUpClick(gallery){
  $state.go('galleryShow', { id: gallery._id});
}
```


## Project Log

| Time | Action |
| ---- |:------:|
| Thursday ( **half day** ) | Project concept, code planning, wireframe |
| Sunday, Monday, Tuesday ( **3 days**)| Server side work. Initial front end set up. |
| Tuesday, Wednesday (**1.5 days**) | Client side work. Style / Scss. |
| Monday, Thursday (**1.5 days**) | Extra features, Bug fixing, Testing, Git, Deployment |

At the start, each team member was assigned a model to create and do all of the backend routes for. I was in charge of the Exhibition model which itself referenced the gallery model. When the initial setups were done, the members were free to handle more tasks based on the project management plan on Trello. Although we made sure to update and keep track of this, daily meetings were held to discuss our progress.

### Our Trello

![image width="150"](./screenshots/trello.gif)

## Future Features

  * Include different types of authentication - authorised exhibition reviewer and a regular user.
  * Fix flash message weirdness on Login.
  * Make mobile responsive.
  * Make it so that any authorised user can rate an exhibition. At the moment the rating is set by whoever uploads the exhibition review.

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**

***

## Contact
#### India Derrick
Email : indiaderrick@gmail.com


 [Portfolio](www.indiaderrick.com)| [LinkedIn](https://www.linkedin.com/in/indiaderrick/) | [GitHub](https://github.com/indiaderrick)


#### Jumee Lee
[GitHub](https://github.com/Jumee-LDN)
