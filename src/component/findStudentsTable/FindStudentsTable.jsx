import './FindStudentsTable.css';
import { MaterialReactTable } from "material-react-table";
import { useMemo } from "react";
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import { ListItemIcon, MenuItem } from '@mui/material';
import { AccountCircle, Send } from '@mui/icons-material';


const FindStudentsTable = () => {

    const data = [
        {
            name: 'Oliviya Ryle',
            email: 'olivia@gmail.com',
            jobApplied: 'Jun 4, 2023',
            examScore: '65/100',
            level: 'Level 1',
            jobOffer: 'Received',
            collegeId: '235478091'
        },
        {
            name: 'Oliviya Ryle',
            email: 'olivia@gmail.com',
            jobApplied: 'Jun 4, 2023',
            examScore: '65/100',
            level: 'Level 1',
            jobOffer: 'Not Received',
            collegeId: '235478091'
        },
        {
            name: 'Oliviya Ryle',
            email: 'olivia@gmail.com',
            jobApplied: 'Jun 4, 2023',
            examScore: '65/100',
            level: 'Level 2',
            jobOffer: 'Received',
            collegeId: '235478091'
        },
        {
            name: 'Oliviya Ryle',
            email: 'olivia@gmail.com',
            jobApplied: 'Jun 4, 2023',
            examScore: '65/100',
            level: 'Level 3',
            jobOffer: 'Not Received',
            collegeId: '235478091'
        },
        {
            name: 'Oliviya Ryle',
            email: 'olivia@gmail.com',
            jobApplied: 'Jun 4, 2023',
            examScore: '65/100',
            level: 'Level 3',
            jobOffer: 'Received',
            collegeId: '235478091'
        },
    ];

    const columns = useMemo(
        () => [
            {
                header: 'Student Name',
                accessorKey: 'name',
                size: 100
            },
            {
                header: 'E-mail',
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
                header: 'Job Offer',
                accessorKey: 'jobOffer',
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
        <div className="find-students-table-wrapper">
            <MaterialReactTable
                data={data}
                columns={columns}

                enableRowSelection
                enableDensityToggle={false}
                enableFullScreenToggle={false}
                enableHiding={false}
                enableColumnActions={false}

                initialState={{
                    pagination: {
                        pageSize: 5,
                        pageIndex: 0
                    }
                }}

                muiTableBodyRowProps={{
                    sx: {
                        '& td:nth-of-type(2)': {
                            fontWeight: 600
                        }
                    }
                }}

                muiTableContainerProps={{ sx: { maxHeight: '420px' } }}
                muiTableBodyProps={{
                    sx: {
                        '& tr:nth-of-type(odd)': {
                            backgroundColor: '#EAECF0'
                        }
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

                enableRowActions
                positionActionsColumn='last'
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

export default FindStudentsTable;