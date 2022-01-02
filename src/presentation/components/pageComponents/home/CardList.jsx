import React, { useState, useEffect } from 'react';
import { Icon, Typography } from '@material-ui/core';
import { useStyles } from './cardList.styles';
import CardMain from '../../complexComponents/cardMain/CardMain';
import CardReverse from '../../complexComponents/cardMain/CardReverse';
import Container from '../../singleComponents/grids/Container';
import ArticlesAPI from '../../../services/API/others/ArticlesAPI';
import MainButton from '../../singleComponents/buttons/MainButton';

export default function CardList() {
  const classes = useStyles();
  const [dataArticles, setDataArticles] = useState(null);
  const [dataArticlesSerialized, setDataArticlesSerialized] = useState(null);
  const [page, setPage] = useState(1);
  const [articleNum, setArticleNum] = useState([null, null]);

  useEffect(() => {
    const retrieveArticles = async () => {
      ArticlesAPI.getArticles(page)
        .then(({ data }) => {
          if (data.message) throw data;
          setDataArticles(data.data.articles);
        })
        .catch((error) => {
          console.error(error.message);
        });
    };
    retrieveArticles();
  }, [page]);

  useEffect(() => {
    const cardSelectorToShow = (number) => {
      switch (number) {
        case 0:
          setArticleNum([-1, -1]);
          break;
        case 1:
          setArticleNum([0, -1]);
          break;
        default:
          setArticleNum([0, 1]);
          break;
      }
    };

    const articlesSerializer = (articles) => {
      const serializedData = articles.map((article) => {
        const older = article;
        const date = new Date(article.publishedAt);
        older.publishedAt = `${date.toLocaleDateString('en-US')} ${date.toLocaleTimeString()}`;
        return older;
      });
      setDataArticlesSerialized(serializedData);
    };

    if (dataArticles) {
      cardSelectorToShow(dataArticles.length);
      articlesSerializer(dataArticles);
    }
  }, [dataArticles]);

  const handleChangeCard = (target) => {
    const dataLength = dataArticlesSerialized.length;
    const numberSelected = Number(target.getAttribute('value'));

    const verifyToChangeCard = (selector) => {
      if ((selector + articleNum[0]) < 0) return false;
      if ((selector + articleNum[1]) > dataLength - 1) return false;
      return true;
    };

    if (verifyToChangeCard(numberSelected)) {
      const selected = [articleNum[0] + numberSelected, articleNum[1] + numberSelected];
      setArticleNum(selected);
    }
  };

  const handleFetchMore = () => { setPage(page + 1); };

  return (
    <Container className={classes.base}>
      <Container className={classes.iconBox}>
        {
          articleNum[0] > 0
          && (
          <Icon
            value="-1"
            onClick={({ target }) => handleChangeCard(target)}
            className={classes.icon}
          >
            keyboard_arrow_up
          </Icon>
          )
        }
      </Container>
      {
        !dataArticlesSerialized
          ? (<Typography variant="h3">Searching articles...</Typography>)
          : (
            <Container className={classes.cardList}>
              {articleNum[0] >= 0
                  && (<CardMain article={dataArticlesSerialized[articleNum[0]]} />)}
              {articleNum[1] >= 0
                && (<CardReverse article={dataArticlesSerialized[articleNum[1]]} />)}
              {articleNum[0] < 0 && articleNum[1] < 0
                && <Typography variant="h3" className={classes.base}>We dont have more articles to show, try another page</Typography>}
            </Container>
          )
      }
      <Container className={classes.iconBox}>
        {
          dataArticlesSerialized && articleNum[1] < dataArticlesSerialized.length - 1
          && (
          <Icon
            value="+1"
            onClick={({ target }) => handleChangeCard(target)}
            className={classes.icon}
          >
            keyboard_arrow_down
          </Icon>
          )
        }
      </Container>
      <Container className={classes.base}>
        <MainButton onClick={() => handleFetchMore()}>Carregar Mais</MainButton>
      </Container>
    </Container>
  );
}
