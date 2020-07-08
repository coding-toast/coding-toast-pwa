import * as React from 'react';
import { Card, Badge, Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { DateDisplay } from 'components';
import { differenceInCalendarDays } from 'date-fns';

interface IBlogCardProps {
  data: IBlogCardAttributes;
}

interface IBlogCardAttributes {
  authorDisplayName: String;
  bannerImageUrl: String;
  bannerAlternativeText: String;
  publishDate: Date;
  description: String;
  slug: String;
  title: String;
}

const BlogCard: React.FC<IBlogCardProps> = (props) => {
  const { authorDisplayName, title, bannerImageUrl, bannerAlternativeText, description, publishDate, slug } = props.data;
  const RELATIVE_DAYS_CUTOFF = 7;

  return (
    <Link href={`/blog/${slug}`}>
      <a className='card-as-link'>
        <Card style={{ margin: '16px 0', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
          <Card.Img
            variant='top'
            src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${bannerImageUrl}`}
            alt={bannerAlternativeText.toString()}
            style={{ height: '275px' }}
          />
          <Card.Body>
            <Card.Title>
              {title}{' '}
              {differenceInCalendarDays(new Date(), new Date(publishDate)) <= RELATIVE_DAYS_CUTOFF ? (
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
                  <Card.Text>{authorDisplayName}</Card.Text>
                </Col>
                <Col className='text-right'>
                  <DateDisplay date={new Date(publishDate)} />
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
