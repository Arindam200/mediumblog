# @arindam1729/mediumblog

This npm package allows you to easily post a blog article to the dev.to API. It provides a function called `postBlog` that takes in an article object and an API key as parameters. The function returns a promise that resolves to the response data from the API.

## Installation

To install the package, run the following command:

```
npm install @arindam1729/mediumblog
```

## Usage

First, import the package:

```javascript
const { postBlog } = require('@arindam1729/mediumblog');
```

Then, use the `postBlog` function to post a blog article:

```javascript
const article = {
  // Specify the properties of the article object here
};

const apiKey = 'YOUR_API_KEY';

postBlog(article, apiKey)
  .then(response => {
    // Handle the response data here
  })
  .catch(error => {
    // Handle any errors here
  });
```

Make sure to replace `'YOUR_API_KEY'` with your actual dev.to API key.

## Example

Here's an example of how to use the `postBlog` function:

```javascript
const article = {
     title: "Publishing Article on Medium | by Arindam",
     contentFormat: "markdown",
     content: "# Here's a Basic markdown.\n***\nHope This Helps You",
     canonicalUrl: "https://arindam1729.hashnode.dev",
     tags: ["Medium", "Blog", "Arindam"],
     publishStatus: "public"
}

const apiKey = 'YOUR_API_KEY';

postBlog(article, apiKey)
  .then(response => {
    console.log('Article posted successfully:', response);
  })
  .catch(error => {
    console.error('Error posting article:', error);
  });
```

## API

### postBlog(article, apiKey)

- `article` (Object): The article object to be posted. It should contain properties such as `title`, `body`, and `tags`.
- `apiKey` (string): The API key required to access the dev.to API.

Returns a promise that resolves to the response data from the API.

## License

This project is licensed under the MIT License.