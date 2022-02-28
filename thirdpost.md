<a href="../index.html">Home</a>

# Getting Started with Docker: Docker Playground #
#### 24 February 2022 ####
---

In a previous article, I stumbled my way through a tutorial on [how to install Docker for Windows 11](https://dev.to/dronk6/getting-started-with-docker-windows-11-3ihn); however, I made it pretty clear I had _no idea_ how to use Docker (let alone what it was) at the time. So, I'm going to use this post to learn more by starting the tutorial on Docker's website: [Docker Playground](https://www.docker.com/101-tutorial), which is their free way to learn the system. I'm also going to talk a little about Docker itself, and discuss how to create a Dockerfile using [this microservice](https://www.docker.com/101-tutorial) as a backdrop. Let's get to it!

## Why is Docker so Powerful? ##
I talk a little about this in that post I linked above, but Docker is _incredibly_ powerful. This is because container-based architecture allows for the creation of instances of an application, allowing a developer to customize and replicate these instances as much as they want without interfering with anything else on a user's system. 

Docker takes this to another level, as it allows developers to toss everything needed to run an app into one easily-distributed package, then ship it to any system that can support the application. This makes the application easier to manage--because they're not relying on users to have (most) of the necessary dependencies--and infinitely scalable. Which is a huge deal, because it allows users to have a faster, lighter experience with an application that is still tied into the same backend.

With that in mind, let's try it out.

## Docker Playground ##
[Docker Playground](https://www.docker.com/101-tutorial) is Docker's free, online tutorial for learning Docker. Once you get through the initial steps, they provide a verbose guide that can get you going with a container. So, I'll go through the first couple of steps to get going then I'll leave the rest to you!

### Step 1: Access Play With Docker and Sign In ###
First, we'll navigate to the [Play with Docker](https://labs.play-with-docker.com/) starting page, which should look like this:

![Play with Docker Start Page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3d7zld6ibh1fhc4dpsg7.png)
 
Click Start, and you'll be prompted to sign in with a GitHub or Docker account. Feel free to do whichever is easier for you, but do not purchase anything if you decide to create a Docker account--the tutorial and Docker Playground are free.

### Step 2: Create a New Instance ###
Once you are signed in, click the "Add New Instance" button to create a virtualized container in Docker Playground. If you did so successfully, your page will look something like this:

![Instance Created Page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ffbt819cfbb429eehuyk.png)

### Step 3: Access the Docker 101 Tutorial ###
To access the Docker 101 Tutorial, you actually have to use the instance you've just created. So, type the following command in the Command Line Interface on Docker Playground and hit Enter:

` docker run -dp 80:80 docker/getting-started:pwd `

After this command processes, you'll see that a hyperlinked "**80**" has appeared next to the "Open Port" button at the top of the screen, like so:

![Port 80 Hyperlink Image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4fs6ze036aoqrqq5l6sq.png)

**_Click this link, and you'll be taken to the Docker 101 tutorial. From there, you can navigate through the tutorial and learn more about Docker via the Docker Playground!_**

## Creating a Dockerfile ##
A Dockerfile is a set of instructions, called a [Docker image](https://searchitoperations.techtarget.com/definition/Docker-image), which Docker uses to build your application within a container. As these instructions essentially define how the Docker container will handle the process of running your application, it is important that this file exists in your container prior to you attempting to run your application. Below, we'll look at an example of a Dockerfile that was created for a [NewsAPI Microservice](https://github.com/heyMP/ist402-docker/tree/master/labs/7-news-api-microservice), then show what having this Dockerfile properly configured can do for you.

> #### How are Dockerfiles created? ####
_When you're configuring a container, typically you'll be creating a custom Dockerfile. To do so, you just create a text file titled "Dockerfile" in your container's directory, then insert the commands necessary for your container._

### What's in a Dockerfile? ###
This can depend on what the Dockerfile is being used for, but in this case we actually have two: one for the visual web component, and another for the server that accesses an API. To avoid confusion, we'll just focus on the server. Below is what we have in that file: 

```
FROM node:12

WORKDIR /home/node/app

COPY package.json ./
RUN yarn install

COPY . .

CMD [ "yarn", "start" ]
```

The capitalized words in this file represent commands, which Docker uses to create an environment conducive for your application to run--regardless of the system it's on. Let's look at each of these commands:

#### FROM ####
The first thing we see here is the "FROM" instruction. This is always the first command in a Dockerfile, as it indicates that this Dockerfile is the base image is for the container.

#### WORKDIR ####
This instruction key establishes the working directory where subsequent commands will be run.

#### COPY ####
The first time this command is shown, it's copying our application's package.json file into the working directory. The way we can see this is the `./` that follows `package.json` in the command, which signifies that this is the destination for our copy. In this case, copying this will allow us to then use that package.json to install the app's necessary dependencies using:

#### RUN ####
RUN can be used in a variety of ways, but in this example it's being used to run a `yarn install` command--which installs all the dependencies needed to allow our application to run in the Docker container.

#### COPY (again) ####
We already talked a little about COPY, but this time the thing that's being copied is a shorthand, `.  .`, which indicates that everything (`.`) is being copied to the working directory, allowing the container to be configured to work with the application.

#### CMD ####
And finally, we have CMD. The CMD command takes in an array of parameterized commands, which will then be run when the Dockerfile is used to build your application. So, this CMD's array equates to `yarn start`, which is a command that uses [yarn](https://yarnpkg.com/) to start the application. As this is the final command in the Dockerfile, at this point our application is built within the container!

**_If you'd like to learn more about Dockerfile commands, [this article](https://takacsmark.com/dockerfile-tutorial-by-example-dockerfile-best-practices-2018/#dockerfile-key-instructions-best-practices) breaks each down with great examples._**

### What's Next? ###
At this point, you can run the application since you've successfully built it using the Dockerfile. In the case of [our example](https://github.com/heyMP/ist402-docker/tree/master/labs/7-news-api-microservice), this would involve running the `docker-compose up` command. Which allows you to view our example application's front-end, which lists hyperlinked articles from NewsAPI:

![NewsApp Results](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/avhsunt5pbax3pxu0t97.png)
 
