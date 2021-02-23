import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import './resume.css';

export default function Resume({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { html } = markdownRemark;
  return (
    <Layout>
      <SEO title="Resume" />
      <div className="resume">
        <div id="container" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    markdownRemark(fileAbsolutePath: { glob: "**/data/markdown/jeremy_jones_resume.md" }) {
      html
    }
  }
`;
