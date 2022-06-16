import * as React from 'react';
import { Box, Card, CardContent } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOnOutlined';
import { FilterList, FilterListItem } from 'react-admin';

const HasOrderedFilter = () => (
    <FilterList
        label="Has ordered"
        icon={<MonetizationOnIcon />}
    >
        <FilterListItem
            label="True"
            value={{
                nb_commands_gte: 1,
                nb_commands_lte: undefined,
            }}
            />
            <FilterListItem
                label="False"
                value={{
                    nb_commands_gte: undefined,
                    nb_commands_lte: 0,
                }}
            />
        </FilterList>
    );

export default function FilterSidebar() {
    return(
         <Box
        sx={{
            display: {
                xs: 'none',
                sm: 'block'
            },
            order: -1, // display on the left rather than on the right of the list
            width: '15em',
                marginRight: '1em',
        }}
    >
        <Card>
            <CardContent>
                <HasOrderedFilter />
            </CardContent>
        </Card>
    </Box>
    )   
};