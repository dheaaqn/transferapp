import 'antd/dist/antd.min.css';
import TransactionPage from './pages/transaction_page';
import TransferPage from './pages/transfer_page';
import { Layout, Row, Col } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const {Header, Content} = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Header style={{backgroundColor: '#108ee9', color: '#fff'}}>
            <Row>
                <Col>Transfer App</Col>
            </Row>
          </Header>
          <Content>
            <Routes>
              <Route path='/' element={<TransactionPage/>} />
              <Route path='/transfer' element={<TransferPage/>} />
            </Routes>
          </Content>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
