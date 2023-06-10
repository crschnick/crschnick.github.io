import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionBlog = ({ posts }) => {
  return (
      <Section title="Latest Posts">
        {posts.map((post) => (
            <SummaryItem
                key={post.name}
                name={post.name}
                description={post.description}
                link={post.link}
            />
        ))}
      </Section>
  );
};

export default SectionBlog;
