import React, { useState } from 'react';
import { Icon, InputAdornment } from '@material-ui/core';
import { useStyles } from './navigation.style';
import Container from '../../singleComponents/grids/Container';
import InputSimple from '../../singleComponents/InputSimple/InputSimple';
import InputSelector from '../../singleComponents/inputSelector/InputSelector';

export default function Navigation() {
  const classes = useStyles();
  const [inputSearchValue, setInputSearchValue] = useState('');

  const selectorList = ['Mais novas', 'Mais antigas'];

  return (
    <Container className={classes.base}>
      <InputSimple
        type="text"
        className={classes.input}
        value={inputSearchValue}
        onChange={({ target }) => { setInputSearchValue(target.value); }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Container className={classes.iconBox} onClick={() => {}}>
                <Icon>search</Icon>
              </Container>
            </InputAdornment>
          ),
        }}
      />
      <InputSelector menuList={selectorList} classNameStyle={classes.input} />
    </Container>
  );
}
