import { Box, Button } from '@mui/material';
import { recordingBoardDataOnServer } from '../../store/asyncActions/recordingBoardDataOnServer';
import { Board } from '../Board/Board';

import css from './BoardContainer.module.css';
import { Add } from '@mui/icons-material';

export interface Props {
    filter: Filter[];   
}

export interface Filter {
    idBoard: number,
    title: string
}

export const BoardContainer = ({filter}: Props): JSX.Element => {
    return (
        <Box className={css.area}>
            <Button
                variant="contained" 
                size="small"
                sx={{
                  marginTop: '10px',
                }} 
                onClick={() => recordingBoardDataOnServer()}
            >
                <Add />
                Добавить доску
            </Button>
            <Board filter={filter} />
        </Box>
    );
}