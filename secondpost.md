<a href="../index.html">Home</a>

# APIs: Fetching Data and an Example via Wikipedia #
#### 31 January 2022 ####
---

APIs, or Application Programming Interfaces, are an incredibly useful tool for accessing data from an external source. Retrieving, storing, and using this data typically requires a programmatic API call, which can be done using a language such as JavaScript. In this article, we'll be discussing how data can be retrieved via the fetch() function in JavaScript, then analyzing a commonly-used API that can be accessed through an HTML tag: the [Wikipedia API](https://en.wikipedia.org/w/api.php).

## fetch()ing Data ##
When working with an API, a common starting point is calling upon the API to retrieve some information. This info can then be stored in a variable within your application, which gives you plenty of options for using and manipulating that data. One way this can be done in JavaScript is using the fetch() function, which directly calls upon an API by treating the API's link as a parameter.

Below is an example fetch() call, which accesses an API called "FreeGeoIP" that returns a user's IP address when called:

![getGEOIPData() function breakdown](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6ir42tefplcrd62frr0x.png)

As you can see, the getGEOIPData() function handles the fetch() method call, where the API's link is one of the parameters passed into fetch(). The API call reaches out to the API at this link, then uses the response that is returned to determine whether to store data from the fetch() call. In this case, a successful API call would grant us access to information such as the IP address' geographic coordinates, city, and state, which we are storing further down in the getGEOIPData() function.

Since I'm working with [LitElement](https://lit.dev/) in this case, you can see I'm assigning the data I got back to global variables that were initially created in the application's constructor. This allows me to mutate the location information in my constructor, and carry my data changes throughout my entire web page, every time I make another call to the API--such as when I press a button to call it or refresh the page.

## The Wikipedia API ##
Using the data we stored in getGEOIPData(), we could learn more about the location that our IP address is tied to by working with the Wikipedia API. The Wikipedia API can be accessed using a fetch() call as well, or through [this](https://www.npmjs.com/package/@lrnwebcomponents/wikipedia-query) very cool HTML tag that simplifies the call into an embeddable component. For this article, we'll be using that tag, which is called `wikipedia-query`. This is incredibly useful, as a simple import and implementation of the tag allows us to embed a preview of a Wikipedia article directly into our web page, like so: 

![Embedded Wikipedia Article Image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o7ss8y6ll01pgsoj00i2.png)

All you'd end up adding to your HTML, or in my case the render() function in my Lit implementation, is a `wikipedia-query` tag with the search parameter tied to whatever I want. Below, you can see the three different options I went with--all of which are information I pulled from the IP address data returned from the API call discussed earlier:

![Wikipedia-query tags](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ngrg73lpu0ei5r5q5k3t.png)

Using a tag like those pictured above and an import call, I could very easily learn more about my current location based on the IP address that my device is using to access the internet--all in a web page!

> Here's the import statement you'd need to make it work: `import { WikipediaQuery } from '@lrnwebcomponents/wikipedia-query/wikipedia-query.js';`

All of this is possible because Wikipedia's powerful API allows a user to enter a search term into an API call, and returns bundled information that can then be elegantly presented to a user.

This is just scratching the surface of APIs and their capabilities, but it shows just how limitless their uses and possibilities can be!

