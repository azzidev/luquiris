import { Layout } from 'antd';
const { Footer} = Layout;

function FooterMin() {
    return (
        <Footer style={FooterStyle}>Footer</Footer>
    )
}

export default FooterMin;

const FooterStyle: React.CSSProperties = {
    justifyContent: 'center',
    textAlign: 'center',
}