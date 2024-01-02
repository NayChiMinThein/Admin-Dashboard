import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from './dataTableSource';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Datatable = () => {
  const [data, setData] = useState(userRows)

  const handleDelete = id => {
    setData(data.filter(item => item.id !== id))
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='flex items-center'>
            <Link to="/users/1">
              <button className='border border-blue-900 text-blue-800 dark:text-gray-400 py-1 px-2 rounded-md me-4'>
                View
              </button>
            </Link>
            <button onClick={() => handleDelete(params.row.id)}
              className='border border-red-800 text-red-600 dark:text-gray-400 py-1 px-2 rounded-md'>
              Delete
            </button>
          </div>
        )
      }
    }
  ]

  return (
    <div style={{ height: 578 }} className='mx-5 mt-7 max-w-7xl'>
      <Link to="/users/new" className='flex justify-center'>
        <button className="bg-violet-600 text-white p-2 rounded-md text-sm mb-7 w-full">
          Add New User
        </button>
      </Link>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable