import HeaderNav from '../components/header/Header';
import FooterMin from '../components/footer/FooterMin';
import { Layout } from 'antd';
const { Content } = Layout;

function Home() {
    return (
        <Layout style={HomeStyle}>
            <HeaderNav />
            <Content style={ContentStyle}>
                
            </Content>
            <FooterMin />
        </Layout>
    );
}

export default Home;

const HomeStyle: React.CSSProperties = {
    minHeight: '100vh',
}

const ContentStyle: React.CSSProperties = {
    padding: '0 50px',
    marginTop: 64,
}