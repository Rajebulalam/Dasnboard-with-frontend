import { useMemo } from 'react';
import './AllStudentsTable.css';
import { MaterialReactTable } from 'material-react-table';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button'

const AllStudentsTable = () => {

    const data = [
        {
            name: 'Oliviya Ryhe',
            email: 'oliviya@gmail.com',
            jobApplied: 'Jun 4, 2023',
            examScore: '40/100',
            level: "Lvel 1",
            collegeId: "2409236787",
        },
        {
            name: 'Oliviya Ryhe',
            email: 'oliviya@gmail.com',
            jobApplied: 'Jun 4, 2023',
            examScore: '40/100',
            level: "Lvel 1",
            collegeId: "2409236787"
        },
        {
            name: 'Oliviya Ryhe',
            email: 'oliviya@gmail.com',
            jobApplied: 'Jun 4, 2023',
            examScore: '40/100',
            level: "Lvel 1",
            collegeId: "2409236787"
        },
        {
            name: 'Oliviya Ryhe',
            email: 'oliviya@gmail.com',
            jobApplied: 'Jun 4, 2023',
            examScore: '40/100',
            level: "Lvel 1",
            collegeId: "2409236787"
        },
        {
            name: 'Oliviya Ryhe',
            email: 'oliviya@gmail.com',
            jobApplied: 'Jun 4, 2023',
            examScore: '40/100',
            level: "Lvel 1",
            collegeId: "2409236787"
        }
    ];

    const columns = useMemo(
        () => [
            {
                header: 'Students Name',
                accessorKey: 'name',
                size: 100
            },
            {
                header: 'Email',
                accessorKey: 'email',
                size: 100
            },
            {
                header: 'Job Applied',
                accessorKey: 'jobApplied',
                size: 100
            },
            {
                header: 'Exam Score',
                accessorKey: 'examScore',
                size: 100
            },
            {
                header: 'Level',
                accessorKey: 'level',
                size: 100
            },
            {
                header: 'College Id',
                accessorKey: 'collegeId',
                size: 100
            }
        ], []
    );

    return (
        <div className='all-students-table-wrapper'>
            <MaterialReactTable
                data={data}
                columns={columns}
                enableRowSelection
                enableColumnActions={false}
                enableDensityToggle={false}
                enableFullScreenToggle={false}
                enableHiding={false}
                positionGlobalFilter='left'
                muiTableBodyProps={{
                    sx: {
                        '& tr:nth-of-type(odd)': {
                            backgroundColor: '#EAECF0'
                        }
                    }
                }}
                muiTablePaginationProps={{
                    sx: {
                        fontSize: '18px',
                        fontWeight: 700
                    }
                }}
                renderTopToolbarCustomActions={() => (
                    <Box sx={{ display: 'flex', gap: '1rem', p: '4px' }}>
                        <Button
                            className='export-btn'
                            onClick={() => {
                                alert('Create New Account');
                            }}
                            variant="contained"
                        >
                            Export
                        </Button>
                    </Box>
                )}
            />
        </div>
    );
};

export default AllStudentsTable;