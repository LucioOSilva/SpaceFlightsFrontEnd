import React from 'react';
import CardList from '../../../components/pageComponents/home/CardList';
import Container from '../../../components/singleComponents/grids/Container';
import Navigation from '../../../components/complexComponents/navigation/Navigation';
import HeroBanner from '../../../components/complexComponents/heroBanner/HeroBanner';

export default function HomeClient() {
  return (
    <Container>
      <Navigation />
      <HeroBanner />
      <CardList />
    </Container>
  );
}
