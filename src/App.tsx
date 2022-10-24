import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/common/loading/Loading';
import paths from './routes/paths';
import Home from './pages/home/Home';
import CodeEditor from './pages/code-editor/CodeEditor';
import PrivateRoute from './auth/PrivateRoute';
import PrivatePage from './pages/private-page/PrivatePage';
import StoreProvider from './store/StoreProvider';
import CustomThemeProvider from './theme/CustomThemeProvider';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Suspense fallback={<Loading />}>
        <StoreProvider>
          <CustomThemeProvider>
            <Routes>
              <Route path={paths.home} element={<Home />} />
              <Route path={paths.codeEditor} element={<PrivateRoute />}>
                <Route path={paths.codeEditor} element={<CodeEditor />} />
              </Route>
              <Route path={paths.privatePage} element={<PrivatePage />} />
            </Routes>
          </CustomThemeProvider>
        </StoreProvider>
      </Suspense>
    </>
  );
}

export default App;
