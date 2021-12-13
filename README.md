# CodeCards

CodeCards is a simple flash-card creator and storage solution for people learning to program. You can create your own decks, study them, edit your cards and delete them.

**Link to project:** [CodeCards](https://code-cards.herokuapp.com/)

![CodeCards Home Page](https://i.ibb.co/Pwf6hFj/Code-Cards-Home-Page.jpg)

## How It's Made:

**Tech used:** React, BootStrap ([ReactStrap](https://github.com/reactstrap/reactstrap)), CodeMirror ([React CodeMirror2](https://github.com/scniro/react-codemirror2)), React Router, Redux, Final-Form, JavaScript, Node, Express, Mongoose & MongoDB, Bcrypt, Concurrently, Dotenv, JSONWebToken

The initial idea was to create a flashcard app with integrated CodeBlock inputs. I started by building a basic express server hooked up to a Mongo database using JWT for authentication. The frontend is built with React and Redux. The Code inputs use CodeMirror via [@scniro](https://github.com/scniro)'s React Component. I wanted to keep the styling as simple as possible for the MVP so I made use of ReactStrap's pre-built Components where possible. I made the API as simple as possible with local auth; I used brypt for password management and JWT for authentication.

## Optimizations

The next steps for this project would be:

- Make use of CodeMirror's multiple language support and add the ability to choose your language for each Code Input.
- Implement an algorithm to grade the difficulty of each studied card: When you study a card, you can give it a rating (easy, medium, difficult) and that would determine how often that card reappears as you study.
- Include a deck/card sharing platform. Users can make their decks publicly available for other users to save to their own account. Users can also rate other decks and a search feature could be added to sort decks by rating, language, experience level etc.

## Lessons Learned:

A major takeaway from this project for me is state management. I've heard Redux described as too complicated or confusing but without it, state management would have been far more difficult. This is one of the largest applications I have built by myself and about halfway through I began feeling overwhelmed by the file structure but I was able to find some sense of balance by splitting my components and chunking out my focused tasks.
