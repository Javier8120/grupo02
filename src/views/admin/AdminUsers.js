import {
    Badge,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    Col,
    Button,
    UncontrolledTooltip,
    Form,
    Modal,
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    InputGroup,
  
  
  } from "reactstrap";
  // core components
  
  import { useState } from "react";
  import { useTable, useGlobalFilter, useAsyncDebounce, usePagination } from "react-table";
  import useRows from "components/Tables/Tablasinterno/Filasinterno.js";
  import useColumns from "components/Tables/Tablasinterno/Columnasinterno";
  import Header from "components/Headers/Header";
  import AgregarAdmin from "components/Modals/AgregarAdmin"
  
  
  function AdminsFiltro({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
    const totalAdmins = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter);
  
    const onFilterChange = useAsyncDebounce(
      (value) => setGlobalFilter(value || undefined),
  
    );
  
    const handleInputChange = (e) => {
      setValue(e.target.value);
      onFilterChange(e.target.value);
    };
  
    return (
  
  
  
      <CardHeader className="bg-transparent border-0">
        <Row className="align-items-center">
          <Col xs="4">
            <h3 className="text-white mb-0">Administradores</h3>
          </Col>
          <Col className="text-right" xs="4">
  
            <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
              <FormGroup className="mb-0">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    size={30}
                    value={value || ""}
                    onChange={handleInputChange}
                    placeholder={`${totalAdmins} Administradores registrados`}
                  />
                </InputGroup>
              </FormGroup>
            </Form>
  
          </Col>
          <Col className="text-right" xs="4">
            <AgregarAdmin />
          </Col>
        </Row>
      </CardHeader>
  
  
  
    );
  }
  
  function AdminUsers() {
    const columns = useColumns();
    const data = useRows();
    const table = useTable(
      {
        columns,
        data,
        initialState: {
          PageSize: 5,
          pageIndex: 0,
        }
      },
      useGlobalFilter,
      usePagination
    );
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      rows,
      preGlobalFilteredRows,
      setGlobalFilter,
      state: { pageIndex, pageSize, globalFilter }
    } = table;
  
    return (
      <>
        <Header />
        <Container className="mt--8" fluid>
          <Row className="mt-5">
            <div className="col">
              <Card className="bg-default shadow">
                <AdminsFiltro
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={globalFilter}
                  setGlobalFilter={setGlobalFilter}
                />
  
                <Table {...getTableProps()} className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-dark">
  
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <th scope="col" {...column.getHeaderProps()}>{column.render("Header")}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {
                      page.map((row) => {
                        prepareRow(row);
                        return (
                          <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                              <th scope="row" {...cell.getCellProps()}>{cell.render("Cell")}
                              </th>
                            ))}
                            </tr>
                        );
                      })}
                  </tbody>
                </Table>
                <CardFooter className="bg-transparent border-0">
                  <Row className="align-items-center">
                    <Col xs="4">
                      <h2>Página
                        <strong>
                          {" "}
                          {pageIndex + 1} de {pageOptions.length}
                        </strong>{" "}
                      </h2>
                    </Col>
                    <Col xs="4">
                      <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="mt-4" color="primary">
                        <i class="fas fa-angle-double-left"></i>
                      </Button>{" "}
                      <Button onClick={() => previousPage()} disabled={!canPreviousPage} className="mt-4" color="primary">
                        <i class="fas fa-angle-left"></i>
                      </Button>{" "}
                      <Button onClick={() => nextPage()} disabled={!canNextPage} className="mt-4" color="primary">
                        <i class="fas fa-angle-right"></i>
                      </Button>{" "}
                      <Button className="mt-4" color="primary"
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
  
                      >
                        <i class="fas fa-angle-double-right"></i>
                      </Button>{" "}
                    </Col>
                    <Col xs="4">
                      <select class="form-control"
                        value={pageSize}
                        onChange={(e) => setPageSize(Number(e.target.value))}
                      >
                        {[5, 10, 15].map((pageSize) => (
                          <option key={pageSize} value={pageSize}>
                            {pageSize !== 15 ? `Mostrar ${pageSize}` : `Mostrar todo`}
                          </option>
                        ))}
                      </select>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
  
  export default AdminUsers