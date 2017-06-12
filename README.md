# chalkitup

Crowd Sourced, Reddit/Quora Style Message Board for Senior Developers & Tech Pros

Your goal is to create a question and answer message board, similar to Reddit, Quora, StackOverflow or other such sites. Users should be able to submit a question, then other users can respond with answers.

The message board should allow junior developers and newbies learning to code to ask questions that senior developers, product owners, senior designers, recruiters, and other tech professionals can answer.

You're welcome to further refine the audience your specific message board serves, too. (For example, your message board's community could focus on: Students who have less than a year experience, tech pros who are people of color, LGBTQ, rural coders, Portland or Seattle area only, students over the age of 40, those learning specific languages or technologies, etc.)

## Planning

1. Configuration/dependencies
  * Git; required to clone project locally
  * NodeJS; required to run ember and associated dependencies

2. Specs
  * Spec 1: Click "Ask Question" > opens question form > Fill in name, job, additional details > save button > new question is displayed
  * Spec 2: Click "See more answers" > all answers for question are displayed > click "Answer question" > fill in answer, name, job > save button > answer is displayed

3. Integration
  * Index page contains post component, which displays all posts
  * Index page contains new-post component, for creating a new post
  * Post component contains edit-post component, for editing post
  * Post component contains comment component, for viewing all comments associated with post
  * Comment component contains edit-comment component, for editing component

4. UX/UI
  * Use bootstrap to make web app professional / portfolio ready

5. Polish
  * Add icons using font-awesome to improve UX/UI

## To Be Completed Later

* Update About and Contact links, or remove them in favor of something else
* Add user auth with profile creation
* Add upvoting on answers, (and questions?) to determine the most popular answer

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd chalkitup`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
