import Prop from 'prop-types';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './S2TPlus-Styles';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { GridCards } from '../../../../components/elements/GridCards/GridCards';
import { VerticalSoloSlide } from '../../../../components/elements/VerticalSoloSlide/VerticalSoloSlide';

export function S2TPlus() {
  const { t } = useTranslation();
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.S2TPlusContainer>
      <GridCards title={t('physical_trainers')} items={s2tState.users.scouts} />
      <GridCards title={t('tactical_trainers')} items={s2tState.users.scouts} />
      <GridCards title={t('psychologists')} items={s2tState.users.scouts} />
      <GridCards title={t('doctors')} items={s2tState.users.scouts} />
    </Styled.S2TPlusContainer>
  );
}

S2TPlus.propTypes = {
};
