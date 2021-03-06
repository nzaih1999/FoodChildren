/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import BlogPost from 'components/cards/blog-post';
import thumb1 from 'assets/images/photo6.jpg';
import thumb2 from 'assets/images/photo7.jpg';
import thumb3 from 'assets/images/photo8.jpg';
import thumb4 from 'assets/images/photo9.jpg';

const data = [
  {
    id: 1,
    slug: '#about',
    thumbnail: thumb1,
    showDescription: true,
    title: `Numbers Don’t Lie! School Feeding Programs Work.`,
    description: `The Covid-19 pandemic has also led to increased food insecurity due to job losses, lockdowns, economic shutdowns and decreased spending on food`,
  },
  {
    id: 2,
    slug: '#how-to',
    thumbnail: null,
    showDescription: false,
    title: `Numbers Don’t Lie! School Feeding Programs Work.`,
    description: `The Covid-19 pandemic has also led to increased food insecurity due to job losses, lockdowns, economic shutdowns and decreased spending on food`,
  },
  {
    id: 3,
    slug: '#how-to',
    thumbnail: thumb3,
    showDescription: false,
    title: `Numbers Don’t Lie! School Feeding Programs Work.`,
    description: `The Covid-19 pandemic has also led to increased food insecurity due to job losses, lockdowns, economic shutdowns and decreased spending on food`,
  },
  {
    id: 4,
    slug: '#how-to',
    thumbnail: thumb2,
    showDescription: true,
    title: `Numbers Don’t Lie! School Feeding Programs Work.`,
    description: `The Covid-19 pandemic has also led to increased food insecurity due to job losses, lockdowns, economic shutdowns and decreased spending on food`,
  },
  {
    id: 5,
    slug: '#how-to',
    thumbnail: thumb4,
    showDescription: false,
    title: `Numbers Don’t Lie! School Feeding Programs Work.`,
    description: `The Covid-19 pandemic has also led to increased food insecurity due to job losses, lockdowns, economic shutdowns and decreased spending on food`,
  },
];

const masonryOptions = { originTop: true };

const Blog = () => {
  return (
    <Box as="section" id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Latest newsfeed"
          title="Popular blog post we updated"
        />
        <Masonry options={masonryOptions} sx={styles.postContainer}>
          {data?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [6, null, null, 9, null, 13],
    pb: [8, null, null, 9, null, 17],
    position: 'relative',
  },
  heading: {
    mb: [6, null, null, 9],
  },
};
