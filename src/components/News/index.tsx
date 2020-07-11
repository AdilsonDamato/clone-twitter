import React from 'react';

import { Container, Image } from './styles';

interface Props {
  title: string;
  description: string;
  image?: boolean;
}

const News: React.FC<Props> = ({ title, description, image }) => {
  return (
    <Container>
      <div>
        <span>{title}</span>
        <strong>{description}</strong>
      </div>
      {image && <Image />}
    </Container>
  );
};

export default News;
