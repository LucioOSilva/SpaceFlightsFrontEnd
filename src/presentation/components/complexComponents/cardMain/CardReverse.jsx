/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { useStyles } from './cardsStyle.styles';
import Button from '../../singleComponents/buttons/MainButton';
import Container from '../../singleComponents/grids/Container';
import Image from '../../singleComponents/image/Image';
import AnchorLink from '../../singleComponents/AnchorLink/AnchorLink';

export default function CardReverse(props) {
  const classes = useStyles();
  const { article } = props;
  const { imageUrl, publishedAt, summary, title, url } = article;

  return (
    <Container className={classes.base}>
      <Container className={classes.boxDescriptionReverse}>
        <Typography variant="h3">{title}</Typography>
        <Container className={classes.rowSpaced}>
          <Typography variant="subtitle1">{publishedAt}</Typography>
          <AnchorLink href={url}>
            <Button className={classes.btnSmall}>News Site</Button>
          </AnchorLink>
        </Container>
        <Typography variant="body1" className={classes.bodyText}>{summary}</Typography>
        <AnchorLink>
          <Button className={classes.btnMore} color="primary">Ver Mais</Button>
        </AnchorLink>
      </Container>
      <Container className={classes.boxImage}>
        <Image path={imageUrl} className={classes.image} />
      </Container>
    </Container>
  );
}

CardReverse.propTypes = {
  article: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
