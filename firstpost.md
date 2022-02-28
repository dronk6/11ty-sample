<a href="../index.html">Home</a>

# Getting Started with Docker: Windows 11 #
#### 16 January 2022 ####
---

Before writing this article, I had never worked with Docker before. In fact, I didn't even know what it was. However, through a lot of Googling and trial-and-error, I found enough information to go from crawling to slowly walking. Let's get you there too.

In this demo, I'll be covering what Docker is, how to download it on Windows 11 OS, and getting Docker Desktop up and running with an example GitHub repo.

## What is Docker? ##
Docker is a platform-as-a-service (PAAS) software that allows users to put their entire application into a virtual "container." This means that, rather than using your desktop to host an application, you can isolate your entire app within a single container--allowing you to manage multiple applications at once and utilize multiple versions of required software for your applications. All of this means you can manipulate your applications with more power and flexibility than was previously possible.

_For more information about containers and Docker's logic, go to [this guide](https://www.docker.com/resources/what-container)._

## Downloading Docker for Windows 11 ##
_Before we get into the steps, you need to make sure your machine is running **Windows 11** and is **at least 64-bits**. You can do this by navigating to the Windows Settings application and going to System > About. In this menu, you'll find your System Type and Windows Edition._

### Step 1: Download and Install Docker Desktop ###
Click [this link](https://www.docker.com/products/docker-desktop) and click the "Download for Windows" button. Your version should be automatically detected.

Once you've downloaded the installer, run it. At this point, you'll be taken through the setup wizard. When you finish this, you should be able to open the application.

### Step 2: Uh oh. ###
Docker has some ancillary tools that you also need to install just to get it up and running, so you'll likely receive an error when you first try to open it. It happened to me, and this is the error message I saw:

![Install WSL 2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z13u1421kpytg6rszrww.png)

_Do not worry, the resolution is very simple..._

### Step 3: Install WSL 2 ###
WSL, or the Windows Subsystem for Linux, helps ensure Docker can compatibly run with your Windows computer. To install it, you can click the link in the error message shown above if it pops up on your screen when you try to open Docker, or you can go to [this link](https://docs.microsoft.com/en-us/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package).

Go through steps four and five of the instructions in that link, then try closing Docker and opening it again. 

### Step 4: The Tutorial ###
When you re-open Docker, it should open successfully and you'll see a tutorial. I highly recommend going through it, as it's brief but helpful in getting you acclimated to the system.

### (Optional) Step 5: Sign in/up ###
Since this was my first time using Docker, I had to sign up using the button in Docker Desktop. If you've never used Docker, it's worth creating an account so you can use the platform to its fullest.

_**At this point, you've successfully installed Docker Desktop! Next, we'll take a look at how to get started with an example demo.**_

## Example with HAXcms ##
To get started, we'll need a GitHub repo with a fully-fledged application. In my case, I'll be using [HAXcms](https://github.com/elmsln/haxcms): a content management system that encapsulates the incredibly accessible authoring experience of [HAX](HAXTheWeb.org). Let's get going!

### Step 1: The Dev Environments Tab ###
Navigate to the "Dev Environments" Tab in Docker Desktop, and click the "Create" button. Click the "Get Started" button in the guide that pops up, and the following screen should appear: 

![Create a Dev Environment](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/czzwtb4zd5h5kmc0kidw.png)

_As you can see in the image, I've already put a link into the "Enter the Git Repository" box. Below, I'll show you where to get a link to put in this box._

### Step 2: Getting the HTTPS Link From a GitHub Repo ###
Navigate to your GitHub repo of choice, and select the green "Clone" button. A dropdown menu should populate, and you'll want to copy the link that appears in the HTTPS tab. Kind of like this: 

![Clone a Repo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4ukhzvyyy3w0dfj52nxd.png)

Paste the link you copied into the "Enter the Git Repository" box, and click the "Continue" button.

The Dev Environment will take a little time to generate, then you'll see a page indicating that it's all set up.

### Step 3: Get Going in VSCode ###
At this point, your Dev Environments tab in Docker Desktop should be showing the container you created and your Containers/Apps tab will show that your container is running. Way to go!

Now, you can start working with your container in VSCode. To do this, click on the container listed in your Dev Environments tab. It should look similar to this: 

![Dev Environments with Running Container](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z6yn4g3wx3gmfitmt4ue.png)

To open VSCode, just click the button. When you do, you may have to install one or two additional tools--or even VSCode itself if you don't have it already. If this is the case, follow the steps provided and you'll be viewing your container's code in no time!


**_For more information about Docker and initial steps, feel free to view this [guide](https://medium.com/free-code-camp/docker-simplified-96639a35ff36#06d9) from freeCodeCamp. I found it very useful, especially for learning about Docker's basic commands. Good luck!_**




