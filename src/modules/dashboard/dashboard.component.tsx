import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { Order } from '../common/types/common.types';
import stableSort from './utils/stableSort';
import { EnhancedTableToolbar } from './enhancedTableToolbar/enhancedTableToolbar.component';
import { EnhancedTableHead } from './enhancedTableHead/enhancedTableHead.component';
import getComparator from './utils/getComparator';
import { IPosts } from '../common/types/posts.types';
import { usePostData } from '../common/hooks/usePostsData.hook';
import { useDashboardProps } from '../common/hooks/useDashboardProps.hook';



export const Dashboard = () => {
//   const [order, setOrder] = React.useState<Order>('asc');
//   const [orderBy, setOrderBy] = React.useState<keyof IPosts>('title');
//   const [selected, setSelected] = React.useState<any>([]);
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const {rows , isLoading} = usePostData()

  const { 
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
} = useDashboardProps(rows)
  
//   const handleRequestSort = (
//     event: React.MouseEvent<unknown>,
//     property: keyof IPosts,
//   ) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.checked) {
//       const newSelected = rows?.map((n) => n.title);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected: readonly string[] = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = rows && page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
	{isLoading && <div>Loading ...</div>}
	 {rows && 
	 <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.title);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.title)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row._id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row._id}
                      </TableCell>
                      <TableCell align="left">{row.title}</TableCell>
					  <TableCell align="left">{row.text}</TableCell>
                      <TableCell align="left">{row.imageUrl}</TableCell>
  
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10,15,20, rows.length]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>}
    </Box>
  );
}