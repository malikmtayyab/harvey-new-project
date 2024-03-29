import { useState, useEffect } from 'react';
/* eslint-disable */

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

// import { users } from 'src/_mock/user';

import Scrollbar from 'src/components/scrollbar';

import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';
import TankModal from '../Modal';
import UrlService from 'src/services/UrlService';
import { GetRequest } from '../../../services/ApiService';
import { useTranslation } from 'react-i18next';
// ----------------------------------------------------------------------

export default function UserPage() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    getTableData();
  }, []); //

  const getTableData = async () => {
    try {
      const response = await GetRequest(UrlService.getAllFarms);
      setTableData(response.data);
    } catch (err) {
      toast.error('Error Getting Farms');
    }
  };

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = tableData.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  const role = localStorage.getItem('roles');

  const { t } = useTranslation();

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">{t('All Farms')}</Typography>
        {role != 'user' && role != 'manager' && <TankModal refreshTableData={getTableData} />}
      </Stack>

      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={tableData.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'name', label: 'Name', align: 'left' },
                  { id: 'created_at', label: 'Created At', align: 'left' },
                  { id: 'updated_at', label: 'Updated At', align: 'left' },
                  { id: 'filled', label: 'Filled', align: 'left' },
                  { id: 'total_volume', label: 'Total Volume', align: 'left' },
                  { id: 'nextday_forecast', label: 'Nextday Forecast', align: 'left' },
                  { id: 'week_forecast', label: 'Week Forecast', align: 'left' },
                  { id: 'month_forecast', label: 'Month Forecast', align: 'left' },
                  { id: 'year_forecast', label: 'Year Forecast', align: 'left' },
                  { id: '' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row,index) => (
                    <UserTableRow
                      key={row.id}
                      index={index}
                      id={row.id}
                      name={row.name}
                      creatTime={row.createTime}
                      updateTime={row.updateTime}
                      filled={row.totalFilled}
                      totalVolumn={row.totalVolume}
                      nextDay={row.forecastNextDay}
                      week={row.forecastWeek}
                      month={row.forecastMonth}
                      year={row.forecastYear}
                      selected={selected.indexOf(row.name) !== -1}
                      handleClick={(event) => handleClick(event, row.name)}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
