import { Card, Result, Typography, Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const PaymentFailure = () => {
    return (
        <div style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', background: '#f5f5f5' }}>
            <Card style={{ width: '100%', maxWidth: '800px' }}>
                <Result
                    icon={<CloseCircleOutlined style={{ fontSize: '64px', color: '#ff4d4f' }} />}
                    title={
                        <Title level={2} style={{ margin: '24px 0', textAlign: 'center' }}>
                            Thanh toán khóa học thất bại!
                        </Title>
                    }
                >
                    <div style={{
                        background: '#fff1f0',
                        padding: '24px',
                        borderRadius: '8px',
                        marginBottom: '24px'
                    }}>
                        <Paragraph style={{
                            fontSize: '16px',
                            margin: 0,
                            textAlign: 'center',
                            color: 'rgba(0, 0, 0, 0.85)'
                        }}>
                            Đã xảy ra lỗi trong quá trình thanh toán. Vui lòng thử lại hoặc liên hệ với chúng tôi để được hỗ trợ.
                        </Paragraph>
                    </div>

                    {/* <div style={{ textAlign: 'center' }}>
                        <Button type="primary" size="large" href="/">
                            Thử lại
                        </Button>
                    </div> */}
                </Result>
            </Card>
        </div>
    );
};

export default PaymentFailure;
