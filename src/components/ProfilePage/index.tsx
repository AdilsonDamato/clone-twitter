import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Adilson Pereira</h1>
        <h2>@PereiraAdilson_</h2>

        <p>
          Developer at{' '}
          <a
            href="https://twitter.com/PereiraAdilson_"
            target="_blank"
            rel="noopener noreferrer"
          >
            @PereiraAdilson_
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Criciúma, SC, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 21 de agosto de 1985
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>21</strong>
          </span>
          <span>
            <strong>21 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
