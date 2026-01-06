import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import ButtonApp from './ButtonApp';
// import BoxApp from './BoxApp';
// import ContainerApp from './ContainerApp';
// import GridApp from './GridApp';
import AvtarApp from './AvtarApp';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ButtonApp  />
    <BoxApp />
    <ContainerApp /> */}
    {/* <GridApp /> */}

    <AvtarApp />

  </StrictMode>,
)
