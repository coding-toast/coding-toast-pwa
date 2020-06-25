import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import BasicCard from '../../card/BasicCard';

interface IExcerptListProps {
  blogs: IBlog[];
}

interface IBlog {
  banner: string;
  blogId: string;
  description: string;
  publishDate: string;
  title: string;
}

const ExcerptList: React.FC<IExcerptListProps> = (props) => {
  const { blogs } = props;
  return (
    <Row as='section' xs={1} md={2}>
      {blogs?.map((post: IBlog) => {
        const { title, banner, description, publishDate, blogId } = post;
        return (
          <Col key={blogId}>
            <BasicCard title={title} banner={banner} description={description} publishDate={publishDate} />
          </Col>
        );
      })}
    </Row>
  );
};
export default ExcerptList;
