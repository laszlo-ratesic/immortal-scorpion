import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const FlexBox = styled(Box)({
  display: 'flex',
});

const FlexBetween = styled(FlexBox)({
  justifyContent: 'space-between',
});

const ColumnFlexBox = styled(FlexBox)({
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '100%',
});

const CenteredFlexBox = styled(FlexBox)({
  justifyContent: 'center',
  alignItems: 'center',
});

const FullSizeCenteredFlexBox = styled(CenteredFlexBox)({
  width: '100%',
  height: '100%',
  flexWrap: 'wrap',
});

export { FlexBox, FlexBetween, ColumnFlexBox, CenteredFlexBox, FullSizeCenteredFlexBox };
