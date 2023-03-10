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
import stableSort from './utils/stableSort';
import { EnhancedTableToolbar } from './enhancedTableToolbar/enhancedTableToolbar.component';
import { EnhancedTableHead } from './enhancedTableHead/enhancedTableHead.component';
import getComparator from './utils/getComparator';
import { usePostData } from '../common/hooks/usePostsData.hook';
import { useDashboardProps } from '../common/hooks/useDashboardProps.hook';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useDeletePost } from '../common/hooks/useDeletePost.hook';


export const Dashboard = () => {
 const {rows , isLoading} = usePostData();

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
} = useDashboardProps(rows);



const navigate = useNavigate(); 

const handleOpenPost = (event:any, id:string) =>{
	event.stopPropagation();
	navigate(`/post/${id}`);
}
  
  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = rows && page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const dateFormat = new Intl.DateTimeFormat('en-US', {
	year: 'numeric',
	month: '2-digit',
	day: '2-digit',
	hour: '2-digit',
	minute: '2-digit',
	timeZone: 'UTC'
  });

  return (
    <Box sx={{ width: '100%' }}>
	{isLoading && <div>Loading ...</div>}
	 {rows && 
	 <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} selectedItems={selected}/>
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
                  const isItemSelected = isSelected(row._id);
                  const labelId = `enhanced-table-checkbox-${index}`;	
					const updatedAt = new Date(row.updatedAt);
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row._id)}
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
							<img style={{width:'50px', marginLeft:'10px'}} src={`${row.imageUrl}`}alt={row.title} />
						</TableCell>

						<TableCell align="left">
							{row.title}
						</TableCell>

						<TableCell align="left">
							{row.text}
						</TableCell>

						<TableCell align="left">
							{row.tags.map(tag=>
								<p key={tag}>
									#{tag}
								</p>)
								}
						</TableCell>

						<TableCell 
							sx={{fontWeight:'600'}} 
							align="left">
								₴ {row.price}
						</TableCell>

						<TableCell 
							align="left"
						>
							<Box sx={{display:'flex', alignItems:'center'}}>
								<RemoveRedEyeIcon sx={{m:'5px'}} fontSize='small'/> 
								{row.viewsCount}
							</Box>
						</TableCell>
						<TableCell align="left">
						{`${dateFormat.format(updatedAt)}`}
						</TableCell>
						<TableCell align="left">
						<Button onClick={(event)=>handleOpenPost(event,row._id)} variant="text">open</Button>
						</TableCell>
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