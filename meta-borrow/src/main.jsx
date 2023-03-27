import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";

const alchemyId = "iSoLFoQDND_y0a4IOLotRoJ";

const client = createClient(
  getDefaultClient({
    appName: "Meta-Borrow",
    alchemyId,
  }),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <App/>
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
)
