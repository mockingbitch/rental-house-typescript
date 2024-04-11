import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './globals.css'
import './index.css';
import {Provider} from "react-redux";
import {I18nextProvider} from "react-i18next";
import {BrowserRouter} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import {store} from "@/store/store.ts";
import i18n from "@/translator/i18n.ts";

const persist = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persist }>
            <I18nextProvider i18n={ i18n }>
                <BrowserRouter>
                    <App />
                </BrowserRouter>,
            </I18nextProvider>
        </PersistGate>
    </Provider>
)
