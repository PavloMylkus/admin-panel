import * as React from 'react';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import { EnhancedTableProps, HeadCell } from '../../common/types/common.types';
import { IPosts } from '../../common/types/posts.types';


const headCells: readonly HeadCell[] = [
	{
	  id: 'imageUrl',
	  numeric: false,
	  label: 'Image',
	},
	{
	  id: 'title',
	  numeric: false,
	  label: 'Title',
	},
	{
	  id: 'text',
	  numeric: true,
	  label: 'Description',
	},
	{
	  id: 'tags',
	  numeric: false,
	  label: 'Tags',
	},
	{
	  id: 'price',
	  numeric: true,
	  label: 'Price',
	},
	{
		id: 'viewsCount',
		numeric: true,
		label: 'Views',
	  },
	{
	  id: 'updatedAt',
	  numeric: false,
	  label: 'Update at',
	},
	
  ];


  
export const EnhancedTableHead = (props: EnhancedTableProps)=> {
	const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
	  props;
	const createSortHandler =
	  (property: keyof IPosts) => (event: React.MouseEvent<unknown>) => {
		onRequestSort(event, property);
	  };
  
	return (
	  <TableHead>
		<TableRow>
		  <TableCell padding="checkbox">
			<Checkbox
			  color="primary"
			  indeterminate={numSelected > 0 && numSelected < rowCount}
			  checked={rowCount > 0 && numSelected === rowCount}
			  onChange={onSelectAllClick}
			  inputProps={{
				'aria-label': 'select all desserts',
			  }}
			/>
		  </TableCell>
		  {headCells.map((headCell) => (
			<TableCell
			  key={headCell.id}
			  align={'left'}
			  padding={'normal'}
			  sortDirection={orderBy === headCell.id ? order : false}
			>
			  <TableSortLabel
				active={orderBy === headCell.id}
				direction={orderBy === headCell.id ? order : 'asc'}
				onClick={createSortHandler(headCell.id)}
			  >
				{headCell.label}
				{orderBy === headCell.id ? (
				  <Box component="span" sx={visuallyHidden}>
					{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
				  </Box>
				) : null}
			  </TableSortLabel>
			</TableCell>
		  ))}
		</TableRow>
	  </TableHead>
	);
  }
  
