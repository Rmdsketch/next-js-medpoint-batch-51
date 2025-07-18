'use client';

import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';

const DrawerHeaderComponent = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface DrawerHeaderProps {
  handleDrawerClose?: () => void;
}

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({
  handleDrawerClose,
}) => {
  const theme = useTheme();

  return (
    <DrawerHeaderComponent>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeaderComponent>
  );
};
