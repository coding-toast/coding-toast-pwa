import * as React from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';

interface ICardProps {
  banner: string;
  description: string;
  publishDate: string;
  title: string;
}

const BasicCard: React.FC<ICardProps> = (props) => {
  const { title, banner, description, publishDate } = props;
  return (
    <Card style={{ margin: '16px 0', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
      <Card.Img variant='top' src={banner} alt={`Banner ${title}`} style={{ minHeight: '275px', maxHeight: '275px' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className='mb-2 text-style-muted text-color-secondary'>{publishDate}</Card.Subtitle>
        <Card.Text className='text-color-primary'>{description}</Card.Text>
        <Card.Link>
          <Link href='/'>
            <a>Read More</a>
          </Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default BasicCard;
