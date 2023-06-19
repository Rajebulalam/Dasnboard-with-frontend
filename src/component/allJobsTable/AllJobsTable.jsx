import { MaterialReactTable } from 'material-react-table';
import './AllJobsTable.css'
import { useMemo } from 'react';
import { ListItemIcon, MenuItem, Typography } from '@mui/material';
import { AccountCircle, Send } from '@mui/icons-material';

const AllJobsTable = () => {

    const data = [
        {
            name: 'Data Entry',
            description: 'This is a description',
            uploadDate: 'Jun, 12, 2023',
            lastUpdate: 'Jun, 14, 2023',
            uploadBy: 'Phoenix Baker'
        },
        {
            name: 'Web Design',
            description: 'This is a description',
            uploadDate: 'Jun, 11, 2023',
            lastUpdate: 'Jun, 13, 2023',
            uploadBy: 'Lana Steiner'
        },
        {
            name: 'Web Developer',
            description: 'This is a description',
            uploadDate: 'Jun, 10, 2023',
            lastUpdate: 'Jun, 12, 2023',
            uploadBy: 'Demi Wilkinson'
        },
        {
            name: 'Front End Developer',
            description: 'This is a description',
            uploadDate: 'Jun, 11, 2023',
            lastUpdate: 'Jun, 15, 2023',
            uploadBy: 'Candice Wu'
        },
        {
            name: 'Backend Developer',
            description: 'This is a description',
            uploadDate: 'Jun, 10, 2023',
            lastUpdate: 'Jun, 16, 2023',
            uploadBy: 'Natali Craig'
        },
        {
            name: 'Data Entry',
            description: 'This is a description',
            uploadDate: 'Jun, 12, 2023',
            lastUpdate: 'Jun, 14, 2023',
            uploadBy: 'Phoenix Baker'
        },
        {
            name: 'Web Design',
            description: 'This is a description',
            uploadDate: 'Jun, 11, 2023',
            lastUpdate: 'Jun, 13, 2023',
            uploadBy: 'Lana Steiner'
        },
        {
            name: 'Web Developer',
            description: 'This is a description',
            uploadDate: 'Jun, 10, 2023',
            lastUpdate: 'Jun, 12, 2023',
            uploadBy: 'Demi Wilkinson'
        },
        {
            name: 'Front End Developer',
            description: 'This is a description',
            uploadDate: 'Jun, 11, 2023',
            lastUpdate: 'Jun, 15, 2023',
            uploadBy: 'Candice Wu'
        },
        {
            name: 'Backend Developer',
            description: 'This is a description',
            uploadDate: 'Jun, 10, 2023',
            lastUpdate: 'Jun, 16, 2023',
            uploadBy: 'Natali Craig'
        }
    ];

    const columns = useMemo(
        () => [
            {
                header: 'Job Name',
                accessorKey: 'name',
                size: 140
            },
            {
                header: 'Job Description',
                accessorKey: 'description',
                size: 100
            },
            {
                header: 'Date Uploaded',
                accessorKey: 'uploadDate',
                size: 100
            },
            {
                header: 'Last Updated',
                accessorKey: 'lastUpdate',
                size: 100
            },
            {
                header: 'Uploaded By',
                accessorKey: 'uploadBy',
                size: 100
            }
        ],
        [],
    );


    return (
        <div className='all-jobs-wrapper'>
            <MaterialReactTable
                columns={columns}
                data={data}
                enableRowSelection
                enableColumnActions={false}
                globalFilterModeOptions={false}
                muiTableHeadCellProps={{
                    sx: {
                        color: '#667085',
                        fontWeight: 500,
                        fontSize: '15px',
                    }
                }}

                muiTableBodyProps={{
                    sx: {
                        '& tr:nth-of-type(odd)': {
                            backgroundColor: '#f5f5f5',
                        }
                    }
                }}
                muiTableBodyCellProps={{
                    sx: {
                        fontSize: '15px',
                        padding: '20px 10px'
                    }
                }}

                muiTableBodyRowProps={{
                    sx: {
                        '& td:nth-of-type(2)': {
                            fontWeight: 600
                        }
                    }
                }}

                renderTopToolbarCustomActions={() => (
                    <Typography
                        padding='10px'
                        variant="h5">Posted Jobs</Typography>
                )}
                enableSorting={false}
                initialState={{
                    pagination: { pageSize: 5, pageIndex: 0 }
                }}
                enableRowActions
                muiTableContainerProps={{ sx: { maxHeight: '420px' } }}
                positionActionsColumn="last"
                renderRowActionMenuItems={({ closeMenu }) => [
                    <MenuItem
                        key={0}
                        onClick={() => {
                            // View profile logic...
                            closeMenu();
                        }}
                        sx={{ m: 0 }}
                    >
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        View Profile
                    </MenuItem>,
                    <MenuItem
                        key={1}
                        onClick={() => {
                            // Send email logic...
                            closeMenu();
                        }}
                        sx={{ m: 0 }}
                    >
                        <ListItemIcon>
                            <Send />
                        </ListItemIcon>
                        Send Email
                    </MenuItem>,
                ]}

            />
        </div>
    );
};

export default AllJobsTable;