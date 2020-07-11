import React from 'react';
import StickBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickBox>
        <Body>
          <List
            title="O que está acontecendo"
            elements={[
              <News
                title="@reactjs"
                description="React is a declarative, efficient, and flexible JavaScript library for building user interfaces."
              />,
              <News
                title="Bootcamp da @rocketseat"
                description="O melhor curso de Javascript!"
                image
              />,
              <News
                title="@reactnative"
                description="We just released React Native 0.63 with LogBox and Pressable"
              />,
              <News
                title="@nodejs"
                description="The Node.js JavaScript Runtime."
              />,
              <News
                title="@reactjs"
                description="React is a declarative, efficient, and flexible JavaScript library for building user interfaces."
              />,
              <News
                title="Bootcamp da @rocketseat"
                description="O melhor curso de Javascript!"
                image
              />,
              <News
                title="@reactnative"
                description="We just released React Native 0.63 with LogBox and Pressable"
              />,
              <News
                title="@nodejs"
                description="The Node.js JavaScript Runtime."
              />,
              <News
                title="@reactjs"
                description="React is a declarative, efficient, and flexible JavaScript library for building user interfaces."
              />,
              <News
                title="Bootcamp da @rocketseat"
                description="O melhor curso de Javascript!"
                image
              />,
              <News
                title="@reactnative"
                description="We just released React Native 0.63 with LogBox and Pressable"
              />,
              <News
                title="@nodejs"
                description="The Node.js JavaScript Runtime."
              />,
            ]}
          />

          <List
            title="Quem seguir"
            elements={[
              <FollowSuggestion name="Rocketseat" nickname="@rocketseat" />,
              <FollowSuggestion
                name="Guilherme Rodz"
                nickname="@guilherme_rodz"
              />,
            ]}
          />
        </Body>
      </StickBox>
    </Container>
  );
};

export default SideBar;
