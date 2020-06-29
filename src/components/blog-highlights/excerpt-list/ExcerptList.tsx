import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import BasicCard from '../../card/BlogCard';

interface IExcerptListProps {
  blogs: IBlog[];
}

interface IBlog {
  author: string;
  banner: string;
  blogId: string;
  createdAt: string;
  description: string;
  title: string;
}

const ExcerptList: React.FC<IExcerptListProps> = (props) => {
  const { blogs } = props;
  return (
    <Row as='section' xs={1} md={2}>
      {blogs?.map((post: IBlog) => {
        const { author, title, banner, description, createdAt, blogId } = post;
        return (
          <Col key={blogId}>
            <BasicCard author={author} title={title} banner={banner} description={description} createdAt={createdAt} />
          </Col>
        );
      })}
    </Row>
  );
};
export default ExcerptList;
