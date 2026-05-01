import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender
} from "@tanstack/react-table";


const data = [
  { id: 1, name: "brijesh", age: 25 },
  { id: 2, name: "raj", age: 30 },
  { id: 3, name: "meet", age: 28 },
  { id: 4, name: "milan", age: 28 },
  { id: 5, name: "brijesh", age: 25 },
  { id: 6, name: "raj", age: 30 },
  { id: 7, name: "meet", age: 28 },
  { id: 8, name: "milan", age: 28 },
  { id: 9, name: "brijesh", age: 25 },
  { id: 10, name: "raj", age: 30 },
  { id: 11, name: "meet", age: 28 },
  { id: 12, name: "milan", age: 28 },
  { id: 13, name: "brijesh", age: 25 },
  { id: 14, name: "raj", age: 30 },
  { id: 15, name: "meet", age: 28 },
  { id: 16, name: "milan", age: 28 },
  
];

const columns = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "age", header: "Age" }
];

export default function App()
{
   const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel()
  });


  return(
    <>

     <div>
      <h2>React Table</h2>
      <table border="1" align="center" width="50%">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  <span
                    onClick={header.column.getToggleSortingHandler()}
                    style={{ cursor: "pointer" }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => table.previousPage()}>Prev</button>
      <button onClick={() => table.nextPage()}>Next</button>
    </div>
     
    </>
  )
}