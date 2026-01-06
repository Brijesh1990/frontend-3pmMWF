import React from 'react'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Phone  from '@mui/icons-material/Phone';
export default function ButtonApp() {
return (
<div>
<Button variant="contained">Hello Milan click Me</Button>

<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>

<Button>Primary</Button>
<Button disabled>Disabled</Button>
<Button href="#text-buttons">Link</Button>


<Button variant="contained" onClick={()=>{alert('Hi Meet')}}>Contained</Button>
<Button variant="contained" disabled>
Disabled</Button>
<Button variant="contained" href="#contained-buttons">Link</Button>


<Button color="secondary">Secondary</Button>
<Button variant="contained" color="success">Success</Button>
<Button variant="outlined" color="error">Error</Button>

<Button variant="outlined" color="success" size='medium'>Error</Button>

<Button variant="outlined" color="info" size='small'>Error</Button>

<Button variant="outlined" color="warning" size='large'>Error</Button>
<Button variant="outlined" color="primary" size='large'>Error</Button>


 <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>

</div>
)
}
