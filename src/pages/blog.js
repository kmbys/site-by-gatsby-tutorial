import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="ブログ記事一覧">
      <ul>
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.name}>
              <h2>{node.frontmatter.title}</h2>
              <p>{node.frontmatter.date}</p>
              <MDXRenderer>{node.body}</MDXRenderer>
            </article>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "YYYY年M月D日")
          title
        }
        id
        body
      }
    }
  }
`

export default BlogPage
