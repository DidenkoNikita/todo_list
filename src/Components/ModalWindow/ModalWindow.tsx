import { Close, Edit } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { store } from "../../store/store";

interface Modal {
  open: boolean;
  handleClose: any;
  dialogTitle: string;
  setSelectTitle: any;
  buttonTitle: string;
  selectTitle: string; 
  selectId: number | null;
  request: any;
}

export const ModalWindow = ({open, dialogTitle, setSelectTitle, handleClose, buttonTitle, selectTitle, selectId, request}: Modal): JSX.Element => {
  const handleKeyDown = (event: any) => {
    if(event.key === 'Enter') {
      store.dispatch(request(selectId, selectTitle));
      handleClose();
      console.log('complet');      
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      >
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent 
      >
        <TextField 
          type='text'
          id='outlined-basic' 
          label='Title' 
          variant='outlined' 
          size='small'
          defaultValue={null}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
              setSelectTitle(e.target.value);
          }}
          sx={{
              marginTop: '10px'
          }}
        />
      </DialogContent>
      <DialogActions
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Button
          variant='contained' 
          size='small'
          sx={{
            marginLeft: '7px',
            marginBottom: '10px'
          }} 
          onClick={() => {
            store.dispatch(request(selectId, selectTitle));
            handleClose();
          }}
        >
          <Edit />
          {buttonTitle}
        </Button>
        <Button
          variant='contained' 
          size='small'
          sx={{
          }} 
          onClick={() => {
            handleClose();
          }}
        >
          <Close />   
          Отмена
        </Button>
      </DialogActions>
    </Dialog>
  )
}