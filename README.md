# theWhiteFox bloggin

[build-a-developer-blog-from-scratch-with-gatsby-and-mdx](https://www.freecodecamp.org/news/build-a-developer-blog-from-scratch-with-gatsby-and-mdx/)

[gatsbyjs createPages](https://www.gatsbyjs.com/docs/node-apis/#createPages)

https://shields.io/

## CLI
``` yarn dev ```

## graphql
[graphql](http://localhost:3000/___graphql)

```
query PostBySlug($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    frontmatter {
      title
      date(formatString: "YYYYMMDo")
    }
  }
}
```

## errors 
Something went wrong installing the "sharp" module
https://github.com/gatsbyjs/gatsby/issues/20957

fs Path error
```
// fs error
exports.onCreateWebpackConfig = ({
  actions
}) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}
```
## Dependency
dump.js
https://www.gatsbyjs.com/docs/mdx/

https://www.freecodecamp.org/news/react-components-jsx-props-for-beginners/

https://blog.pusher.com/getting-started-with-react-router-v4/

https://css-tricks.com/how-to-add-lunr-search-to-your-gatsby-website/

https://mastery.games/post/tile-layouts/
