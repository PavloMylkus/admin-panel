import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { EnhancedTableToolbarProps } from '../../common/types/common.types';
import { useDeletePost } from '../../common/hooks/useDeletePost.hook';



  
export const EnhancedTableToolbar=(props: EnhancedTableToolbarProps) =>{
	const { numSelected, selectedItems } = props;
	const {deleteItemsMutation} = useDeletePost();

	const handleDeleteClick = (ids: string[]) => {
		deleteItemsMutation.mutate(ids);
	  };
	return (
	  <Toolbar
		sx={{
		  pl: { sm: 2 },
		  pr: { xs: 1, sm: 1 },
		  ...(numSelected > 0 && {
			bgcolor: (theme) =>
			  alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
		  }),
		}}
	  >
		{numSelected > 0 ? (
		  <Typography
			sx={{ flex: '1 1 100%' }}
			color="inherit"
			variant="subtitle1"
			component="div"
		  >
			{numSelected} selected
		  </Typography>
		) : (
		  <Typography
			sx={{ flex: '1 1 100%' }}
			variant="h6"
			id="tableTitle"
			component="div"
		  >
			All posts
		  </Typography>
		)}
		{numSelected > 0 ? (
		  <Tooltip title="Delete">
			<IconButton onClick={() => handleDeleteClick(selectedItems)}>
			  <DeleteIcon />
			</IconButton>
		  </Tooltip>
		) : (
		  <Tooltip title="Filter list">
			<IconButton>
			  <FilterListIcon />
			</IconButton>
		  </Tooltip>
		)}
	  </Toolbar>
	);
  }