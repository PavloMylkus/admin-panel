import * as React from 'react'
import { Order } from '../types/common.types';
import { IPosts } from '../types/posts.types';

export const useDashboardProps=(rows:IPosts[] | undefined)=>{
	const [order, setOrder] = React.useState<Order>('asc');
	const [orderBy, setOrderBy] = React.useState<keyof IPosts>('title');
	const [selected, setSelected] = React.useState<any>([]);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleRequestSort = (
		event: React.MouseEvent<unknown>,
		property: keyof IPosts,
	  ) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	  };
	
	  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
		  const newSelected = rows?.map((n) => n.title);
		  setSelected(newSelected);
		  return;
		}
		setSelected([]);
	  };
	
	  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected: readonly string[] = [];
	
		if (selectedIndex === -1) {
		  newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
		  newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
		  newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
		  newSelected = newSelected.concat(
			selected.slice(0, selectedIndex),
			selected.slice(selectedIndex + 1),
		  );
		}
	
		setSelected(newSelected);
	  };
	
	  const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	  };
	
	  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	  };


	  return { 
		page, 
		order, 
		orderBy, 
		rowsPerPage, 
		selected, 
		handleRequestSort, 
		handleSelectAllClick, 
		handleClick, 
		handleChangePage, 
		handleChangeRowsPerPage
	}
}