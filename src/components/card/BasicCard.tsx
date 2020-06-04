import * as React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'gatsby'

interface CardProps {
  id: string
  title: string
  banner: string
  description: string
  publishDate: string
}

const BasicCard: React.FC<CardProps> = (props) => {
  const { id, title, banner, description, publishDate } = props
  return (
    <div>
      <Card key={id} style={{ margin: '16px 0', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
        <Card.Img variant="top" src={banner} alt={`Banner ${title}`} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-style-muted text-color-secondary">{publishDate}</Card.Subtitle>
          <Card.Text className="text-color-primary">{description}</Card.Text>
          <Card.Link>
            <Link to="/">Read More</Link>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default BasicCard
