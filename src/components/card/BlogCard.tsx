import * as React from 'react';
import { Card, Badge, Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { DateDisplay } from 'components';
import { differenceInCalendarDays } from 'date-fns';

interface IBlogCardProps {
  author: string;
  banner: string;
  createdAt: string;
  description: string;
  slug: string;
  title: string;
}

const BlogCard: React.FC<IBlogCardProps> = (props) => {
  const { author, title, banner, description, createdAt, slug } = props;
  const RELATIVE_DAYS_CUTOFF = 7;

  return (
    <Link href={`/blog/${slug}`}>
      <a className='card-as-link'>
        <Card style={{ margin: '16px 0', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
          <Card.Img variant='top' src={banner} alt={`Banner ${title}`} style={{ height: '275px' }} />
          <Card.Body>
            <Card.Title>
              {title}{' '}
              {differenceInCalendarDays(new Date(), new Date(createdAt)) <= RELATIVE_DAYS_CUTOFF ? (
                <Badge pill className='bg-accent-secondary'>
                  New
                </Badge>
              ) : (
                ''
              )}
            </Card.Title>
            <Card.Text className='text-color-primary'>{description}</Card.Text>
          </Card.Body>
          <Card.Footer className='text-muted'>
            <Container className='p-0'>
              <Row noGutters>
                <Col>
                  <Card.Text>{author}</Card.Text>
                </Col>
                <Col className='text-right'>
                  <DateDisplay date={new Date(createdAt)} />
                </Col>
              </Row>
            </Container>
          </Card.Footer>
        </Card>
      </a>
    </Link>
  );
};

export default BlogCard;
