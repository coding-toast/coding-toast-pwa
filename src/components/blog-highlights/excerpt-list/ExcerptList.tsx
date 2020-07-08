import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import BasicCard from '../../card/BlogCard';

interface IExcerptListProps {
  blogs: IBlog[];
}

interface IBlog {
  author: Authors;
  banner: UploadFile;
  isPublished: Boolean;
  publishDate: Date;
  description: String;
  slug: String;
  title: String;
}

const ExcerptList: React.FC<IExcerptListProps> = (props) => {
  const { blogs } = props;
  return (
    <Row as='section' xs={1} md={2}>
      {blogs?.map((post: IBlog) => {
        const { author, title, banner, description, isPublished, publishDate, slug } = post;
        return isPublished ? (
          <Col key={slug.toString()}>
            <BasicCard
              data={{
                authorDisplayName: author.displayName,
                title,
                bannerImageUrl: banner.url,
                bannerAlternativeText: banner.alternativeText,
                description,
                publishDate,
                slug
              }}
            />
          </Col>
        ) : null;
      })}
    </Row>
  );
};
export default ExcerptList;
