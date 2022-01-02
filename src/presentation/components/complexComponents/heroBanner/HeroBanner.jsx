import React, { useEffect, useState } from 'react';
import { useStyles } from './heroBanner.styles';
import Image from '../../singleComponents/image/Image';
import Container from '../../singleComponents/grids/Container';

export default function HeroBanner() {
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = useState(0);

  // posteriormente implementar um endpoint para retornar um novo array de imagens a cada dia
  // e acrescentar animação via css para troca dos slides
  const arrayOfStaticUrlImages = [
    'https://www.teslarati.com/wp-content/uploads/2021/12/Starlink-11-Starship-S20-SN10-Dishy-V2-Richard-Angle-SpaceX-1-c.jpg',
    'https://www.nasaspaceflight.com/wp-content/uploads/2021/12/lead-3.jpeg',
    'https://spaceflightnow.com/wp-content/uploads/2021/12/IMG_1062.jpeg',
  ];

  useEffect(() => {
    setInterval(() => {
      const randomNumberImage = Math.floor(Math.random() * arrayOfStaticUrlImages.length);
      setSelectedImage(randomNumberImage);
    }, 8000);
  }, []);

  return (
    <Container className={classes.base}>
      <Image path={arrayOfStaticUrlImages[selectedImage]} className={classes.image} />
    </Container>
  );
}
