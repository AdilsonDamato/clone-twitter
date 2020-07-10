import React from 'react';

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

        <h1>AdilsonPereira</h1>
        <h2>@pereiradilson</h2>

        <p>
          Developer at <a href="http://">@pereiradilson</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Criciúma, SC
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
    </Container>
  );
};

export default ProfilePage;
