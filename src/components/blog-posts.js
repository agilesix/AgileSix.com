/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

 import React from "react"
 import { StaticQuery, graphql } from "gatsby"
 import Img from "gatsby-image"
 
 const BlogPosts = ({ children, selectedBlogPosts, featuredOnly }) => (
   <StaticQuery
     query={graphql`
       query BlogPostQuery {
         allMarkdownRemark(
             filter: { frontmatter: {templateKey: {eq: "blogpost"}} }
         ) {
           edges {
             node {
               id
               html
               fields {
                 slug
                 gitCreatedTime
                 gitModifiedTime
               }
               frontmatter {
                 title
                 shortdescription
                 featured
                 background {
                   childImageSharp {
                     fluid(maxWidth: 900) {
                     ...GatsbyImageSharpFluid
                     }
                   }
                 }
               }
             }
           }
         }
       }
     `}
    render={(data) => {
      const blogposts = data.allMarkdownRemark.edges.sort((a, b) => {
        // TODO -- sort blog posts outside of query until we can find a reliable way to sort
        // blog posts by publish or modified date in query
        const timeA = a.node.fields.gitModifiedTime;
        const timeB = b.node.fields.gitModifiedTime;
        return (timeA > timeB) ? -1 : ((timeA < timeB) ? 1 : 0);
      });
       return (
         <div className={'flex flex-wrap md:-mx-2'}>
           {blogposts.map(blogpost => {
             let display = true;
             if (featuredOnly) {
               if (blogpost.node.frontmatter.featured) {
                 display = true;
               } else {
                 display = false;
               }
             }
 
             if (!featuredOnly && selectedBlogPosts) {
               display = selectedBlogPosts.includes(blogpost.node.frontmatter.title);
             }
 
             if (display) {
               return (
                 <div key={blogpost.node.id} className={'mt-6 md:mt-0 md:p-2 md:w-1/2 flex'}>
                   <div className={'w-full bg-white'}>
                     <a href={blogpost.node.fields.slug} title={blogpost.node.frontmatter.title}>
                       <div className={'bg-white relative'}>
                         <Img fluid={blogpost.node.frontmatter.background.childImageSharp.fluid} style={{maxHeight: 400}} />
                       </div>
                     </a>
                     <div className={'p-8 border-t-2 border-grey-light'}>
                       <h2 className={'font-bold text-xl md:text-2xl text-blue-dark leading-tight mb-3'}>
                         <a href={blogpost.node.fields.slug}>{blogpost.node.frontmatter.title}</a>
                       </h2>
                       <div className={'text-l md:text-xl leading-tight'}>{blogpost.node.frontmatter.shortdescription}</div>
                     </div>
                   </div>
                 </div>
               )
             }
 
             return null;
           })}
         </div>
       )
     }}
   />
 )
 
 export default BlogPosts
 